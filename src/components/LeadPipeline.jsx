import { ChevronDown, ArrowRight } from "lucide-react";

const stages = [
  {
    name: "New",
    value: 20,
    percentage: "13.5%",
    color: "purple",
  },
  {
    name: "Contacted",
    value: 14,
    percentage: "9.5%",
    color: "blue",
  },
  {
    name: "Meeting Scheduled",
    value: 8,
    percentage: "5.4%",
    color: "cyan",
  },
  {
    name: "Proposal Sent",
    value: 5,
    percentage: "3.4%",
    color: "orange",
  },
  {
    name: "Won",
    value: 3,
    percentage: "2%",
    color: "green",
  },
  {
    name: "Lost",
    value: 4,
    percentage: "2.7%",
    color: "red",
  },
];

const colors = {
  purple: {
    border: "border-purple-500/60",
    background: "bg-purple-500/15",
    text: "text-purple-300",
  },
  blue: {
    border: "border-blue-500/60",
    background: "bg-blue-500/15",
    text: "text-blue-300",
  },
  cyan: {
    border: "border-cyan-500/60",
    background: "bg-cyan-500/15",
    text: "text-cyan-300",
  },
  orange: {
    border: "border-orange-500/60",
    background: "bg-orange-500/15",
    text: "text-orange-300",
  },
  green: {
    border: "border-green-500/60",
    background: "bg-green-500/15",
    text: "text-green-300",
  },
  red: {
    border: "border-red-500/60",
    background: "bg-red-500/15",
    text: "text-red-300",
  },
};

function LeadPipeline() {
  return (
    <section
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Lead Pipeline
        </h2>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition"
          style={{
            borderColor: "var(--border-primary)",
            color: "var(--text-secondary)",
            backgroundColor: "var(--input-bg)",
          }}
        >
          This Month
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Pipeline */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {stages.map((stage, index) => {
          const color = colors[stage.color];

          return (
            <div
              key={stage.name}
              className="flex min-w-0 flex-1 items-center gap-2"
            >
              {/* Stage */}
              <div
                className={`min-w-[120px] flex-1 rounded-xl border p-4 text-center ${color.border} ${color.background}`}
              >
                <p className={`text-xs font-medium ${color.text}`}>
                  {stage.name}
                </p>

                <p
                  className="mt-2 text-2xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stage.value}
                </p>

                <p
                  className="mt-1 text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stage.percentage}
                </p>
              </div>

              {/* Arrow */}
              {index < stages.length - 1 && (
                <ArrowRight
                  size={17}
                  className="shrink-0"
                  style={{ color: "var(--text-muted)" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LeadPipeline;
