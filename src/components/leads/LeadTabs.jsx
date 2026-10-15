const tabs = [
  "All Leads",
  "New",
  "Contacted",
  "Meeting Scheduled",
  "Proposal Sent",
  "Won",
  "Lost",
  "Deleted",
];

function LeadTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto px-4 pt-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
            activeTab === tab
              ? "bg-purple-500/15 text-purple-400"
              : "hover:bg-white/[0.03]"
          }`}
          style={activeTab !== tab ? { color: "var(--text-muted)" } : undefined}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default LeadTabs;
