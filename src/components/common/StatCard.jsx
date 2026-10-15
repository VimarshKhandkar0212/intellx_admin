import { TrendingUp } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  changeText,
  icon: Icon,
  iconColor = "purple",
  iconSize = 17,
}) {
  const iconStyles = {
    purple: "bg-purple-500/15 text-purple-400",
    blue: "bg-blue-500/15 text-blue-400",
    cyan: "bg-cyan-500/15 text-cyan-400",
    orange: "bg-orange-500/15 text-orange-400",
    green: "bg-green-500/15 text-green-400",
  };

  return (
    <div
      className="relative min-w-0 overflow-hidden rounded-2xl border p-4 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Icon */}
      <div
        className={`absolute right-3 top-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          iconStyles[iconColor] || iconStyles.purple
        }`}
      >
        <Icon size={iconSize} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <p
        className="min-h-8 max-w-[calc(100%-2.5rem)] text-xs font-medium leading-tight text-gray-400 "
        style={{ color: "var(--text-secondary)" }}
      >
        {title}
      </p>

      {/* Value */}
      <h3
        className="mt-4 text-2xl font-semibold tracking-tight text-white"
        style={{ color: "var(--text-primary)" }}
      >
        {value}
      </h3>

      {/* Change */}
      <div
        className="mt-4 flex min-w-0 items-start gap-1 text-[10px] leading-tight"
        style={{ color: "var(--text-muted)" }}
      >
        <TrendingUp size={11} className="mt-0.5 shrink-0 text-green-400" />

        <span className="shrink-0 font-medium text-green-400">{change}</span>

        <span className="min-w-0 break-words text-gray-500">{changeText}</span>
      </div>
    </div>
  );
}

export default StatCard;
