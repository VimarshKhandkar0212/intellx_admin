import { useState } from "react";
import { Palette, Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function AppearanceSettings() {
  const { theme, toggleTheme } = useTheme();

  const [language, setLanguage] = useState(
    () => localStorage.getItem("preferredLanguage") || "English",
  );

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;

    setLanguage(selectedLanguage);
    localStorage.setItem("preferredLanguage", selectedLanguage);
  };
  return (
    <section
      id="appearance"
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

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
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
            <button
              type="button"
              onClick={() => {
                if (theme !== "dark") toggleTheme();
              }}
              className={`rounded-xl border-2 px-4 py-3 text-left transition ${
                theme === "dark" ? "border-purple-500 bg-purple-500/5" : ""
              }`}
              style={
                theme !== "dark"
                  ? { borderColor: "var(--border-secondary)" }
                  : undefined
              }
            >
              <div className="h-8 rounded-lg bg-[#080b14]" />

              <p
                className={`mt-2 text-xs font-medium ${
                  theme === "dark" ? "text-purple-400" : ""
                }`}
                style={
                  theme !== "dark"
                    ? { color: "var(--text-secondary)" }
                    : undefined
                }
              >
                Dark
              </p>
            </button>

            <button
              type="button"
              onClick={() => {
                if (theme !== "light") toggleTheme();
              }}
              className={`rounded-xl border-2 px-4 py-3 text-left transition ${
                theme === "light" ? "border-purple-500 bg-purple-500/5" : ""
              }`}
              style={
                theme !== "light"
                  ? { borderColor: "var(--border-secondary)" }
                  : undefined
              }
            >
              <div className="h-8 rounded-lg border border-gray-200 bg-white" />

              <p
                className={`mt-2 text-xs font-medium ${
                  theme === "light" ? "text-purple-400" : ""
                }`}
                style={
                  theme !== "light"
                    ? { color: "var(--text-secondary)" }
                    : undefined
                }
              >
                Light
              </p>
            </button>
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-4 rounded-xl border p-4"
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

          <select
            value={language}
            onChange={handleLanguageChange}
            className="rounded-lg border px-3 py-2 text-xs outline-none"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-primary)",
            }}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
    </section>
  );
}
