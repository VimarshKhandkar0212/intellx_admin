import {
  CheckSquare,
  CheckCircle2,
  Clock3,
  AlertCircle,
  ListTodo,
} from "lucide-react";

const iconStyles = {
  purple: "bg-purple-500/15 text-purple-400",
  blue: "bg-blue-500/15 text-blue-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  orange: "bg-orange-500/15 text-orange-400",
  green: "bg-green-500/15 text-green-400",
};

export default function TaskStats({ stats }) {
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
            <div
              className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl ${
                iconStyles[stat.iconColor]
              }`}
            >
              <Icon size={16} strokeWidth={1.8} />
            </div>

            <p
              className="pr-10 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.title}
            </p>

            <h2
              className="mt-4 text-2xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {stat.value}
            </h2>

            <div className="mt-3 flex items-center gap-1 text-[10px]">
              <span className="font-medium text-green-400">
                {stat.change}
              </span>

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
