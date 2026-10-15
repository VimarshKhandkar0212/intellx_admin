import { useState } from "react";

import {
  Users,
  CalendarDays,
  Phone,
  UserPlus,
  Send,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

import StatCard from "../components/common/StatCard";

import LeadPipeline from "../components/dashboard/LeadPipeline";

import LeadsOverviewChart from "../components/dashboard/LeadsOverviewChart";

import LeadsStatusChart from "../components/dashboard/LeadsStatusChart";

import RecentLeads from "../components/dashboard/RecentLeads";

import LatestActivity from "../components/dashboard/LatestActivity";

import QuickActions from "../components/dashboard/QuickActions";

import TodaysMeetings from "../components/dashboard/TodaysMeetings";

const statsByRange = {
  Today: [
    {
      title: "Total Leads",
      value: "12",
      change: "+9%",
      changeText: "from yesterday",
      icon: Users,
      iconColor: "purple",
    },
    {
      title: "Today's Leads",
      value: "12",
      change: "+9%",
      changeText: "from yesterday",
      icon: CalendarDays,
      iconColor: "blue",
    },
    {
      title: "This Week",
      value: "32",
      change: "+15%",
      changeText: "from last week",
      icon: CalendarDays,
      iconColor: "cyan",
    },
    {
      title: "This Month",
      value: "148",
      change: "+18%",
      changeText: "from last month",
      icon: CalendarDays,
      iconColor: "orange",
    },
    {
      title: "New Leads",
      value: "4",
      change: "+14%",
      changeText: "from yesterday",
      icon: UserPlus,
      iconColor: "green",
    },
    {
      title: "Contacted",
      value: "3",
      change: "+7%",
      changeText: "from yesterday",
      icon: Phone,
      iconColor: "blue",
      iconSize: 15,
    },
    {
      title: "Meetings",
      value: "2",
      change: "+5%",
      changeText: "from yesterday",
      icon: Users,
      iconColor: "purple",
      iconSize: 15,
    },
    {
      title: "Closed (Won)",
      value: "1",
      change: "+10%",
      changeText: "from yesterday",
      icon: CheckCircle2,
      iconColor: "green",
    },
  ],

  "This Week": [
    {
      title: "Total Leads",
      value: "32",
      change: "+15%",
      changeText: "from last week",
      icon: Users,
      iconColor: "purple",
    },
    {
      title: "Today's Leads",
      value: "12",
      change: "+9%",
      changeText: "from yesterday",
      icon: CalendarDays,
      iconColor: "blue",
    },
    {
      title: "This Week",
      value: "32",
      change: "+15%",
      changeText: "from last week",
      icon: CalendarDays,
      iconColor: "cyan",
    },
    {
      title: "This Month",
      value: "148",
      change: "+18%",
      changeText: "from last month",
      icon: CalendarDays,
      iconColor: "orange",
    },
    {
      title: "New Leads",
      value: "11",
      change: "+12%",
      changeText: "from last week",
      icon: UserPlus,
      iconColor: "green",
    },
    {
      title: "Contacted",
      value: "8",
      change: "+10%",
      changeText: "from last week",
      icon: Phone,
      iconColor: "blue",
      iconSize: 15,
    },
    {
      title: "Meetings",
      value: "5",
      change: "+8%",
      changeText: "from last week",
      icon: Users,
      iconColor: "purple",
      iconSize: 15,
    },
    {
      title: "Closed (Won)",
      value: "2",
      change: "+6%",
      changeText: "from last week",
      icon: CheckCircle2,
      iconColor: "green",
    },
  ],

  "This Month": [
    {
      title: "Total Leads",
      value: "148",
      change: "+18%",
      changeText: "from last month",
      icon: Users,
      iconColor: "purple",
    },
    {
      title: "Today's Leads",
      value: "12",
      change: "+9%",
      changeText: "from yesterday",
      icon: CalendarDays,
      iconColor: "blue",
    },
    {
      title: "This Week",
      value: "32",
      change: "+15%",
      changeText: "from last week",
      icon: CalendarDays,
      iconColor: "cyan",
    },
    {
      title: "This Month",
      value: "148",
      change: "+18%",
      changeText: "from last month",
      icon: CalendarDays,
      iconColor: "orange",
    },
    {
      title: "New Leads",
      value: "20",
      change: "+12%",
      changeText: "from last month",
      icon: UserPlus,
      iconColor: "green",
    },
    {
      title: "Contacted",
      value: "14",
      change: "+8%",
      changeText: "from last month",
      icon: Phone,
      iconColor: "blue",
      iconSize: 15,
    },
    {
      title: "Meetings",
      value: "8",
      change: "+5%",
      changeText: "from last month",
      icon: Users,
      iconColor: "purple",
      iconSize: 15,
    },
    {
      title: "Closed (Won)",
      value: "3",
      change: "+7%",
      changeText: "from last month",
      icon: CheckCircle2,
      iconColor: "green",
    },
  ],

  "Last 30 Days": [
    {
      title: "Total Leads",
      value: "148",
      change: "+18%",
      changeText: "from previous 30 days",
      icon: Users,
      iconColor: "purple",
    },
    {
      title: "Today's Leads",
      value: "12",
      change: "+9%",
      changeText: "from yesterday",
      icon: CalendarDays,
      iconColor: "blue",
    },
    {
      title: "This Week",
      value: "32",
      change: "+15%",
      changeText: "from last week",
      icon: CalendarDays,
      iconColor: "cyan",
    },
    {
      title: "This Month",
      value: "148",
      change: "+18%",
      changeText: "from previous 30 days",
      icon: CalendarDays,
      iconColor: "orange",
    },
    {
      title: "New Leads",
      value: "20",
      change: "+12%",
      changeText: "from previous 30 days",
      icon: UserPlus,
      iconColor: "green",
    },
    {
      title: "Contacted",
      value: "14",
      change: "+8%",
      changeText: "from previous 30 days",
      icon: Phone,
      iconColor: "blue",
      iconSize: 15,
    },
    {
      title: "Meetings",
      value: "8",
      change: "+5%",
      changeText: "from previous 30 days",
      icon: Users,
      iconColor: "purple",
      iconSize: 15,
    },
    {
      title: "Closed (Won)",
      value: "3",
      change: "+7%",
      changeText: "from previous 30 days",
      icon: CheckCircle2,
      iconColor: "green",
    },
  ],
};

function Dashboard() {
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("This Month");

  const dateRanges = [
    {
      label: "Today",
      display: "Today",
    },
    {
      label: "This Week",
      display: "This Week",
    },
    {
      label: "This Month",
      display: "Sep 1 - Sep 31, 2026",
    },
    {
      label: "Last 30 Days",
      display: "Last 30 Days",
    },
  ];

  const selectedDateRange = dateRanges.find(
    (range) => range.label === selectedRange,
  );

  const stats = statsByRange[selectedRange];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your leads today.
          </p>
        </div>

        {/* Date Filter */}
        <div className="relative">
          <button
            onClick={() => setDateRangeOpen((current) => !current)}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <CalendarDays size={16} />

            <span>{selectedDateRange.display}</span>

            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                dateRangeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dateRangeOpen && (
            <div className="absolute right-0 top-full z-50 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0d1420] p-1.5 shadow-2xl">
              {dateRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => {
                    setSelectedRange(range.label);
                    setDateRangeOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    selectedRange === range.label
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{range.label}</span>

                  {selectedRange === range.label && <CheckCircle2 size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-8 gap-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeText={stat.changeText}
            icon={stat.icon}
            iconColor={stat.iconColor}
            iconSize={stat.iconSize}
          />
        ))}
      </div>

      <div className="mt-6">
        <LeadPipeline />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LeadsOverviewChart />
        <LeadsStatusChart />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
        <RecentLeads />
        <LatestActivity />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.7fr]">
        <QuickActions />
        <TodaysMeetings />
      </div>
    </div>
  );
}

export default Dashboard;
