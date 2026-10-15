import { UserPlus } from "lucide-react";

import { useState } from "react";

import LeadStats from "../components/leads/LeadStats";
import LeadFilters from "../components/leads/LeadFilters";
import LeadTabs from "../components/leads/LeadTabs";
import LeadsTable from "../components/leads/LeadsTable";
import LeadDetails from "../components/leads/LeadDetails";
import LeadAnalytics from "../components/leads/LeadAnalytics";
import SystemStatus from "../components/leads/SystemStatus";

function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("All Leads");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [editingLead, setEditingLead] = useState(null);

  const leads = [
    {
      id: 1,
      name: "Rahul Verma",
      company: "ABC Pvt Ltd",
      email: "rahul@abcpvt.com",
      phone: "+91 98765 43210",
      status: "New",
      source: "Website",
      createdAt: "Oct 3, 2026",
    },
    {
      id: 2,
      name: "Neha Sharma",
      company: "TechNova Solutions",
      email: "neha@technova.com",
      phone: "+91 98123 45678",
      status: "Contacted",
      source: "LinkedIn",
      createdAt: "Oct 1, 2026",
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Sunrise Technologies",
      email: "amit@sunrise.io",
      phone: "+91 99887 66554",
      status: "Meeting Scheduled",
      source: "Referral",
      createdAt: "Sep 28, 2026",
    },
    {
      id: 4,
      name: "Priya Singh",
      company: "FutureX",
      email: "priya@futurex.in",
      phone: "+91 97654 32109",
      status: "Proposal Sent",
      source: "Google",
      createdAt: "Sep 20, 2026",
    },
    {
      id: 5,
      name: "Vikram Mehta",
      company: "BrightPath",
      email: "vikram@brightpath.com",
      phone: "+91 98989 12345",
      status: "Won",
      source: "Website",
      createdAt: "Sep 10, 2026",
    },
    {
      id: 6,
      name: "Ananya Patel",
      company: "CloudMatrix",
      email: "ananya@cloudmatrix.io",
      phone: "+91 98712 34567",
      status: "New",
      source: "Instagram",
      createdAt: "Sep 5, 2026",
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

  const filteredLeads = leads.filter((lead) => {
    const query = searchQuery.toLowerCase().trim();

    // Search
    const matchesSearch =
      !query ||
      lead.name.toLowerCase().includes(query) ||
      lead.company.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query);

    // Status
    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    // Source
    const matchesSource =
      sourceFilter === "All" || lead.source === sourceFilter;

    // Date
    const matchesDate = (() => {
      if (dateFilter === "All") return true;

      const leadDate = new Date(lead.createdAt);
      const today = new Date();

      today.setHours(23, 59, 59, 999);
      leadDate.setHours(0, 0, 0, 0);

      if (dateFilter === "Today") {
        const startOfToday = new Date(today);
        startOfToday.setHours(0, 0, 0, 0);

        return leadDate.getTime() === startOfToday.getTime();
      }

      if (dateFilter === "Last 7 Days") {
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        return leadDate >= sevenDaysAgo && leadDate <= today;
      }

      if (dateFilter === "Last 30 Days") {
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);
        thirtyDaysAgo.setHours(0, 0, 0, 0);

        return leadDate >= thirtyDaysAgo && leadDate <= today;
      }

      return true;
    })();

    const matchesTab = (() => {
      if (activeTab === "All Leads") return true;

      if (activeTab === "Deleted") return false;

      return lead.status === activeTab;
    })();

    return (
      matchesSearch &&
      matchesStatus &&
      matchesSource &&
      matchesDate &&
      matchesTab
    );
  });

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
      <LeadStats />

      {/* Lead Workspace */}
      <div
        className="rounded-2xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        {/* Search & Filters */}
        <LeadFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sourceFilter={sourceFilter}
          setSourceFilter={setSourceFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />

        {/* Status Tabs */}
        <LeadTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
            <LeadsTable
              leads={filteredLeads}
              selectedLead={selectedLead}
              setSelectedLead={setSelectedLead}
              onEditLead={setEditingLead}
            />
          </div>

          {/* Lead Detail Panel */}
          {selectedLead && (
            <LeadDetails
              selectedLead={selectedLead}
              setSelectedLead={setSelectedLead}
            />
          )}
        </div>

        {/* Lead Analytics & Actions */}
        <LeadAnalytics sourceData={sourceData} />

        {/* System Status */}
        <SystemStatus />
      </div>
    </div>
  );
}

export default Leads;
