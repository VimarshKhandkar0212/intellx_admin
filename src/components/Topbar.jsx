import { Bell, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Topbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className="fixed left-[220px] right-0 top-0 z-30 flex h-20 items-center justify-between border-b px-8 backdrop-blur-xl"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--bg-primary) 90%, transparent)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Search */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />

        <input
          type="text"
          placeholder="Search leads..."
          className="h-11 w-96 rounded-xl border pl-11 pr-4 text-sm outline-none transition-colors placeholder:opacity-60"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-primary)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Theme */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-xl transition"
          style={{ color: "var(--text-secondary)" }}
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        {/* Notification */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition"
          style={{ color: "var(--text-secondary)" }}
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500" />
        </button>

        {/* Profile */}
        <div
          className="ml-2 flex items-center gap-3 border-l"
          style={{ borderColor: "var(--border-primary)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold text-white">
            A
          </div>

          <div className="hidden sm:block">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Admin
            </p>

            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
