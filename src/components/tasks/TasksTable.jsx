import {
  CalendarDays,
  ListTodo,
  UserCircle2,
  Pencil,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

import { PriorityBadge, TaskStatusBadge } from "./TaskBadges";

export default function TasksTable({
  tasks,
  onEdit,
  onDelete,
  selectedTaskIds,
  onToggleTask,
  onToggleAll,
  onStatusChange,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[950px]">
        <thead>
          <tr
            className="border-b"
            style={{ borderColor: "var(--border-secondary)" }}
          >
            <th className="w-12 px-4 py-3 text-left">
              <input
                type="checkbox"
                checked={
                  tasks.length > 0 &&
                  tasks.every((task) => selectedTaskIds.includes(task.id))
                }
                onChange={(e) =>
                  onToggleAll(
                    tasks.map((task) => task.id),
                    e.target.checked,
                  )
                }
                className="h-3.5 w-3.5 rounded accent-purple-500"
              />
            </th>

            {[
              "Task",
              "Category",
              "Assigned To",
              "Priority",
              "Status",
              "Due Date",
              "Actions",
            ].map((heading) => (
              <th
                key={heading}
                className={`px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider ${
                  heading === "Actions" ? "text-right" : ""
                }`}
                style={{ color: "var(--text-muted)" }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b transition-colors hover:bg-white/[0.02]"
              style={{ borderColor: "var(--border-secondary)" }}
            >
              <td className="px-4 py-4">
                <input
                  type="checkbox"
                  checked={selectedTaskIds.includes(task.id)}
                  onChange={() => onToggleTask(task.id)}
                  className="h-3.5 w-3.5 rounded accent-purple-500"
                />
              </td>

              <td className="max-w-[300px] px-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                    <ListTodo size={15} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="truncate text-xs font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {task.title}
                    </p>

                    <p
                      className="mt-1 truncate text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {task.description}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4">
                <span
                  className="rounded-lg px-2.5 py-1 text-[10px]"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {task.category}
                </span>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                    <UserCircle2 size={15} />
                  </div>

                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {task.assignedTo}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4">
                <PriorityBadge priority={task.priority} />
              </td>

              <td className="px-4 py-4">
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(task.id, e.target.value)}
                  className="cursor-pointer rounded-full border-0 bg-transparent text-xs outline-none"
                  style={{
                    color: "var(--text-primary)",
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center gap-1.5">
                  <CalendarDays
                    size={13}
                    style={{
                      color:
                        task.status === "Overdue"
                          ? "#ef4444"
                          : "var(--text-muted)",
                    }}
                  />

                  <span
                    className={`text-xs ${
                      task.status === "Overdue"
                        ? "font-medium text-red-400"
                        : ""
                    }`}
                    style={
                      task.status !== "Overdue"
                        ? { color: "var(--text-secondary)" }
                        : undefined
                    }
                  >
                    {task.dueDate}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-end gap-1">
                  <button
                    type="button"
                    onClick={() => onEdit(task)}
                    title="Edit"
                    className="rounded-lg p-1.5 transition hover:bg-blue-500/10 hover:text-blue-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(task.id)}
                    title="Delete"
                    className="rounded-lg p-1.5 transition hover:bg-red-500/10 hover:text-red-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Trash2 size={14} />
                  </button>

                  <button
                    type="button"
                    title="More"
                    className="rounded-lg p-1.5 transition hover:bg-white/5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {tasks.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-10 text-center text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                No tasks to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
