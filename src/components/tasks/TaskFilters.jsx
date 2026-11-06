import { Search, CalendarDays, Filter } from "lucide-react";

export default function TaskFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  onClear,
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-3 border-b p-4"
      style={{ borderColor: "var(--border-secondary)" }}
    >
      {/* Search */}
      <div className="relative min-w-[240px] flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="h-10 w-full rounded-xl border pl-9 pr-3 text-sm outline-none transition focus:border-purple-500/50"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* Status */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="h-10 rounded-xl border px-3 text-xs outline-none"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: "var(--border-secondary)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="All">Status: All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Overdue">Overdue</option>
      </select>

      {/* Priority */}
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="h-10 rounded-xl border px-3 text-xs outline-none"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: "var(--border-secondary)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="All">Priority: All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Due Date */}
      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-xl border px-3 text-xs"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: "var(--border-secondary)",
          color: "var(--text-secondary)",
        }}
      >
        <CalendarDays size={14} />
        Due Date
      </button>

      {/* More Filters */}
      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-xl border px-3 text-xs"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: "var(--border-secondary)",
          color: "var(--text-secondary)",
        }}
      >
        <Filter size={14} />
        Filters
      </button>

      {/* Clear */}
      <button
        type="button"
        onClick={onClear}
        className="h-10 rounded-xl px-3 text-xs font-medium text-purple-400 transition hover:bg-purple-500/10"
      >
        Clear
      </button>
    </div>
  );
}
