"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext"; // Using Firebase Auth Context instead of next-auth
import { db } from "@/lib/firebase";
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc,
  deleteDoc 
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth(); // Using Firebase user instead of next-auth session
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<any[]>([]);
  const [alertSettings, setAlertSettings] = useState({
    emergency: false,
    news: false,
    events: false,
    newsletter: false,
  });

  const fetchUserData = useCallback(async () => {
    if (!user?.uid) return;

    try {
      // Fetch user's submitted resources
      const resourcesQuery = query(
        collection(db, "resources"),
        where("userId", "==", user.uid)
      );
      const resourcesSnapshot = await getDocs(resourcesQuery);
      const userResources = resourcesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Fetch alert settings
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      const alertData = {
        emergency: false,
        news: false,
        events: false,
        newsletter: false,
      };

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.alerts) {
          alertData.emergency = userData.alerts.emergency || false;
          alertData.news = userData.alerts.news || false;
          alertData.events = userData.alerts.events || false;
        }
        if (typeof userData.newsletterSubscribed === 'boolean') {
          alertData.newsletter = userData.newsletterSubscribed;
        }
      }

      setResources(userResources);
      setAlertSettings(alertData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }, [user, router]);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    fetchUserData();
  }, [user, router, fetchUserData]);

  const handleDeleteResource = async (resourceId: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;

    try {
      await deleteDoc(doc(db, "resources", resourceId));
      setResources(resources.filter(res => res.id !== resourceId));
      alert("Resource deleted successfully!");
    } catch (error) {
      console.error("Error deleting resource:", error);
      alert("Failed to delete resource. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to access your dashboard</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">
            Manage your resources and notification preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resources Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Submitted Resources</h2>
              <Link href="/resource-directory/submit" className="text-blue-600 hover:text-blue-800 font-medium">
                + Add New
              </Link>
            </div>

            {loading ? (
              <p className="text-center">Loading resources...</p>
            ) : resources.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">You haven&apos;t submitted any resources yet.</p>
                <Link href="/resource-directory/submit" className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700">
                  Submit Your First Resource
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-900">{resource.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        resource.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : resource.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {resource.status?.charAt(0).toUpperCase() + resource.status?.slice(1) || 'Pending'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{resource.description}</p>
                    
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Submitted: {resource.createdAt?.toDate ? resource.createdAt.toDate().toLocaleDateString() : 'N/A'}
                      </span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => router.push(`/resource-directory/edit/${resource.id}`)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteResource(resource.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Alerts & Newsletter Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>

            {loading ? (
              <p className="text-center">Loading preferences...</p>
            ) : (
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">Emergency Alerts</h3>
                      <p className="text-sm text-gray-500">Important safety and emergency notifications</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      alertSettings.emergency 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {alertSettings.emergency ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">News Updates</h3>
                      <p className="text-sm text-gray-500">Latest news and announcements from Port Laken</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      alertSettings.news 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {alertSettings.news ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">Event Notifications</h3>
                      <p className="text-sm text-gray-500">Information about upcoming events in Port Laken</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      alertSettings.events 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {alertSettings.events ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">Newsletter Subscription</h3>
                      <p className="text-sm text-gray-500">Monthly newsletter with highlights and updates</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      alertSettings.newsletter 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {alertSettings.newsletter ? 'SUBSCRIBED' : 'NOT SUBSCRIBED'}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/alerts" className="w-full block text-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-blue-700">
                    Manage All Notifications
                  </Link>
                  
                  {alertSettings.newsletter && (
                    <Link href="/alerts" className="w-full block mt-3 text-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      Unsubscribe from Newsletter
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}