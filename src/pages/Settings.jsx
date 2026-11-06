import { useState } from "react";
import { Save, Search } from "lucide-react";

import { useProfile } from "../context/ProfileContext";

import ProfileSettings from "../components/settings/ProfileSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import AppearanceSettings from "../components/settings/AppearanceSetting";
import NotificationPreferences from "../components/settings/NotificationPreferences";
import SystemStatus from "../components/settings/SystemStatus";

function Settings() {
  const { profile, updateProfile } = useProfile();
  const [searchTerm, setSearchTerm] = useState("");

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    updateProfile({ ...profile, [name]: value });
  };

  const handleSaveChanges = () => {
    alert("Profile Updated Successfully");
  };

  const settingsSections = [
    {
      id: "profile",
      title: "Profile Information",
      keywords: "profile name email phone avatar account",
      component: (
        <ProfileSettings
          profile={profile}
          onProfileChange={handleProfileChange}
        />
      ),
    },
    {
      id: "notification-preferences",
      title: "Notification Preferences",
      keywords: "notifications leads tasks email weekly reports",
      component: <NotificationPreferences />,
    },
    {
      id: "security",
      title: "Security",
      keywords: "security password two factor authentication",
      component: <SecuritySettings />,
    },
    {
      id: "appearance",
      title: "Appearance",
      keywords: "appearance theme dark light language",
      component: <AppearanceSettings />,
    },
    {
      id: "system",
      title: "System Status",
      keywords: "system api database status",
      component: <SystemStatus />,
    },
  ];

  const filteredSections = settingsSections.filter((section) => {
    const search = searchTerm.trim().toLowerCase();

    return (
      section.title.toLowerCase().includes(search) ||
      section.keywords.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen p-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Settings
          </h1>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage your account and application preferences.
          </p>
        </div>

        <button
          onClick={handleSaveChanges}
          className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>

      {/* Settings Search */}
      <div className="relative mb-6 max-w-xl">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search settings..."
          className="h-12 w-full rounded-xl border pl-11 pr-4 text-sm outline-none transition"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-primary)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <div key={section.id} id={section.id}>
              {section.component}
            </div>
          ))
        ) : (
          <div
            className="rounded-2xl border p-10 text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
              color: "var(--text-muted)",
            }}
          >
            No matching settings found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
