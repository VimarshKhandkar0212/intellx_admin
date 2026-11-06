import { User, Bell, Shield, Palette, Database } from "lucide-react";

const navigationItems = [
  { label: "Profile", icon: User, id: "profile" },
  { label: "Notifications", icon: Bell, id: "notification-preferences" },
  { label: "Security", icon: Shield, id: "security" },
  { label: "Appearance", icon: Palette, id: "appearance" },
  { label: "System", icon: Database, id: "system" },
];

export default function SettingsNavigation() {
  return (
    <div
      className="sticky top-24 h-fit rounded-2xl border p-3"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {navigationItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() =>
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
              index === 0
                ? "bg-purple-500/10 font-medium text-purple-400"
                : "mt-1"
            }`}
            style={index !== 0 ? { color: "var(--text-secondary)" } : undefined}
          >
            <Icon size={17} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
