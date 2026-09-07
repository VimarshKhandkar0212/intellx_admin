import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "Jul 1", leads: 7 },
  { date: "Jul 3", leads: 12 },
  { date: "Jul 5", leads: 17 },
  { date: "Jul 7", leads: 13 },
  { date: "Jul 9", leads: 21 },
  { date: "Jul 11", leads: 19 },
  { date: "Jul 13", leads: 24 },
  { date: "Jul 15", leads: 25 },
  { date: "Jul 17", leads: 22 },
  { date: "Jul 19", leads: 19 },
  { date: "Jul 21", leads: 27 },
  { date: "Jul 23", leads: 30 },
  { date: "Jul 25", leads: 27 },
  { date: "Jul 27", leads: 31 },
  { date: "Jul 29", leads: 30 },
  { date: "Jul 31", leads: 29 },
];

function LeadsOverviewChart() {
  return (
    <section
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2
            className="text-base font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Leads Overview
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Lead generation over time
          </p>
        </div>

        <select
          className="rounded-lg border px-3 py-1.5 text-xs outline-none"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-primary)",
            color: "var(--text-secondary)",
          }}
          defaultValue="month"
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[270px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="var(--border-secondary)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tick={{
                fill: "var(--text-muted)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              interval={2}
            />

            <YAxis
              tick={{
                fill: "var(--text-muted)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 40]}
              ticks={[0, 10, 20, 30, 40]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "10px",
                color: "var(--text-primary)",
              }}
              labelStyle={{
                color: "var(--text-secondary)",
              }}
            />

            <Area
              type="monotone"
              dataKey="leads"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#leadGradient)"
              dot={{
                r: 3,
                fill: "#8b5cf6",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default LeadsOverviewChart;
