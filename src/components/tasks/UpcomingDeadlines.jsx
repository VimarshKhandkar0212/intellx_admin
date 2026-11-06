import { CalendarDays, CalendarClock } from "lucide-react";
import { PriorityBadge } from "./TaskBadges";

export default function UpcomingDeadlines({ tasks }) {
  return (
    <div
      className="self-start h-fit rounded-2xl border p-4"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Upcoming Deadlines
          </h3>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Tasks that need attention
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <CalendarClock size={17} />
        </div>
      </div>

      <div className="space-y-2 max-h-[190px] overflow-y-auto pr-2 custom-scrollbar">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="rounded-xl border p-3 transition-colors"
            style={{
              borderColor: "var(--border-secondary)",
              backgroundColor: "var(--input-bg)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <CalendarDays size={13} />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="truncate text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {task.title}
                </p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {new Date(`${task.time}T00:00:00`).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}

                    {task.dueTime &&
                      `. ${new Date(
                        `2000-01-01T${task.dueTime}`,
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}`}
                  </span>

                  <PriorityBadge priority={task.priority} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <p
            className="py-6 text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No upcoming deadlines.
          </p>
        )}
      </div>
    </div>
  );
}
