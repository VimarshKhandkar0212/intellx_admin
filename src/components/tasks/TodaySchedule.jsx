
import { AlertCircle, Clock3 } from "lucide-react";
import { TaskStatusBadge } from "./TaskBadges";

export default function TodaySchedule({ schedule }) {
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
            Today's Schedule
          </h3>

          <p
            className="mt-1 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Tasks scheduled for today
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          <Clock3 size={17} />
        </div>
      </div>

      <div className="space-y-3">
        {schedule.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-xl border p-4"
            style={{
              borderColor: "var(--border-secondary)",
              backgroundColor: "var(--input-bg)",
            }}
          >
            <div className="w-16 shrink-0">
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {item.time}
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="min-w-0 flex-1">
              <p
                className="truncate text-xs font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </p>

              <p
                className="mt-1 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                {item.type}
              </p>
            </div>

            <TaskStatusBadge status={item.status} />
          </div>
        ))}

        {schedule.length === 0 && (
          <p
            className="py-6 text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No tasks scheduled for today.
          </p>
        )}
      </div>

      <div
        className="mt-4 flex items-center gap-2 rounded-xl border px-3 py-3"
        style={{
          borderColor: "var(--border-secondary)",
          backgroundColor: "var(--input-bg)",
        }}
      >
        <AlertCircle size={14} className="text-orange-400" />

        <span
          className="text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          {schedule.length} task(s) scheduled for today.
        </span>
      </div>
    </div>
  );
}
