import {
  Users,
  CalendarDays,
  Phone,
  UserPlus,
  Send,
  CheckCircle2,
  XCircle,
  TrendingUp,
} from "lucide-react";

import StatCard from "../components/StatCard";
import LeadPipeline from "../components/LeadPipeline";

import LeadsOverviewChart from "../components/LeadsOverviewChart";
import LeadsStatusChart from "../components/LeadsStatusChart";

import RecentLeads from "../components/RecentLeads";
import LatestActivity from "../components/LatestActivity";

import QuickActions from "../components/QuickActions";
import TodaysMeetings from "../components/TodaysMeetings";

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
    changeText: "from last 30 days",
    icon: UserPlus,
    iconColor: "green",
  },
  {
    title: "Contacted",
    value: "14",
    change: "+8%",
    changeText: "from last 30 days",
    icon: Phone,
    iconColor: "blue",
    iconSize: 15,
  },
  {
    title: "Meetings",
    value: "8",
    change: "+5%",
    changeText: "from last 30 days",
    icon: Users,
    iconColor: "purple",
    iconSize: 15,
  },
  {
    title: "Closed (Won)",
    value: "3",
    change: "+7%",
    changeText: "from last 30 days",
    icon: CheckCircle2,
    iconColor: "green",
  },
];

function Dashboard() {
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
        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/[0.05]">
          <CalendarDays size={16} />
          <span>Jul 1 – Jul 31, 2025</span>
        </button>
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
