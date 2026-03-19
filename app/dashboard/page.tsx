"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getStatusBadgeClasses, getStatusLabel } from "@/lib/dashboardBadge";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2">
      <span className="font-medium text-gray-600 shrink-0">{label}:</span>
      <span className="text-gray-800 break-words">{value}</span>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<any[]>([]);
  const [expandedResourceId, setExpandedResourceId] = useState<string | null>(null);
  const [alertSettings, setAlertSettings] = useState({
    emergency: false,
    newsletter: false,
  });

  const fetchUserData = useCallback(async () => {
    if (!user?.uid) return;

    try {
      const resourcesQuery = query(
        collection(db, "resources"),
        where("userId", "==", user.uid)
      );
      const resourcesSnapshot = await getDocs(resourcesQuery);
      const userResources = resourcesSnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      const alertData = { emergency: false, newsletter: false };

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.alerts) {
          alertData.emergency = userData.alerts.emergency || false;
        }
        if (typeof userData.newsletterSubscribed === "boolean") {
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
      setResources(resources.filter((res) => res.id !== resourceId));
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16 pt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <p className="text-gray-600 md:max-w-md">
            Manage your resources and notification preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resources Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Submitted Resources</h2>
              <Link
                href="/resource-directory/submit"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                + Add New
              </Link>
            </div>

            {loading ? (
              <p className="text-center">Loading resources...</p>
            ) : resources.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">You haven&apos;t submitted any resources yet.</p>
                <Link
                  href="/resource-directory/submit"
                  className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Your First Resource
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {resources.map((resource) => {
                  const isExpanded = expandedResourceId === resource.id;
                  const approvalStatus = resource.approvalStatus ?? resource.status;
                  return (
                    <div
                      key={resource.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      {/* Clickable card header */}
                      <button
                        className="w-full text-left p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        onClick={() =>
                          setExpandedResourceId(isExpanded ? null : resource.id)
                        }
                        aria-expanded={isExpanded}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-gray-900">
                            {resource.name ?? resource.title}
                          </h3>
                          <div className="flex items-center gap-2 ml-2 shrink-0">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClasses(approvalStatus)}`}
                            >
                              {getStatusLabel(approvalStatus)}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {isExpanded ? "▲" : "▼"}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {resource.shortDescription ?? resource.description}
                        </p>
                        <span className="text-xs text-gray-500 mt-2 block">
                          Submitted:{" "}
                          {resource.createdAt?.toDate
                            ? resource.createdAt.toDate().toLocaleDateString()
                            : "N/A"}
                        </span>
                      </button>

                      {/* Expanded detail panel */}
                      {isExpanded && (
                        <div className="border-t bg-gray-50 p-4 space-y-3 text-sm text-gray-700">
                          {/* Status-specific messages */}
                          {approvalStatus === "approved" && (
                            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
                              <span>✓</span>
                              <span>This resource is live in the directory.</span>
                            </div>
                          )}
                          {approvalStatus === "rejected" && resource.rejectionReason && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800">
                              <p className="font-medium mb-1">Rejection Reason</p>
                              <p>{resource.rejectionReason}</p>
                            </div>
                          )}

                          {/* Full submission fields */}
                          <div className="grid grid-cols-1 gap-2">
                            {resource.category && (
                              <DetailRow label="Category" value={resource.category} />
                            )}
                            {resource.fullDescription && (
                              <DetailRow label="Full Description" value={resource.fullDescription} />
                            )}
                            {resource.address && (
                              <DetailRow label="Address" value={resource.address} />
                            )}
                            {resource.phone && (
                              <DetailRow label="Phone" value={resource.phone} />
                            )}
                            {resource.email && (
                              <DetailRow label="Email" value={resource.email} />
                            )}
                            {resource.website && (
                              <DetailRow label="Website" value={resource.website} />
                            )}
                            {resource.operatingHours && (
                              <DetailRow label="Operating Hours" value={resource.operatingHours} />
                            )}
                            {resource.tags?.length > 0 && (
                              <DetailRow label="Tags" value={resource.tags.join(", ")} />
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex justify-end gap-3 pt-2 border-t">
                            <button
                              onClick={() =>
                                router.push(`/resource-directory/edit/${resource.id}`)
                              }
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
                      )}
                    </div>
                  );
                })}
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
                      <p className="text-sm text-gray-500">
                        Important safety and emergency notifications
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        alertSettings.emergency
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {alertSettings.emergency ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">Newsletter Subscription</h3>
                      <p className="text-sm text-gray-500">
                        Monthly newsletter with highlights and updates
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        alertSettings.newsletter
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {alertSettings.newsletter ? "SUBSCRIBED" : "NOT SUBSCRIBED"}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/alerts"
                    className="w-full block text-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
                  >
                    Manage All Notifications
                  </Link>

                  {alertSettings.newsletter && (
                    <Link
                      href="/alerts"
                      className="w-full block mt-3 text-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
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
