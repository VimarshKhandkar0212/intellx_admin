import { useState } from "react";
import {
  UserPlus,
  Phone,
  CalendarCheck,
  FileText,
  Trophy,
  ChevronDown,
} from "lucide-react";

const activities = [
  {
    title: "New lead received",
    description: "Rahul Verma submitted the contact form",
    time: "2 min ago",
    icon: UserPlus,
    color: "purple",
    type: "Lead",
  },
  {
    title: "Lead contacted",
    description: "Neha Sharma was contacted by Admin",
    time: "18 min ago",
    icon: Phone,
    color: "blue",
    type: "Contact",
  },
  {
    title: "Meeting scheduled",
    description: "Meeting scheduled with Amit Kumar",
    time: "1 hour ago",
    icon: CalendarCheck,
    color: "cyan",
    type: "Meeting",
  },
  {
    title: "Proposal sent",
    description: "Proposal sent to Priya Singh",
    time: "3 hours ago",
    icon: FileText,
    color: "orange",
    type: "Proposal",
  },
  {
    title: "Lead converted",
    description: "Vikram Mehta marked as Won",
    time: "Yesterday",
    icon: Trophy,
    color: "green",
    type: "Conversion",
  },
];

const iconStyles = {
  purple: "bg-purple-500/10 text-purple-400",
  blue: "bg-blue-500/10 text-blue-400",
  cyan: "bg-cyan-500/10 text-cyan-400",
  orange: "bg-orange-500/10 text-orange-400",
  green: "bg-green-500/10 text-green-400",
};

function LatestActivity() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredActivities =
    selectedType === "All"
      ? activities
      : activities.filter((activity) => activity.type === selectedType);

  return (
    <section
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2
            className="text-base font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Latest Activity
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Recent actions across your leads
          </p>
        </div>

        {/* Activity Filter */}
        <div className="relative shrink-0">
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            className="appearance-none rounded-lg border py-1.5 pl-3 pr-8 text-xs outline-none"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-primary)",
              color: "var(--text-secondary)",
            }}
          >
            <option value="All">All Activity</option>
            <option value="Lead">Lead</option>
            <option value="Contact">Contact</option>
            <option value="Meeting">Meeting</option>
            <option value="Proposal">Proposal</option>
            <option value="Conversion">Conversion</option>
          </select>

          <ChevronDown
            size={13}
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          />
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={`${activity.title}-${activity.time}`}
                className="flex items-start gap-3 rounded-xl p-1 transition hover:bg-white/[0.02]"
              >
                {/* Icon */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    iconStyles[activity.color]
                  }`}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activity.title}
                    </p>

                    <span
                      className="shrink-0 text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {activity.time}
                    </span>
                  </div>

                  <p
                    className="mt-1 text-[11px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="rounded-xl border border-dashed py-8 text-center text-xs"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-muted)",
            }}
          >
            No activity found.
          </div>
        )}
      </div>
    </section>
  );
}

export default LatestActivity;
