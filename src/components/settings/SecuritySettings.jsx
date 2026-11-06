import { useState } from "react";
import { Lock, Shield, X, Eye, EyeOff } from "lucide-react";

export default function SecuritySettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [is2FAEnabled, setIs2FAEnabled] = useState(() => {
    const saved = localStorage.getItem("twoFactorEnabled");
    return saved === null ? true : JSON.parse(saved);
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handle2FAToggle = () => {
    const updatedValue = !is2FAEnabled;

    setIs2FAEnabled(updatedValue);
    localStorage.setItem("twoFactorEnabled", JSON.stringify(updatedValue));
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibilty = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setError("Please fill all password fields");
      return;
    }

    if (passwords.new.length < 8) {
      setError("New Password must contain atleast 8 characters");
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setError("New password and Confirm password do not match");
      return;
    }

    alert("Password form validated!");

    setPasswords({
      current: "",
      new: "",
      confirm: "",
    });

    setIsModalOpen(false);
  };

  const renderPasswordInput = (label, name) => (
    <div>
      <label
        className="mb-2 block text-xs font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={showPasswords[name] ? "text" : "password"}
          name={name}
          value={passwords[name]}
          onChange={handlePasswordChange}
          className="w-full rounded-xl border px-4 py-3 pr-11 text-sm outline-none"
          style={{
            background: "var(--input-bg)",
            bordercolor: "var(--border-secondary)",
            color: "var(--text-primary)",
          }}
        />

        <button
          type="button"
          onClick={() => togglePasswordVisibilty(name)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        >
          {showPasswords[name] ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section
        id="security"
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

            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Manage your account security.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Password */}
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
                  Manage your account password
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg border px-3 py-2 text-[10px] font-medium text-purple-400 transition hover:bg-purple-500/10"
              style={{ borderColor: "var(--border-secondary)" }}
            >
              Change
            </button>
          </div>

          {/* Two Factor Authentication */}
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

            <button
              type="button"
              role="switch"
              aria-checked={is2FAEnabled}
              aria-label="Two-Factor Authentication"
              onClick={handle2FAToggle}
              className={`h-6 w-11 shrink-0 rounded-full p-1 transition-colors ${
                is2FAEnabled ? "bg-purple-600" : ""
              }`}
              style={
                !is2FAEnabled
                  ? { backgroundColor: "var(--border-primary)" }
                  : undefined
              }
            >
              <div
                className={`h-4 w-4 rounded-full bg-white transition-transform ${
                  is2FAEnabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div
            className="w-full max-w-md rounded-2xl border p-6 shadow-2xl"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2
                  className="text-base font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Change Password
                </h2>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Update your account password.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setError("");
                }}
                style={{ color: "var(--text-muted)" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {renderPasswordInput("Current Password", "current")}
              {renderPasswordInput("New Password", "new")}
              {renderPasswordInput("Confirm New Password", "confirm")}

              {error && <p className="text-xs text-red-400">{error}</p>}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setError("");
                  }}
                  className="rounded-xl border px-4 py-2.5 text-xs font-medium"
                  style={{
                    borderColor: "var(--border-secondary)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-purple-500"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
