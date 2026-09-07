import {
  Users,
  UserPlus,
  Phone,
  CalendarCheck,
  Trophy,
  Search,
  CalendarDays,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Mail,
  Building2,
  Clock3,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  FileText,
  X,
  PieChart,
  Download,
  Upload,
  Plus,
  Database,
  Server,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { useState } from "react";

function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);
  const leads = [
    {
      id: 1,
      name: "Rahul Verma",
      company: "ABC Pvt Ltd",
      email: "rahul@abcpvt.com",
      phone: "+91 98765 43210",
      status: "New",
      source: "Website",
      createdAt: "Jul 31, 2025",
    },
    {
      id: 2,
      name: "Neha Sharma",
      company: "TechNova Solutions",
      email: "neha@technova.com",
      phone: "+91 98123 45678",
      status: "Contacted",
      source: "LinkedIn",
      createdAt: "Jul 31, 2025",
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Sunrise Technologies",
      email: "amit@sunrise.io",
      phone: "+91 99887 66554",
      status: "Meeting Scheduled",
      source: "Referral",
      createdAt: "Jul 30, 2025",
    },
    {
      id: 4,
      name: "Priya Singh",
      company: "FutureX",
      email: "priya@futurex.in",
      phone: "+91 97654 32109",
      status: "Proposal Sent",
      source: "Google",
      createdAt: "Jul 29, 2025",
    },
    {
      id: 5,
      name: "Vikram Mehta",
      company: "BrightPath",
      email: "vikram@brightpath.com",
      phone: "+91 98989 12345",
      status: "Won",
      source: "Website",
      createdAt: "Jul 29, 2025",
    },
    {
      id: 6,
      name: "Ananya Patel",
      company: "CloudMatrix",
      email: "ananya@cloudmatrix.io",
      phone: "+91 98712 34567",
      status: "New",
      source: "Instagram",
      createdAt: "Jul 28, 2025",
    },
  ];

  const sourceData = [
    {
      name: "Website",
      value: 58,
      color: "#a855f7",
    },
    {
      name: "Google",
      value: 34,
      color: "#3b82f6",
    },
    {
      name: "LinkedIn",
      value: 24,
      color: "#06b6d4",
    },
    {
      name: "Referral",
      value: 18,
      color: "#f97316",
    },
    {
      name: "Instagram",
      value: 14,
      color: "#22c55e",
    },
  ];

  const stats = [
    {
      title: "Total Leads",
      value: "148",
      change: "+18%",
      changeText: "from last 30 days",
      icon: Users,
      iconColor: "purple",
    },
    {
      title: "New Leads",
      value: "20",
      change: "+12%",
      changeText: "from last 30 days",
      icon: UserPlus,
      iconColor: "blue",
    },
    {
      title: "Contacted",
      value: "14",
      change: "+8%",
      changeText: "from last 30 days",
      icon: Phone,
      iconColor: "cyan",
    },
    {
      title: "Meetings",
      value: "8",
      change: "+5%",
      changeText: "from last 30 days",
      icon: CalendarCheck,
      iconColor: "orange",
    },
    {
      title: "Closed Won",
      value: "3",
      change: "+7%",
      changeText: "from last 30 days",
      icon: Trophy,
      iconColor: "green",
    },
  ];

  const iconStyles = {
    purple: "bg-purple-500/15 text-purple-400",
    blue: "bg-blue-500/15 text-blue-400",
    cyan: "bg-cyan-500/15 text-cyan-400",
    orange: "bg-orange-500/15 text-orange-400",
    green: "bg-green-500/15 text-green-400",
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Leads
          </h1>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage and track all your leads.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500">
          <UserPlus size={16} />
          Add New Lead
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-5 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="relative min-w-0 overflow-hidden rounded-2xl border p-4"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              {/* Icon */}
              <div
                className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl ${iconStyles[stat.iconColor]}`}
              >
                <Icon size={16} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <p
                className="pr-10 text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.title}
              </p>

              {/* Value */}
              <h2
                className="mt-4 text-2xl font-semibold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </h2>

              {/* Change */}
              <div className="mt-3 flex items-center gap-1 text-[10px]">
                <span className="font-medium text-green-400">
                  {stat.change}
                </span>

                <span style={{ color: "var(--text-muted)" }}>
                  {stat.changeText}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lead Workspace */}
      <div
        className="rounded-2xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 border-b p-4">
          {/* Search */}
          <div className="relative min-w-[240px] flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
            />

            <input
              type="text"
              placeholder="Search leads..."
              className="h-10 w-full rounded-xl border pl-9 pr-3 text-sm outline-none transition focus:border-purple-500/50"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
              }}
            />
          </div>

          {/* Status Filter */}
          <select
            className="h-10 rounded-xl border px-3 text-xs outline-none"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <option>Status: All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Meeting Scheduled</option>
            <option>Proposal Sent</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          {/* Source Filter */}
          <select
            className="h-10 rounded-xl border px-3 text-xs outline-none"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <option>Source: All</option>
            <option>Website</option>
            <option>Google</option>
            <option>Referral</option>
            <option>LinkedIn</option>
            <option>Instagram</option>
          </select>

          {/* Date */}
          <button
            className="flex h-10 items-center gap-2 rounded-xl border px-3 text-xs"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <CalendarDays size={14} />
            Date Range
          </button>

          {/* Clear */}
          <button className="h-10 rounded-xl px-3 text-xs font-medium text-purple-400 transition hover:bg-purple-500/10">
            Clear
          </button>
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto px-4 pt-3">
          {[
            "All Leads",
            "New",
            "Contacted",
            "Meeting Scheduled",
            "Proposal Sent",
            "Won",
            "Lost",
            "Deleted",
          ].map((tab, index) => (
            <button
              key={tab}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
                index === 0 ? "bg-purple-500/15 text-purple-400" : ""
              }`}
              style={index !== 0 ? { color: "var(--text-muted)" } : undefined}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Leads Content */}
        <div
          className={
            selectedLead
              ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]"
              : "grid grid-cols-1"
          }
        >
          {/* Table Side */}
          <div className="min-w-0">
            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr
                    className="border-y"
                    style={{
                      borderColor: "var(--border-secondary)",
                    }}
                  >
                    <th className="w-12 px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 rounded accent-purple-500"
                      />
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Name
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Company
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Status
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Source
                    </th>

                    <th
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Created
                    </th>

                    <th
                      className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className={`border-b transition-colors ${
                        selectedLead?.id === 1
                          ? "bg-purple-500/[0.04]"
                          : "hover:bg-white/[0.02]"
                      }`}
                      style={{
                        borderColor: "var(--border-secondary)",
                      }}
                    >
                      <td className="px-4 py-3.5">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded accent-purple-500"
                        />
                      </td>

                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-xs font-semibold text-purple-400">
                            {lead.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>

                          <p
                            className="truncate text-xs font-medium"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {lead.name}
                          </p>
                        </div>
                      </td>

                      <td
                        className="px-4 py-3.5 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {lead.company}
                      </td>

                      <td
                        className="px-4 py-3.5 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {lead.email}
                      </td>

                      <td className="px-4 py-3.5">
                        <StatusBadge status={lead.status} />
                      </td>

                      <td
                        className="px-4 py-3.5 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {lead.source}
                      </td>

                      <td
                        className="whitespace-nowrap px-4 py-3.5 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {lead.createdAt}
                      </td>

                      <td className="px-4 py-3.5">
                        <div className="flex justify-end gap-1">
                          <button
                            title="View"
                            onClick={() => setSelectedLead(lead)}
                            className="rounded-lg p-1.5 text-purple-400 transition hover:bg-purple-500/10"
                          >
                            <Eye size={14} />
                          </button>

                          <button
                            title="Edit"
                            className="rounded-lg p-1.5 transition hover:bg-blue-500/10 hover:text-blue-400"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <Pencil size={14} />
                          </button>

                          <button
                            title="Delete"
                            className="rounded-lg p-1.5 transition hover:bg-red-500/10 hover:text-red-400"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <Trash2 size={14} />
                          </button>

                          <button
                            title="More"
                            className="rounded-lg p-1.5 transition hover:bg-white/5"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <MoreHorizontal size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div
              className="flex items-center justify-between border-t px-4 py-3"
              style={{
                borderColor: "var(--border-secondary)",
              }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Showing 1–6 of 148 leads
              </p>

              <div className="flex items-center gap-1">
                <button
                  className="rounded-lg border px-2.5 py-1.5 text-xs"
                  style={{
                    borderColor: "var(--border-secondary)",
                    color: "var(--text-muted)",
                  }}
                >
                  Previous
                </button>

                <button className="rounded-lg bg-purple-500/15 px-2.5 py-1.5 text-xs font-medium text-purple-400">
                  1
                </button>

                <button
                  className="rounded-lg px-2.5 py-1.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  2
                </button>

                <button
                  className="rounded-lg px-2.5 py-1.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  3
                </button>

                <button
                  className="rounded-lg border px-2.5 py-1.5 text-xs"
                  style={{
                    borderColor: "var(--border-secondary)",
                    color: "var(--text-muted)",
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Lead Detail Panel */}
          {selectedLead && (
            <div
              className="border-l"
              style={{
                borderColor: "var(--border-secondary)",
              }}
            >
              {/* Detail Header */}
              <div
                className="flex items-start justify-between border-b p-5"
                style={{
                  borderColor: "var(--border-secondary)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-sm font-semibold text-purple-400">
                    {selectedLead.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="truncate text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {selectedLead.name}
                    </h3>

                    <p
                      className="mt-0.5 truncate text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {selectedLead.company}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLead(null)}
                  className="rounded-lg p-1.5 transition hover:bg-white/5"
                  style={{ color: "var(--text-muted)" }}
                >
                  <X size={15} />
                </button>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 border-b p-5">
                <h4
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Contact Information
                </h4>

                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="shrink-0 text-purple-400" />

                  <span
                    className="truncate text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {selectedLead.email}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <PhoneCall size={14} className="shrink-0 text-purple-400" />

                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {selectedLead.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Building2 size={14} className="shrink-0 text-purple-400" />

                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {selectedLead.company}
                  </span>
                </div>
              </div>

              {/* Lead Information */}
              <div className="space-y-4 border-b p-5">
                <h4
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Lead Information
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Status
                    </p>

                    <div className="mt-1.5">
                      <StatusBadge status={selectedLead.status} />
                    </div>
                  </div>

                  <div>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Source
                    </p>

                    <p
                      className="mt-1.5 text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {selectedLead.source}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Created
                    </p>

                    <p
                      className="mt-1.5 text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {selectedLead.createdAt}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Assigned To
                    </p>

                    <p
                      className="mt-1.5 text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Admin
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal Notes */}
              <div
                className="border-b p-5"
                style={{
                  borderColor: "var(--border-secondary)",
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Internal Notes
                  </h4>

                  <MessageSquare size={14} className="text-purple-400" />
                </div>

                <div
                  className="rounded-xl border p-3"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Interested in our enterprise solution. Follow up after the
                    initial discovery call.
                  </p>
                </div>
              </div>

              {/* Activity */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h4
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Lead Activity
                  </h4>

                  <Clock3 size={14} className="text-purple-400" />
                </div>

                <div className="relative space-y-5 pl-5">
                  {/* Timeline Line */}
                  <div className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10" />

                  <div className="relative">
                    <div className="absolute -left-[20px] top-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-purple-500 ring-4 ring-purple-500/10" />

                    <div className="flex items-start gap-2">
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 text-green-400"
                      />

                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          New lead received
                        </p>

                        <p
                          className="mt-0.5 text-[10px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[20px] top-0.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />

                    <div className="flex items-start gap-2">
                      <UserPlus size={13} className="mt-0.5 text-blue-400" />

                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Lead assigned to Admin
                        </p>

                        <p
                          className="mt-0.5 text-[10px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          10 minutes ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[20px] top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/10" />

                    <div className="flex items-start gap-2">
                      <PhoneCall size={13} className="mt-0.5 text-cyan-400" />

                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Follow-up scheduled
                        </p>

                        <p
                          className="mt-0.5 text-[10px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          1 hour ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lead Analytics & Actions */}
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

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Where your leads are coming from
                </p>
              </div>

              <PieChart
                size={17}
                className="text-purple-400"
                strokeWidth={1.8}
              />
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

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Frequently used lead actions
              </p>
            </div>

            <div className="space-y-2">
              <button
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

              <button
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

              <button
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

        {/* System Status */}
        <div
          className="rounded-2xl border p-5"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-primary)",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                System Status
              </h2>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Current system health
              </p>
            </div>

            <span className="flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2.5 py-1 text-[10px] font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              All Systems Operational
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* API */}
            <div
              className="flex items-center gap-3 rounded-xl border p-3"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <Server size={16} />
              </div>

              <div className="flex-1">
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  API
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Operational
                </p>
              </div>

              <CheckCircle2 size={15} className="text-green-400" />
            </div>

            {/* Database */}
            <div
              className="flex items-center gap-3 rounded-xl border p-3"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <Database size={16} />
              </div>

              <div className="flex-1">
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Database
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Connected
                </p>
              </div>

              <CheckCircle2 size={15} className="text-green-400" />
            </div>

            {/* System */}
            <div
              className="flex items-center gap-3 rounded-xl border p-3"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <CheckCircle2 size={16} />
              </div>

              <div className="flex-1">
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  System
                </p>

                <p
                  className="mt-0.5 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Running normally
                </p>
              </div>

              <span className="text-[10px] font-medium text-green-400">
                Healthy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    New: "bg-purple-500/10 text-purple-400",
    Contacted: "bg-blue-500/10 text-blue-400",
    "Meeting Scheduled": "bg-cyan-500/10 text-cyan-400",
    "Proposal Sent": "bg-orange-500/10 text-orange-400",
    Won: "bg-green-500/10 text-green-400",
    Lost: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-medium ${
        styles[status] || "bg-gray-500/10 text-gray-400"
      }`}
    >
      {status}
    </span>
  );
}

export default Leads;
