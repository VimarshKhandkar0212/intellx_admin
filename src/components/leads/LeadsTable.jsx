import { MoreHorizontal,Copy, Eye, Pencil, Trash2 } from "lucide-react";
import {useState} from "react";

function LeadsTable({ 
  leads, 
  selectedLead, 
  setSelectedLead, 
  onEditLead, 
  onDeleteLead, 
  onDuplicateLead, 
  selectedLeadIds=[], 
  setSelectedLeadIds,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const [openMenuId, setOpenMenuId] = useState(null);
    

  const handleDuplicateLead = (lead) => {
    const baseName = lead.name.replace(/ \(\d+\)$/, "");

    const existingNumbers = leads
      .filter((item) => {
        const match = item.name.match(
          new RegExp(`^${baseName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\((\\d+)\\)$`)
        );

        return match !== null;
      })
      .map((item) => {
        const match = item.name.match(/\((\d+)\)$/);
        return Number(match[1]);
      });

    const nextNumber = existingNumbers.length
      ? Math.max(...existingNumbers) + 1
      : 1;

    const duplicatedLead = {
      ...lead,
      id: Date.now(),
      name: `${baseName} (${nextNumber})`,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    onDuplicateLead(duplicatedLead);
    setOpenMenuId(null);
  };


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
                checked={
                  leads.length > 0 &&
                  leads.every((lead) => selectedLeadIds.includes(lead.id))
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedLeadIds((prev) => [
                      ...new Set([...prev, ...leads.map((lead) => lead.id)]),
                    ]);
                  } else {
                    setSelectedLeadIds((prev) =>
                      prev.filter((id) => !leads.some((lead) => lead.id === id))
                    );
                  }
                }}
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
                  checked={selectedLeadIds.includes(lead.id)}
                  onChange={(e) => {
                    setSelectedLeadIds((prev) =>
                      e.target.checked
                        ? [...prev, lead.id]
                      : prev.filter((id) => id !== lead.id)
                    );
                  }}
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
                    onClick={() => onDeleteLead(lead)}
                    className="rounded-lg p-1.5 transition hover:bg-red-500/10 hover:text-red-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Trash2 size={14} />
                  </button>

                  
                  <div className="relative">
                    <button
                      type="button"
                      title="More actions"
                      onClick={() =>
                        setOpenMenuId(openMenuId === lead.id ? null : lead.id)
                      }
                      className="rounded-lg p-1.5 transition hover:bg-white/10"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <MoreHorizontal size={16} />
                    </button>

                      {openMenuId === lead.id && (
                      <div
                        className="absolute right-0 top-full z-30 mt-1 w-48 rounded-xl border p-1 shadow-xl"
                        style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-primary)",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => handleDuplicateLead(lead)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-white/5"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <Copy size={15} />
                          Duplicate Lead
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table Footer */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3"
        style={{ borderColor: "var(--border-secondary)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Showing{" "}
          {leads.length === 0 ? 0 : (currentPage - 1) * 10 + 1}
          {"–"}
          {Math.min(currentPage * 10, leads.length)}
          {" of "}
          {leads.length} filtered leads
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-muted)",
            }}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={
                  currentPage === page
                  ? "rounded-lg bg-purple-500/15 px-2.5 py-1.5 text-xs font-medium text-purple-400"
                  : "rounded-lg px-2.5 py-1.5 text-xs"
                }
                  style={
                    currentPage === page
                    ? {}
                    : { color: "var(--text-muted)" }
                  }
              >  
                {page}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
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
