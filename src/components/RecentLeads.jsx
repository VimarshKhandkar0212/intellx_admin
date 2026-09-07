import { ArrowUpRight } from "lucide-react";

const recentLeads = [
  {
    name: "Rahul Verma",
    company: "ABC Pvt Ltd",
    email: "rahul@abcpvt.com",
    status: "New",
    date: "Today, 10:32 AM",
  },
  {
    name: "Neha Sharma",
    company: "TechNova Solutions",
    email: "neha@technova.com",
    status: "Contacted",
    date: "Today, 09:18 AM",
  },
  {
    name: "Amit Kumar",
    company: "Sunrise Technologies",
    email: "amit@sunrise.io",
    status: "Meeting",
    date: "Yesterday, 04:45 PM",
  },
  {
    name: "Priya Singh",
    company: "FutureX",
    email: "priya@futurex.in",
    status: "Proposal",
    date: "Yesterday, 02:20 PM",
  },
  {
    name: "Vikram Mehta",
    company: "BrightPath",
    email: "vikram@brightpath.com",
    status: "Won",
    date: "Jul 29, 11:05 AM",
  },
];

const statusStyles = {
  New: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Contacted: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Meeting: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Proposal: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Won: "bg-green-500/10 text-green-400 border-green-500/20",
};

function RecentLeads() {
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
            Recent Leads
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Latest leads received from your website
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-purple-400 transition hover:text-purple-300"
        >
          View all
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px]">
          <thead>
            <tr
              className="border-b text-left text-[11px] uppercase tracking-wider"
              style={{
                borderColor: "var(--border-secondary)",
                color: "var(--text-muted)",
              }}
            >
              <th className="pb-3 font-medium">Lead</th>
              <th className="pb-3 font-medium">Company</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Received</th>
            </tr>
          </thead>

          <tbody>
            {recentLeads.map((lead) => (
              <tr
                key={lead.email}
                className="border-b last:border-0"
                style={{
                  borderColor: "var(--border-secondary)",
                }}
              >
                {/* Lead */}
                <td className="py-3.5">
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {lead.name}
                    </p>

                    <p
                      className="mt-0.5 text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {lead.email}
                    </p>
                  </div>
                </td>

                {/* Company */}
                <td
                  className="py-3.5 text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {lead.company}
                </td>

                {/* Status */}
                <td className="py-3.5">
                  <span
                    className={`inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-medium ${
                      statusStyles[lead.status]
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>

                {/* Date */}
                <td
                  className="py-3.5 text-right text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {lead.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentLeads;
