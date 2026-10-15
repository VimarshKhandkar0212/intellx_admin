import {
  Mail,
  PhoneCall,
  Building2,
  X,
  Clock3,
  MessageSquare,
  CheckCircle2,
  UserPlus,
} from "lucide-react";

function LeadDetails({ selectedLead, setSelectedLead }) {
  if (!selectedLead) {
    return null;
  }

  return (
    <div
      className="border-l"
      style={{
        borderColor: "var(--border-secondary)",
      }}
    >
      {/* Detail Header */}
      <div
        className="flex items-start justify-between border-b p-5"
        style={{
          borderColor: "var(--border-secondary)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-sm font-semibold text-purple-400">
            {selectedLead.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div className="min-w-0">
            <h3
              className="truncate text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {selectedLead.name}
            </h3>

            <p
              className="mt-0.5 truncate text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {selectedLead.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSelectedLead(null)}
          className="rounded-lg p-1.5 transition hover:bg-white/5"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={15} />
        </button>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 border-b p-5">
        <h4
          className="text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          Contact Information
        </h4>

        <div className="flex items-center gap-2.5">
          <Mail size={14} className="shrink-0 text-purple-400" />

          <span
            className="truncate text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {selectedLead.email}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <PhoneCall size={14} className="shrink-0 text-purple-400" />

          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {selectedLead.phone}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Building2 size={14} className="shrink-0 text-purple-400" />

          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {selectedLead.company}
          </span>
        </div>
      </div>

      {/* Lead Information */}
      <div className="space-y-4 border-b p-5">
        <h4
          className="text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          Lead Information
        </h4>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Status
            </p>

            <div className="mt-1.5">
              <StatusBadge status={selectedLead.status} />
            </div>
          </div>

          <div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Source
            </p>

            <p
              className="mt-1.5 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {selectedLead.source}
            </p>
          </div>

          <div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Created
            </p>

            <p
              className="mt-1.5 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {selectedLead.createdAt}
            </p>
          </div>

          <div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Assigned To
            </p>

            <p
              className="mt-1.5 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Admin
            </p>
          </div>
        </div>
      </div>

      {/* Internal Notes */}
      <div
        className="border-b p-5"
        style={{
          borderColor: "var(--border-secondary)",
        }}
      >
        <div className="mb-3 flex items-center justify-between">
          <h4
            className="text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Internal Notes
          </h4>

          <MessageSquare size={14} className="text-purple-400" />
        </div>

        <div
          className="rounded-xl border p-3"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
          }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Interested in our enterprise solution. Follow up after the initial
            discovery call.
          </p>
        </div>
      </div>

      {/* Activity */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h4
            className="text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Lead Activity
          </h4>

          <Clock3 size={14} className="text-purple-400" />
        </div>

        <div className="relative space-y-5 pl-5">
          {/* Timeline Line */}
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10" />

          {/* Activity 1 */}
          <div className="relative">
            <div className="absolute -left-[20px] top-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-purple-500 ring-4 ring-purple-500/10" />

            <div className="flex items-start gap-2">
              <CheckCircle2 size={13} className="mt-0.5 text-green-400" />

              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  New lead received
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  2 minutes ago
                </p>
              </div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="relative">
            <div className="absolute -left-[20px] top-0.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />

            <div className="flex items-start gap-2">
              <UserPlus size={13} className="mt-0.5 text-blue-400" />

              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Lead assigned to Admin
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  10 minutes ago
                </p>
              </div>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="relative">
            <div className="absolute -left-[20px] top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/10" />

            <div className="flex items-start gap-2">
              <PhoneCall size={13} className="mt-0.5 text-cyan-400" />

              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Follow-up scheduled
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  1 hour ago
                </p>
              </div>
            </div>
          </div>
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

export default LeadDetails;
