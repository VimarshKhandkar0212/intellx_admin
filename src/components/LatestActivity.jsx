import { UserPlus, Phone, CalendarCheck, FileText, Trophy } from "lucide-react";

const activities = [
  {
    title: "New lead received",
    description: "Rahul Verma submitted the contact form",
    time: "2 min ago",
    icon: UserPlus,
    color: "purple",
  },
  {
    title: "Lead contacted",
    description: "Neha Sharma was contacted by Admin",
    time: "18 min ago",
    icon: Phone,
    color: "blue",
  },
  {
    title: "Meeting scheduled",
    description: "Meeting scheduled with Amit Kumar",
    time: "1 hour ago",
    icon: CalendarCheck,
    color: "cyan",
  },
  {
    title: "Proposal sent",
    description: "Proposal sent to Priya Singh",
    time: "3 hours ago",
    icon: FileText,
    color: "orange",
  },
  {
    title: "Lead converted",
    description: "Vikram Mehta marked as Won",
    time: "Yesterday",
    icon: Trophy,
    color: "green",
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
  return (
    <section
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-5">
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

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={`${activity.title}-${activity.time}`}
              className="flex items-start gap-3"
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
        })}
      </div>
    </section>
  );
}

export default LatestActivity;
