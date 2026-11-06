const tabs = [
  "All Tasks",
  "My Tasks",
  "Pending",
  "In Progress",
  "Completed",
  "Overdue",
];

export default function TaskTabs({ activeTab, setActiveTab }) {
  return (
    <div
      className="flex items-center gap-1 overflow-x-auto border-b px-4 pt-3"
      style={{ borderColor: "var(--border-secondary)" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
            activeTab === tab ? "bg-purple-500/15 text-purple-400" : ""
          }`}
          style={activeTab !== tab ? { color: "var(--text-muted)" } : undefined}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
