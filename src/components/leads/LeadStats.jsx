import { Users, UserPlus, Phone, CalendarCheck, Trophy } from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "148",
    change: "+18%",
    changeText: "from last 30 days",
    icon: Users,
    iconColor: "purple",
  },
  {
    title: "New Leads",
    value: "20",
    change: "+12%",
    changeText: "from last 30 days",
    icon: UserPlus,
    iconColor: "blue",
  },
  {
    title: "Contacted",
    value: "14",
    change: "+8%",
    changeText: "from last 30 days",
    icon: Phone,
    iconColor: "cyan",
  },
  {
    title: "Meetings",
    value: "8",
    change: "+5%",
    changeText: "from last 30 days",
    icon: CalendarCheck,
    iconColor: "orange",
  },
  {
    title: "Closed Won",
    value: "3",
    change: "+7%",
    changeText: "from last 30 days",
    icon: Trophy,
    iconColor: "green",
  },
];

const iconStyles = {
  purple: "bg-purple-500/15 text-purple-400",
  blue: "bg-blue-500/15 text-blue-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  orange: "bg-orange-500/15 text-orange-400",
  green: "bg-green-500/15 text-green-400",
};

function LeadStats() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="relative min-w-0 overflow-hidden rounded-2xl border p-4"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            {/* Icon */}
            <div
              className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl ${iconStyles[stat.iconColor]}`}
            >
              <Icon size={16} strokeWidth={1.8} />
            </div>

            {/* Title */}
            <p
              className="pr-10 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.title}
            </p>

            {/* Value */}
            <h2
              className="mt-4 text-2xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {stat.value}
            </h2>

            {/* Change */}
            <div className="mt-3 flex items-center gap-1 text-[10px]">
              <span className="font-medium text-green-400">{stat.change}</span>

              <span style={{ color: "var(--text-muted)" }}>
                {stat.changeText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeadStats;
