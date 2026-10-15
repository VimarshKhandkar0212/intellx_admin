import { Server, Database, CheckCircle2 } from "lucide-react";

function SystemStatus() {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            System Status
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Current system health
          </p>
        </div>

        <span className="flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2.5 py-1 text-[10px] font-medium text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          All Systems Operational
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* API */}
        <div
          className="flex items-center gap-3 rounded-xl border p-3"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <Server size={16} />
          </div>

          <div className="flex-1">
            <p
              className="text-xs font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              API
            </p>

            <p
              className="mt-0.5 text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              Operational
            </p>
          </div>

          <CheckCircle2 size={15} className="text-green-400" />
        </div>

        {/* Database */}
        <div
          className="flex items-center gap-3 rounded-xl border p-3"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <Database size={16} />
          </div>

          <div className="flex-1">
            <p
              className="text-xs font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Database
            </p>

            <p
              className="mt-0.5 text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              Connected
            </p>
          </div>

          <CheckCircle2 size={15} className="text-green-400" />
        </div>

        {/* System */}
        <div
          className="flex items-center gap-3 rounded-xl border p-3"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <CheckCircle2 size={16} />
          </div>

          <div className="flex-1">
            <p
              className="text-xs font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              System
            </p>

            <p
              className="mt-0.5 text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              Running normally
            </p>
          </div>

          <span className="text-[10px] font-medium text-green-400">
            Healthy
          </span>
        </div>
      </div>
    </div>
  );
}

export default SystemStatus;
