import {
  UserPlus,
  ListTodo,
  CalendarPlus,
  Upload,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      alert("Please select a CSV file.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const actions = [
    {
      label: "Add New Lead",
      description: "Create a new lead",
      icon: UserPlus,
      color: "purple",
      action: () => navigate("/leads"),
    },
    {
      label: "Create Task",
      description: "Add a new task",
      icon: ListTodo,
      color: "blue",
      action: () => navigate("/tasks"),
    },
    {
      label: "Schedule Meeting",
      description: "Plan a meeting",
      icon: CalendarPlus,
      color: "cyan",
      action: () => navigate("/calendar"),
    },
    {
      label: selectedFile ? "CSV Selected" : "Import Leads",
      description: selectedFile ? selectedFile.name : "Import leads from CSV",
      icon: Upload,
      color: "green",
      action: () => fileInputRef.current?.click(),
    },
  ];

  const iconStyles = {
    purple: "bg-purple-500/15 text-purple-400",
    blue: "bg-blue-500/15 text-blue-400",
    cyan: "bg-cyan-500/15 text-cyan-400",
    green: "bg-green-500/15 text-green-400",
  };

  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Quick Actions
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Frequently used actions
          </p>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,text/csv"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Actions */}
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              onClick={action.action}
              className="group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 hover:bg-white/[0.03]"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
              }}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  iconStyles[action.color]
                }`}
              >
                <Icon size={16} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {action.label}
                </p>

                <p
                  className="mt-0.5 truncate text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={14}
                className="shrink-0 opacity-40 transition-transform group-hover:translate-x-1"
                style={{ color: "var(--text-secondary)" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
