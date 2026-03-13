"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext"; // Using Firebase Auth Context instead of next-auth
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AlertsPage() {
  const { user } = useAuth(); // Using Firebase user instead of next-auth session
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [alertSettings, setAlertSettings] = useState({
    emergency: false,
    newsletter: false,
  });
  const [initialNewsletter, setInitialNewsletter] = useState<boolean | null>(null);
  const [initialEmergency, setInitialEmergency] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);

  const fetchAlertSettings = useCallback(async () => {
    if (!user?.uid) return;

    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setAlertSettings({
          emergency: userData.alerts?.emergency || false,
          newsletter: userData.newsletterSubscribed || false,
        });
        setInitialNewsletter(userData.newsletterSubscribed || false);
        setInitialEmergency(userData.alerts?.emergency || false);
      }
    } catch (error) {
      console.error("Error fetching alert settings:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    fetchAlertSettings();
  }, [user, router, fetchAlertSettings]);

  const handleToggle = (type: keyof typeof alertSettings) => {
    setAlertSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    setSaved(false);
  };

  const handleSave = async (overrideSettings?: typeof alertSettings) => {
    if (!user?.uid) return;

    const settingsToSave = overrideSettings || alertSettings;

    try {
      setLoading(true);
      
      // Update user document with alert preferences
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        alerts: {
          emergency: settingsToSave.emergency,
        },
        newsletterSubscribed: settingsToSave.newsletter,
        updatedAt: new Date(),
      }, { merge: true });

      // Check if they changed emergency alerts
      if (initialEmergency === false && settingsToSave.emergency === true) {
        if (user.email) {
          await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              subject: "Emergency Alerts Enabled - Port Laken update",
              html: `<p>Hi there,</p><p>You have successfully enabled Port Laken emergency alerts.</p><br/><p>Best,<br/>The City of Port Laken</p>`
            })
          });
        }
        setInitialEmergency(true);
      } else if (initialEmergency === true && settingsToSave.emergency === false) {
        setInitialEmergency(false);
      }

      // Check if they just unsubscribed
      if (initialNewsletter === true && settingsToSave.newsletter === false) {
        if (user.email) {
          await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              subject: "You've been unsubscribed from Port Laken updates",
              html: `<p>Hi there,</p><p>You have successfully unsubscribed from the Port Laken newsletter.</p><p>You will no longer receive these updates. If you'd like to subscribe again in the future, you can do so from your Port Laken dashboard.</p><br/><p>Best,<br/>The City of Port Laken</p>`
            })
          });
        }
        setInitialNewsletter(false); // Update so we don't send again
      } else if (initialNewsletter === false && settingsToSave.newsletter === true) {
        if (user.email) {
          await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              subject: "Welcome back to the Port Laken Newsletter!",
              html: `<p>Hi there,</p><p>Thank you for resubscribing to the Port Laken newsletter! You'll now receive our latest stories, news, and highlights right here.</p><br/><p>Best,<br/>The City of Port Laken</p>`
            })
          });
        }
        setInitialNewsletter(true);
      }

      setSaved(true);
    } catch (error) {
      console.error("Error saving alert settings:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to manage your alerts</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alert Preferences</h1>
          <p className="text-gray-600">
            Manage your notification preferences for Port Laken updates
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 md:p-8">
          {loading ? (
            <p className="text-center">Loading preferences...</p>
          ) : (
            <>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Emergency Alerts</h3>
                    <p className="text-sm text-gray-500">Important safety and emergency notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alertSettings.emergency}
                      onChange={() => handleToggle('emergency')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 rounded-full"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Newsletter Subscription</h3>
                    <p className="text-sm text-gray-500">Monthly newsletter with highlights and updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alertSettings.newsletter}
                      onChange={() => handleToggle('newsletter')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 rounded-full"></div>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                    onClick={() => handleSave()}
                  disabled={loading}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  Save Preferences
                </button>
              </div>

              {saved && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-center">
                  Preferences saved successfully!
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-10 bg-white shadow rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Unsubscribe from Newsletter</h2>
          <p className="text-gray-600 mb-4">
            If you no longer wish to receive our monthly newsletter, you can unsubscribe here.
          </p>
          <button
            onClick={() => {
              const newSettings = { ...alertSettings, newsletter: false };
              setAlertSettings(newSettings);
              handleSave(newSettings);
            }}
            className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Unsubscribe from Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}