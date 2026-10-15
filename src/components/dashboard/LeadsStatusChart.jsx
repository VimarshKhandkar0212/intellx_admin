import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const statusDataByRange = {
  month: [
    {
      name: "New",
      value: 20,
      color: "#8b5cf6",
    },
    {
      name: "Contacted",
      value: 14,
      color: "#3b82f6",
    },
    {
      name: "Meeting Scheduled",
      value: 8,
      color: "#06b6d4",
    },
    {
      name: "Proposal Sent",
      value: 5,
      color: "#f59e0b",
    },
    {
      name: "Won",
      value: 3,
      color: "#22c55e",
    },
    {
      name: "Lost",
      value: 4,
      color: "#ef4444",
    },
  ],

  week: [
    {
      name: "New",
      value: 11,
      color: "#8b5cf6",
    },
    {
      name: "Contacted",
      value: 8,
      color: "#3b82f6",
    },
    {
      name: "Meeting Scheduled",
      value: 5,
      color: "#06b6d4",
    },
    {
      name: "Proposal Sent",
      value: 3,
      color: "#f59e0b",
    },
    {
      name: "Won",
      value: 2,
      color: "#22c55e",
    },
    {
      name: "Lost",
      value: 3,
      color: "#ef4444",
    },
  ],

  year: [
    {
      name: "New",
      value: 96,
      color: "#8b5cf6",
    },
    {
      name: "Contacted",
      value: 72,
      color: "#3b82f6",
    },
    {
      name: "Meeting Scheduled",
      value: 48,
      color: "#06b6d4",
    },
    {
      name: "Proposal Sent",
      value: 31,
      color: "#f59e0b",
    },
    {
      name: "Won",
      value: 18,
      color: "#22c55e",
    },
    {
      name: "Lost",
      value: 21,
      color: "#ef4444",
    },
  ],
};

function LeadsStatusChart() {
  const [range, setRange] = useState("month");

  const rawStatusData = statusDataByRange[range];

  const total = rawStatusData.reduce((sum, status) => sum + status.value, 0);

  const statusData = rawStatusData.map((status) => ({
    ...status,
    percentage: `${((status.value / total) * 100).toFixed(1)}%`,
  }));
  return (
    <section
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2
            className="text-base font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Leads by Status
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Current lead distribution
          </p>
        </div>

        <select
          value={range}
          onChange={(event) => setRange(event.target.value)}
          className="rounded-lg border px-3 py-1.5 text-xs outline-none"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-primary)",
            color: "var(--text-secondary)",
          }}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex h-[270px] items-center">
        <div className="h-full w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
                stroke="none"
              >
                {statusData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-primary)",
                  borderRadius: "10px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-1/2 space-y-3">
          {statusData.map((status) => (
            <div
              key={status.name}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{
                    backgroundColor: status.color,
                  }}
                />

                <span
                  className="truncate text-xs"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {status.name}
                </span>
              </div>

              <span
                className="shrink-0 text-xs"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {status.value} ({status.percentage})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadsStatusChart;
