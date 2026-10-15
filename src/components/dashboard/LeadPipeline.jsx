import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const stagesByRange = {
  Today: [
    {
      name: "New",
      value: 4,
      percentage: "33.3%",
      color: "purple",
    },
    {
      name: "Contacted",
      value: 3,
      percentage: "25%",
      color: "blue",
    },
    {
      name: "Meeting Scheduled",
      value: 2,
      percentage: "16.7%",
      color: "cyan",
    },
    {
      name: "Proposal Sent",
      value: 1,
      percentage: "8.3%",
      color: "orange",
    },
    {
      name: "Won",
      value: 1,
      percentage: "8.3%",
      color: "green",
    },
    {
      name: "Lost",
      value: 1,
      percentage: "8.3%",
      color: "red",
    },
  ],

  "This Week": [
    {
      name: "New",
      value: 11,
      percentage: "34.4%",
      color: "purple",
    },
    {
      name: "Contacted",
      value: 8,
      percentage: "25%",
      color: "blue",
    },
    {
      name: "Meeting Scheduled",
      value: 5,
      percentage: "15.6%",
      color: "cyan",
    },
    {
      name: "Proposal Sent",
      value: 3,
      percentage: "9.4%",
      color: "orange",
    },
    {
      name: "Won",
      value: 2,
      percentage: "6.3%",
      color: "green",
    },
    {
      name: "Lost",
      value: 3,
      percentage: "9.4%",
      color: "red",
    },
  ],

  "This Month": [
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
  ],

  "Last 30 Days": [
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
  ],
};

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
  const [pipelineRange, setPipelineRange] = useState("This Month");

  const [pipelineDropdownOpen, setPipelineDropdownOpen] = useState(false);

  const stages = stagesByRange[pipelineRange];

  const pipelineRanges = ["Today", "This Week", "This Month", "Last 30 Days"];

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

        <div className="relative">
          <button
            type="button"
            onClick={() => setPipelineDropdownOpen((current) => !current)}
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition"
            style={{
              borderColor: "var(--border-primary)",
              color: "var(--text-secondary)",
              backgroundColor: "var(--input-bg)",
            }}
          >
            {pipelineRange}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                pipelineDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {pipelineDropdownOpen && (
            <div
              className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border p-1.5 shadow-2xl"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              {pipelineRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setPipelineRange(range);
                    setPipelineDropdownOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition ${
                    pipelineRange === range
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{range}</span>

                  {pipelineRange === range && (
                    <span className="text-purple-400">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
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
