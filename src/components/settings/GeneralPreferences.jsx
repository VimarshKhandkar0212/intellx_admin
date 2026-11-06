export default function GeneralPreferences() {
  return (
    <section
      className="rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-6">
        <h2
          className="text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          General Preferences
        </h2>

        <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
          Configure basic application preferences.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Email Notifications
            </p>

            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Receive notifications about new leads and tasks.
            </p>
          </div>

          <div className="h-6 w-11 rounded-full bg-purple-600 p-1">
            <div className="ml-5 h-4 w-4 rounded-full bg-white" />
          </div>
        </div>

        <div
          className="border-t pt-5"
          style={{ borderColor: "var(--border-secondary)" }}
        />

        <div className="flex items-center justify-between gap-6">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Lead Alerts
            </p>

            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Get notified whenever a new lead is received.
            </p>
          </div>

          <div className="h-6 w-11 rounded-full bg-purple-600 p-1">
            <div className="ml-5 h-4 w-4 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
