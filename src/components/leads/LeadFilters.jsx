import { Search, CalendarDays } from "lucide-react";

function LeadFilters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  sourceFilter,
  setSourceFilter,
  dateFilter,
  setDateFilter,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b p-4">
      {/* Search */}
      <div className="relative min-w-[240px] flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />

        <input
          type="text"
          placeholder="Search leads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-10 w-full rounded-xl border pl-9 pr-3 text-sm outline-none transition focus:border-purple-500/50"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* Status Filter */}
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
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Meeting Scheduled">Meeting Scheduled</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Won">Won</option>
        <option value="Lost">Lost</option>
      </select>

      {/* Source Filter */}
      <select
        value={sourceFilter}
        onChange={(e) => setSourceFilter(e.target.value)}
        className="h-10 rounded-xl border px-3 text-xs outline-none"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: "var(--border-secondary)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="All">Source: All</option>
        <option value="Website">Website</option>
        <option value="Google">Google</option>
        <option value="Referral">Referral</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Instagram">Instagram</option>
      </select>

      {/* Date */}
      <div className="relative">
        <CalendarDays
          size={14}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />

        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="h-10 rounded-xl border pl-9 pr-3 text-xs outline-none"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
            color: "var(--text-secondary)",
          }}
        >
          <option value="All">Date: All</option>
          <option value="Today">Today</option>
          <option value="Last 7 Days">Last 7 Days</option>
          <option value="Last 30 Days">Last 30 Days</option>
        </select>
      </div>

      {/* Clear */}
      <button
        type="button"
        onClick={() => {
          setSearchQuery("");
          setStatusFilter("All");
          setSourceFilter("All");
          setDateFilter("All");
          setActiveTab("All Leads");
        }}
        className="h-10 rounded-xl px-3 text-xs font-medium text-purple-400 transition hover:bg-purple-500/10"
      >
        Clear
      </button>
    </div>
  );
}

export default LeadFilters;
