import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";

function LeadsTable({ leads, selectedLead, setSelectedLead, onEditLead }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr
            className="border-y"
            style={{
              borderColor: "var(--border-secondary)",
            }}
          >
            <th className="w-12 px-4 py-3 text-left">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded accent-purple-500"
              />
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Name
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Company
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Email
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Status
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Source
            </th>

            <th
              className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Created
            </th>

            <th
              className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className={`border-b transition-colors ${
                selectedLead?.id === lead.id
                  ? "bg-purple-500/[0.04]"
                  : "hover:bg-white/[0.02]"
              }`}
              style={{
                borderColor: "var(--border-secondary)",
              }}
            >
              {/* Checkbox */}
              <td className="px-4 py-3.5">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded accent-purple-500"
                />
              </td>

              {/* Name */}
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-xs font-semibold text-purple-400">
                    {lead.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <p
                    className="truncate text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {lead.name}
                  </p>
                </div>
              </td>

              {/* Company */}
              <td
                className="px-4 py-3.5 text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {lead.company}
              </td>

              {/* Email */}
              <td
                className="px-4 py-3.5 text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {lead.email}
              </td>

              {/* Status */}
              <td className="px-4 py-3.5">
                <StatusBadge status={lead.status} />
              </td>

              {/* Source */}
              <td
                className="px-4 py-3.5 text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {lead.source}
              </td>

              {/* Created */}
              <td
                className="whitespace-nowrap px-4 py-3.5 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {lead.createdAt}
              </td>

              {/* Actions */}
              <td className="px-4 py-3.5">
                <div className="flex justify-end gap-1">
                  <button
                    type="button"
                    title="View"
                    onClick={() => setSelectedLead(lead)}
                    className="rounded-lg p-1.5 text-purple-400 transition hover:bg-purple-500/10"
                  >
                    <Eye size={14} />
                  </button>

                  <button
                    type="button"
                    title="Edit"
                    onClick={() => onEditLead(lead)}
                    className="rounded-lg p-1.5 transition hover:bg-blue-500/10 hover:text-blue-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    type="button"
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
        </tbody>
      </table>

      {/* Table Footer */}
      <div
        className="flex items-center justify-between border-t px-4 py-3"
        style={{
          borderColor: "var(--border-secondary)",
        }}
      >
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Showing 1–{leads.length} of 148 leads
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-lg border px-2.5 py-1.5 text-xs"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-muted)",
            }}
          >
            Previous
          </button>

          <button
            type="button"
            className="rounded-lg bg-purple-500/15 px-2.5 py-1.5 text-xs font-medium text-purple-400"
          >
            1
          </button>

          <button
            type="button"
            className="rounded-lg px-2.5 py-1.5 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            2
          </button>

          <button
            type="button"
            className="rounded-lg px-2.5 py-1.5 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            3
          </button>

          <button
            type="button"
            className="rounded-lg border px-2.5 py-1.5 text-xs"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-muted)",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    New: "bg-purple-500/10 text-purple-400",
    Contacted: "bg-blue-500/10 text-blue-400",
    "Meeting Scheduled": "bg-cyan-500/10 text-cyan-400",
    "Proposal Sent": "bg-orange-500/10 text-orange-400",
    Won: "bg-green-500/10 text-green-400",
    Lost: "bg-red-500/10 text-red-400",
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

export default LeadsTable;
