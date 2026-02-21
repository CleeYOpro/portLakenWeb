"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext"; // Using Firebase Auth Context instead of next-auth
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user } = useAuth(); // Using Firebase user instead of next-auth session
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    bio: "",
  });

  const fetchProfileData = useCallback(async () => {
    if (!user?.uid) return;

    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setProfileData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          phone: userData.phone || "",
          address: userData.address || "",
          bio: userData.bio || "",
        });
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setError("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    fetchProfileData();
  }, [user, router, fetchProfileData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    if (!user?.uid) {
      setError("You must be logged in to update your profile.");
      setSaving(false);
      return;
    }

    try {
      // Update user profile in Firestore
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        ...profileData,
        updatedAt: new Date(),
      }, { merge: true });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to access your profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Update Profile</h1>
          <p className="text-gray-600">
            Manage your personal information and preferences
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
            Profile updated successfully!
          </div>
        )}

        <div className="bg-white shadow rounded-lg p-6 md:p-8">
          {loading ? (
            <p className="text-center">Loading profile...</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Main St, Port Laken, WA"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us a little about yourself..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Manage Account</h2>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-900">Dashboard</h3>
              <p className="text-sm text-gray-500 mt-1">View your submitted resources and account status</p>
              <a 
                href="/dashboard"
                className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 inline-block"
              >
                Go to Dashboard
              </a>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-900">Alerts & Notifications</h3>
              <p className="text-sm text-gray-500 mt-1">Manage your alerts and newsletter preferences</p>
              <a 
                href="/alerts"
                className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 inline-block"
              >
                Manage Alerts
              </a>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-900">Change Password</h3>
              <p className="text-sm text-gray-500 mt-1">Update your account password</p>
              <a 
                href="/change-password"
                className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 inline-block"
              >
                Change Password
              </a>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-900">Delete Account</h3>
              <p className="text-sm text-gray-500 mt-1">Permanently remove your account and all associated data</p>
              <button 
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                    // Implement account deletion logic
                  }
                }}
                className="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}