import { PieChart, Plus, Upload, Download } from "lucide-react";

import {
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
} from "recharts";

function LeadAnalytics({ sourceData }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
      {/* Lead Source Breakdown */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Lead Source Breakdown
            </h2>

            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Where your leads are coming from
            </p>
          </div>

          <PieChart size={17} className="text-purple-400" strokeWidth={1.8} />
        </div>

        <div className="flex items-center gap-8">
          {/* Donut */}
          <div className="h-[190px] w-[190px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={sourceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={78}
                  paddingAngle={3}
                  stroke="none"
                >
                  {sourceData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "10px",
                    fontSize: "11px",
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="min-w-0 flex-1 space-y-3">
            {sourceData.map((source) => (
              <div
                key={source.name}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: source.color,
                    }}
                  />

                  <span
                    className="truncate text-xs"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {source.name}
                  </span>
                </div>

                <span
                  className="text-xs font-medium"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {source.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        <div className="mb-5">
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Quick Actions
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Frequently used lead actions
          </p>
        </div>

        <div className="space-y-2">
          {/* Add New Lead */}
          <button
            type="button"
            className="group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:border-purple-500/20 hover:bg-purple-500/5"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
              <Plus size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Add New Lead
              </p>

              <p
                className="mt-0.5 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Create a new lead manually
              </p>
            </div>
          </button>

          {/* Import CSV */}
          <button
            type="button"
            className="group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:border-blue-500/20 hover:bg-blue-500/5"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
              <Upload size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Import CSV
              </p>

              <p
                className="mt-0.5 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Import leads from a CSV file
              </p>
            </div>
          </button>

          {/* Export CSV */}
          <button
            type="button"
            className="group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:border-cyan-500/20 hover:bg-cyan-500/5"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
              <Download size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Export CSV
              </p>

              <p
                className="mt-0.5 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Export current leads
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadAnalytics;
