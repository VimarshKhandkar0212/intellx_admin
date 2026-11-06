import { useState, useEffect } from "react";
import { User, Bell, Mail, CheckCircle2 } from "lucide-react";

const notificationItems = [
  {
    id: "newLeads",
    title: "New Lead Notifications",
    description: "Get notified when a new lead is received.",
    icon: User,
    iconStyle: "bg-purple-500/10 text-purple-400",
    enabled: true,
  },
  {
    id: "taskReminders",
    title: "Task Reminders",
    description: "Receive reminders for upcoming and overdue tasks.",
    icon: Bell,
    iconStyle: "bg-orange-500/10 text-orange-400",
    enabled: true,
  },
  {
    id: "emailUpdates",
    title: "Email Updates",
    description: "Receive important system updates by email.",
    icon: Mail,
    iconStyle: "bg-cyan-500/10 text-cyan-400",
    enabled: true,
  },
  {
    id: "weeklyReports",
    title: "Weekly Reports",
    description: "Receive a weekly summary of leads and tasks.",
    icon: CheckCircle2,
    iconStyle: "bg-green-500/10 text-green-400",
    enabled: false,
  },
];

export default function NotificationPreferences() {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("notificationPreferences");

    return saved
      ? JSON.parse(saved)
      : Object.fromEntries(
          notificationItems.map((item) => [item.id, item.enabled]),
        );
  });

  useEffect(() => {
    localStorage.setItem(
      "notificationPreferences",
      JSON.stringify(preferences),
    );
  }, [preferences]);

  const handleToggle = (id) => {
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="notification-preferences"
      className="mt-6 rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Bell size={18} />
        </div>

        <div>
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Notification Preferences
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Choose which notifications you want to receive.
          </p>
        </div>
      </div>

      <div className="space-y-1">
        {notificationItems.map((item) => {
          const Icon = item.icon;
          const enabled = preferences[item.id];

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-6 rounded-xl p-4"
              style={{ backgroundColor: "var(--input-bg)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.iconStyle}`}
                >
                  <Icon size={15} />
                </div>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </p>

                  <p
                    className="mt-1 text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={enabled}
                aria-label={item.title}
                onClick={() => handleToggle(item.id)}
                className={`h-6 w-11 shrink-0 rounded-full p-1 transition-colors ${
                  enabled ? "bg-purple-600" : ""
                }`}
                style={
                  !enabled
                    ? { backgroundColor: "var(--border-primary)" }
                    : undefined
                }
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition-transform ${
                    enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
