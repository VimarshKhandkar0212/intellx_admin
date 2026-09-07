import {
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Globe,
  Save,
  Mail,
  Lock,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

function Settings() {
  return (
    <div className="min-h-screen p-6">
      {/* Page Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Settings
          </h1>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage your account and application preferences.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Settings Navigation */}
        <div
          className="sticky top-24 h-fit rounded-2xl border p-3"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-primary)",
          }}
        >
          <button className="flex w-full items-center gap-3 rounded-xl bg-purple-500/10 px-3 py-3 text-left text-sm font-medium text-purple-400">
            <User size={17} />
            Profile
          </button>

          <button
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition"
            style={{ color: "var(--text-secondary)" }}
          >
            <Bell size={17} />
            Notifications
          </button>

          <button
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition"
            style={{ color: "var(--text-secondary)" }}
          >
            <Shield size={17} />
            Security
          </button>

          <button
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition"
            style={{ color: "var(--text-secondary)" }}
          >
            <Palette size={17} />
            Appearance
          </button>

          <button
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition"
            style={{ color: "var(--text-secondary)" }}
          >
            <Database size={17} />
            System
          </button>
        </div>

        {/* Settings Content */}
        <div className="space-y-6">
          {/* Profile */}
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
                Profile Information
              </h2>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Update your personal and account information.
              </p>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-semibold text-white">
                A
              </div>

              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Admin Administrator
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Administrator
                </p>

                <button className="mt-2 text-xs font-medium text-purple-400 hover:text-purple-300">
                  Change avatar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  className="mb-2 block text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  First Name
                </label>

                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Last Name
                </label>

                <input
                  type="text"
                  defaultValue="Administrator"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    defaultValue="admin@intellxai.in"
                    className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none"
                    style={{
                      backgroundColor: "var(--input-bg)",
                      borderColor: "var(--border-secondary)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Smartphone
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    defaultValue="+91 98765 43210"
                    className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none"
                    style={{
                      backgroundColor: "var(--input-bg)",
                      borderColor: "var(--border-secondary)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Preferences */}
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

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
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

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
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

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Get notified whenever a new lead is received.
                  </p>
                </div>

                <div className="h-6 w-11 rounded-full bg-purple-600 p-1">
                  <div className="ml-5 h-4 w-4 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </section>

          {/* System Information */}
          <section
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

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Current application status
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div
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
                    API
                  </span>
                </div>

                <p className="mt-2 text-xs text-green-400">Operational</p>
              </div>

              <div
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
                    Database
                  </span>
                </div>

                <p className="mt-2 text-xs text-green-400">Connected</p>
              </div>

              <div
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
                    System
                  </span>
                </div>

                <p className="mt-2 text-xs text-green-400">Running normally</p>
              </div>
            </div>
          </section>

          {/* Security & Appearance */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Security */}
            <section
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Shield size={18} />
                </div>

                <div>
                  <h2
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Security
                  </h2>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Manage your account security.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between rounded-xl border p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Lock size={16} className="text-purple-400" />

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Password
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Last changed 30 days ago
                      </p>
                    </div>
                  </div>

                  <button
                    className="rounded-lg border px-3 py-2 text-[10px] font-medium text-purple-400"
                    style={{
                      borderColor: "var(--border-secondary)",
                    }}
                  >
                    Change
                  </button>
                </div>

                <div
                  className="flex items-center justify-between rounded-xl border p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-green-400" />

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Two-Factor Authentication
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Add an extra layer of protection
                      </p>
                    </div>
                  </div>

                  <div className="h-6 w-11 rounded-full bg-purple-600 p-1">
                    <div className="ml-5 h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </section>

            {/* Appearance */}
            <section
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Palette size={18} />
                </div>

                <div>
                  <h2
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Appearance
                  </h2>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Customize how the admin panel looks.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Theme
                  </p>

                  <p
                    className="mt-1 text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Choose your preferred interface theme.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="rounded-xl border-2 border-purple-500 bg-purple-500/5 px-4 py-3 text-left">
                      <div className="h-8 rounded-lg bg-[#080b14]" />

                      <p className="mt-2 text-xs font-medium text-purple-400">
                        Dark
                      </p>
                    </button>

                    <button
                      className="rounded-xl border px-4 py-3 text-left"
                      style={{
                        borderColor: "var(--border-secondary)",
                      }}
                    >
                      <div className="h-8 rounded-lg bg-white border border-gray-200" />

                      <p
                        className="mt-2 text-xs font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Light
                      </p>
                    </button>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between rounded-xl border p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-blue-400" />

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Language
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Select your preferred language
                      </p>
                    </div>
                  </div>

                  <span
                    className="rounded-lg border px-3 py-2 text-[10px]"
                    style={{
                      borderColor: "var(--border-secondary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    English
                  </span>
                </div>
              </div>
            </section>

            {/* Notification Preferences */}
            <section
              className="mt-6 rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Bell size={18} />
                </div>

                <div>
                  <h2
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Notification Preferences
                  </h2>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Choose which notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                {/* New Leads */}
                <div
                  className="flex items-center justify-between gap-6 rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                      <User size={15} />
                    </div>

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        New Lead Notifications
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Get notified when a new lead is received.
                      </p>
                    </div>
                  </div>

                  <div className="h-6 w-11 shrink-0 rounded-full bg-purple-600 p-1">
                    <div className="ml-5 h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>

                {/* Task Reminders */}
                <div
                  className="flex items-center justify-between gap-6 rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                      <Bell size={15} />
                    </div>

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Task Reminders
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Receive reminders for upcoming and overdue tasks.
                      </p>
                    </div>
                  </div>

                  <div className="h-6 w-11 shrink-0 rounded-full bg-purple-600 p-1">
                    <div className="ml-5 h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>

                {/* Email Updates */}
                <div
                  className="flex items-center justify-between gap-6 rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail size={15} />
                    </div>

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Email Updates
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Receive important system updates by email.
                      </p>
                    </div>
                  </div>

                  <div className="h-6 w-11 shrink-0 rounded-full bg-purple-600 p-1">
                    <div className="ml-5 h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>

                {/* Weekly Reports */}
                <div
                  className="flex items-center justify-between gap-6 rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <CheckCircle2 size={15} />
                    </div>

                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Weekly Reports
                      </p>

                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Receive a weekly summary of leads and tasks.
                      </p>
                    </div>
                  </div>

                  <div
                    className="h-6 w-11 shrink-0 rounded-full p-1"
                    style={{
                      backgroundColor: "var(--border-primary)",
                    }}
                  >
                    <div className="h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
