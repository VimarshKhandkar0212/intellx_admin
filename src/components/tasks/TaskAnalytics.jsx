
import { BarChart3, Flag, CircleCheck } from "lucide-react";

export function TaskCompletionOverview({ completionData }) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Task Completion Overview
          </h3>
          <p
            className="mt-1 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Current task distribution
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
          <BarChart3 size={17} />
        </div>
      </div>

      <div className="space-y-4">
        {completionData.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${item.className}`} />
                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold ${item.textClass}`}>
                  {item.value}
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.percentage}%
                </span>
              </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full ${item.className}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrioritySummary({ priorityData, totalTasks }) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Priority Summary
          </h3>
          <p
            className="mt-1 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Tasks grouped by priority
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
          <Flag size={17} />
        </div>
      </div>

      <div className="space-y-5">
        {priorityData.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
              </span>

              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold ${item.textClass}`}>
                  {item.value}
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.percentage}%
                </span>
              </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full ${item.className}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex items-center gap-2 rounded-xl border px-3 py-3"
        style={{
          borderColor: "var(--border-secondary)",
          backgroundColor: "var(--input-bg)",
        }}
      >
        <CircleCheck size={15} className="text-green-400" />
        <span
          className="text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          {totalTasks} total tasks across all priorities
        </span>
      </div>
    </div>
  );
}
