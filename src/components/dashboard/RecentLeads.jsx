import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredLeads =
    selectedStatus === "All"
      ? recentLeads
      : recentLeads.filter((lead) => lead.status === selectedStatus);

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

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
              className="appearance-none rounded-lg border py-1.5 pl-3 pr-8 text-xs outline-none"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
              }}
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Meeting">Meeting</option>
              <option value="Proposal">Proposal</option>
              <option value="Won">Won</option>
            </select>

            <ChevronDown
              size={13}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
            />
          </div>

          {/* View All */}
          <button
            type="button"
            onClick={() => navigate("/leads")}
            className="flex items-center gap-1 text-xs font-medium text-purple-400 transition hover:text-purple-300"
          >
            View all
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Result Count */}
      <div className="mb-3 text-[11px]" style={{ color: "var(--text-muted)" }}>
        Showing {filteredLeads.length} of {recentLeads.length} recent leads
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
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <tr
                  key={lead.email}
                  className="border-b last:border-0 transition hover:bg-white/[0.02]"
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
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-8 text-center text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  No leads found for this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentLeads;
