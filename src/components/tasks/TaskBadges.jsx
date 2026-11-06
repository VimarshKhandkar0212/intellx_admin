
import { Flag } from "lucide-react";

export function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-500/10 text-red-400",
    Medium: "bg-orange-500/10 text-orange-400",
    Low: "bg-green-500/10 text-green-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-medium ${
        styles[priority] || "bg-gray-500/10 text-gray-400"
      }`}
    >
      <Flag size={10} />
      {priority}
    </span>
  );
}

export function TaskStatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-500/10 text-yellow-400",
    "In Progress": "bg-blue-500/10 text-blue-400",
    Completed: "bg-green-500/10 text-green-400",
    Overdue: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-medium ${
        styles[status] || "bg-gray-500/10 text-gray-400"
      }`}
    >
      {status}
    </span>
  );
}
