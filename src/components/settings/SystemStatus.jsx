import { Globe, CheckCircle2 } from "lucide-react";

const systemItems = [
  { label: "API", status: "Operational" },
  { label: "Database", status: "Connected" },
  { label: "System", status: "Running normally" },
];

export default function SystemStatus() {
  return (
    <section
      id="system"
      className="rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
          <Globe size={18} />
        </div>

        <div>
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            System Status
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Current application status
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {systemItems.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border p-4"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-green-400" />

              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {item.label}
              </span>
            </div>

            <p className="mt-2 text-xs text-green-400">{item.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
