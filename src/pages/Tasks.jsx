import {
  CheckSquare,
  CheckCircle2,
  Clock3,
  AlertCircle,
  ListTodo,
  Plus,
  Search,
  CalendarDays,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  UserCircle2,
  Flag,
  BarChart3,
  CircleCheck,
  CalendarClock,
} from "lucide-react";

function Tasks() {
  const stats = [
    {
      title: "Total Tasks",
      value: "42",
      change: "+12%",
      changeText: "from last month",
      icon: ListTodo,
      iconColor: "purple",
    },
    {
      title: "Completed",
      value: "18",
      change: "+15%",
      changeText: "from last month",
      icon: CheckCircle2,
      iconColor: "green",
    },
    {
      title: "In Progress",
      value: "11",
      change: "+8%",
      changeText: "from last month",
      icon: Clock3,
      iconColor: "blue",
    },
    {
      title: "Pending",
      value: "9",
      change: "-4%",
      changeText: "from last month",
      icon: CheckSquare,
      iconColor: "cyan",
    },
    {
      title: "Overdue",
      value: "4",
      change: "-2%",
      changeText: "from last month",
      icon: AlertCircle,
      iconColor: "orange",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Follow up with Rahul Verma",
      description: "Discuss enterprise solution requirements",
      category: "Follow-up",
      assignedTo: "Admin",
      priority: "High",
      status: "In Progress",
      dueDate: "Today, 04:00 PM",
    },
    {
      id: 2,
      title: "Send proposal to Priya Singh",
      description: "Prepare and send the updated proposal",
      category: "Sales",
      assignedTo: "Admin",
      priority: "High",
      status: "Pending",
      dueDate: "Today, 06:00 PM",
    },
    {
      id: 3,
      title: "Product demo for Neha Sharma",
      description: "Prepare demo presentation and meeting link",
      category: "Meeting",
      assignedTo: "Admin",
      priority: "Medium",
      status: "In Progress",
      dueDate: "Tomorrow, 11:00 AM",
    },
    {
      id: 4,
      title: "Update lead information",
      description: "Review and update missing lead details",
      category: "Admin",
      assignedTo: "Admin",
      priority: "Low",
      status: "Pending",
      dueDate: "Tomorrow, 03:00 PM",
    },
    {
      id: 5,
      title: "Review closed leads",
      description: "Review recently converted leads",
      category: "Review",
      assignedTo: "Admin",
      priority: "Medium",
      status: "Completed",
      dueDate: "Jul 31, 2025",
    },
    {
      id: 6,
      title: "Prepare weekly lead report",
      description: "Compile weekly lead performance metrics",
      category: "Reports",
      assignedTo: "Admin",
      priority: "Low",
      status: "Completed",
      dueDate: "Jul 31, 2025",
    },
    {
      id: 7,
      title: "Contact pending leads",
      description: "Reach out to leads awaiting first contact",
      category: "Follow-up",
      assignedTo: "Admin",
      priority: "High",
      status: "Overdue",
      dueDate: "Jul 30, 2025",
    },
  ];

  const completionData = [
    {
      label: "Completed",
      value: 18,
      percentage: 43,
      className: "bg-green-500",
      textClass: "text-green-400",
    },
    {
      label: "In Progress",
      value: 11,
      percentage: 26,
      className: "bg-blue-500",
      textClass: "text-blue-400",
    },
    {
      label: "Pending",
      value: 9,
      percentage: 21,
      className: "bg-yellow-500",
      textClass: "text-yellow-400",
    },
    {
      label: "Overdue",
      value: 4,
      percentage: 10,
      className: "bg-red-500",
      textClass: "text-red-400",
    },
  ];

  const priorityData = [
    {
      label: "High Priority",
      value: 12,
      percentage: 29,
      className: "bg-red-500",
      textClass: "text-red-400",
    },
    {
      label: "Medium Priority",
      value: 17,
      percentage: 40,
      className: "bg-orange-500",
      textClass: "text-orange-400",
    },
    {
      label: "Low Priority",
      value: 13,
      percentage: 31,
      className: "bg-green-500",
      textClass: "text-green-400",
    },
  ];

  const upcomingDeadlines = [
    {
      title: "Follow up with Rahul Verma",
      time: "Today, 04:00 PM",
      priority: "High",
    },
    {
      title: "Send proposal to Priya Singh",
      time: "Today, 06:00 PM",
      priority: "High",
    },
    {
      title: "Product demo for Neha Sharma",
      time: "Tomorrow, 11:00 AM",
      priority: "Medium",
    },
    {
      title: "Update lead information",
      time: "Tomorrow, 03:00 PM",
      priority: "Low",
    },
  ];

  const calendarDays = [
    { day: "Mon", date: 28 },
    { day: "Tue", date: 29 },
    { day: "Wed", date: 30 },
    { day: "Thu", date: 31, active: true },
    { day: "Fri", date: 1 },
    { day: "Sat", date: 2 },
    { day: "Sun", date: 3 },
  ];

  const todaySchedule = [
    {
      time: "04:00 PM",
      title: "Follow up with Rahul Verma",
      type: "Follow-up",
      status: "In Progress",
    },
    {
      time: "06:00 PM",
      title: "Send proposal to Priya Singh",
      type: "Sales",
      status: "Pending",
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
            Tasks
          </h1>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage your tasks and stay on top of your work.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500">
          <Plus size={16} />
          Create Task
        </button>
      </div>

      {/* Task Overview */}
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
                <span
                  className={`font-medium ${
                    stat.change.startsWith("-")
                      ? "text-green-400"
                      : "text-green-400"
                  }`}
                >
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

      {/* Task Workspace */}
      <div
        className="rounded-2xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        {/* Search & Filters */}
        <div
          className="flex flex-wrap items-center gap-3 border-b p-4"
          style={{
            borderColor: "var(--border-secondary)",
          }}
        >
          {/* Search */}
          <div className="relative min-w-[240px] flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="h-10 w-full rounded-xl border pl-9 pr-3 text-sm outline-none transition focus:border-purple-500/50"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
              }}
            />
          </div>

          {/* Status */}
          <select
            className="h-10 rounded-xl border px-3 text-xs outline-none"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <option>Status: All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Overdue</option>
          </select>

          {/* Priority */}
          <select
            className="h-10 rounded-xl border px-3 text-xs outline-none"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <option>Priority: All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* Due Date */}
          <button
            className="flex h-10 items-center gap-2 rounded-xl border px-3 text-xs"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <CalendarDays size={14} />
            Due Date
          </button>

          {/* More Filters */}
          <button
            className="flex h-10 items-center gap-2 rounded-xl border px-3 text-xs"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <Filter size={14} />
            Filters
          </button>

          {/* Clear */}
          <button className="h-10 rounded-xl px-3 text-xs font-medium text-purple-400 transition hover:bg-purple-500/10">
            Clear
          </button>
        </div>

        {/* Task Tabs */}
        <div
          className="flex items-center gap-1 overflow-x-auto border-b px-4 pt-3"
          style={{
            borderColor: "var(--border-secondary)",
          }}
        >
          {[
            "All Tasks",
            "My Tasks",
            "Pending",
            "In Progress",
            "Completed",
            "Overdue",
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

        {/* Task Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr
                className="border-b"
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
                  Task
                </th>

                <th
                  className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Category
                </th>

                <th
                  className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Assigned To
                </th>

                <th
                  className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Priority
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
                  Due Date
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
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b transition-colors hover:bg-white/[0.02]"
                  style={{
                    borderColor: "var(--border-secondary)",
                  }}
                >
                  {/* Checkbox */}
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded accent-purple-500"
                    />
                  </td>

                  {/* Task */}
                  <td className="max-w-[300px] px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                        <ListTodo size={15} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="truncate text-xs font-medium"
                          style={{
                            color: "var(--text-primary)",
                          }}
                        >
                          {task.title}
                        </p>

                        <p
                          className="mt-1 truncate text-[10px]"
                          style={{
                            color: "var(--text-muted)",
                          }}
                        >
                          {task.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-4">
                    <span
                      className="rounded-lg px-2.5 py-1 text-[10px]"
                      style={{
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {task.category}
                    </span>
                  </td>

                  {/* Assigned To */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                        <UserCircle2 size={15} />
                      </div>

                      <span
                        className="text-xs"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {task.assignedTo}
                      </span>
                    </div>
                  </td>

                  {/* Priority */}
                  <td className="px-4 py-4">
                    <PriorityBadge priority={task.priority} />
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <TaskStatusBadge status={task.status} />
                  </td>

                  {/* Due Date */}
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays
                        size={13}
                        style={{
                          color:
                            task.status === "Overdue"
                              ? "#ef4444"
                              : "var(--text-muted)",
                        }}
                      />

                      <span
                        className={`text-xs ${
                          task.status === "Overdue"
                            ? "font-medium text-red-400"
                            : ""
                        }`}
                        style={
                          task.status !== "Overdue"
                            ? {
                                color: "var(--text-secondary)",
                              }
                            : undefined
                        }
                      >
                        {task.dueDate}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-1">
                      <button
                        title="Edit"
                        className="rounded-lg p-1.5 transition hover:bg-blue-500/10 hover:text-blue-400"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        <Pencil size={14} />
                      </button>

                      <button
                        title="Delete"
                        className="rounded-lg p-1.5 transition hover:bg-red-500/10 hover:text-red-400"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        <Trash2 size={14} />
                      </button>

                      <button
                        title="More"
                        className="rounded-lg p-1.5 transition hover:bg-white/5"
                        style={{
                          color: "var(--text-muted)",
                        }}
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

        {/* Analytics & Insights */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Task Completion Overview */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Task Completion Overview
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Current task distribution
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <BarChart3 size={17} />
              </div>
            </div>

            <div className="space-y-4">
              {completionData.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${item.className}`}
                      />

                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold ${item.textClass}`}
                      >
                        {item.value}
                      </span>

                      <span
                        className="text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full ${item.className}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Summary */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Priority Summary
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tasks grouped by priority
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <Flag size={17} />
              </div>
            </div>

            <div className="space-y-5">
              {priorityData.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.label}
                    </span>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold ${item.textClass}`}
                      >
                        {item.value}
                      </span>

                      <span
                        className="text-[10px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full ${item.className}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 flex items-center gap-2 rounded-xl border px-3 py-3"
              style={{
                borderColor: "var(--border-secondary)",
                backgroundColor: "var(--input-bg)",
              }}
            >
              <CircleCheck size={15} className="text-green-400" />

              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                42 total tasks across all priorities
              </span>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Upcoming Deadlines
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tasks that need attention
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <CalendarClock size={17} />
              </div>
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((task) => (
                <div
                  key={task.title}
                  className="rounded-xl border p-3 transition-colors"
                  style={{
                    borderColor: "var(--border-secondary)",
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <CalendarDays size={13} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="truncate text-xs font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {task.title}
                      </p>

                      <div className="mt-1 flex items-center justify-between gap-2">
                        <span
                          className="text-[10px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {task.time}
                        </span>

                        <PriorityBadge priority={task.priority} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar & Today's Schedule */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mini Calendar */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Task Calendar
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  July 2025
                </p>
              </div>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-xl border transition-colors"
                style={{
                  borderColor: "var(--border-secondary)",
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--input-bg)",
                }}
              >
                <CalendarDays size={16} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((item) => (
                <div key={item.date} className="text-center">
                  <p
                    className="mb-2 text-[10px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.day}
                  </p>

                  <div
                    className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl text-xs font-medium ${
                      item.active ? "bg-purple-500 text-white" : ""
                    }`}
                    style={
                      item.active
                        ? undefined
                        : {
                            backgroundColor: "var(--input-bg)",
                            color: "var(--text-secondary)",
                          }
                    }
                  >
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 grid grid-cols-3 gap-3 border-t pt-5"
              style={{ borderColor: "var(--border-secondary)" }}
            >
              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  4
                </p>
                <p
                  className="mt-1 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Due Today
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  6
                </p>
                <p
                  className="mt-1 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  This Week
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  4
                </p>
                <p
                  className="mt-1 text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Overdue
                </p>
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Today's Schedule
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tasks scheduled for today
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Clock3 size={17} />
              </div>
            </div>

            <div className="space-y-3">
              {todaySchedule.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-xl border p-4"
                  style={{
                    borderColor: "var(--border-secondary)",
                    backgroundColor: "var(--input-bg)",
                  }}
                >
                  <div className="w-16 shrink-0">
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.time}
                    </p>
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate text-xs font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </p>

                    <p
                      className="mt-1 text-[10px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.type}
                    </p>
                  </div>

                  <TaskStatusBadge status={item.status} />
                </div>
              ))}
            </div>

            <div
              className="mt-4 flex items-center gap-2 rounded-xl border px-3 py-3"
              style={{
                borderColor: "var(--border-secondary)",
                backgroundColor: "var(--input-bg)",
              }}
            >
              <AlertCircle size={14} className="text-orange-400" />

              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                2 important tasks are scheduled for today.
              </span>
            </div>
          </div>
        </div>

        {/* Task Table Footer */}
        <div
          className="flex items-center justify-between border-t px-4 py-3"
          style={{
            borderColor: "var(--border-secondary)",
          }}
        >
          <p
            className="text-xs"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Showing 1–7 of 42 tasks
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
              style={{
                color: "var(--text-muted)",
              }}
            >
              2
            </button>

            <button
              className="rounded-lg px-2.5 py-1.5 text-xs"
              style={{
                color: "var(--text-muted)",
              }}
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
    </div>
  );
}

function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-500/10 text-red-400",
    Medium: "bg-orange-500/10 text-orange-400",
    Low: "bg-green-500/10 text-green-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-medium ${
        styles[priority] || "bg-gray-500/10 text-gray-400"
      }`}
    >
      <Flag size={10} />
      {priority}
    </span>
  );
}

function TaskStatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-500/10 text-yellow-400",
    "In Progress": "bg-blue-500/10 text-blue-400",
    Completed: "bg-green-500/10 text-green-400",
    Overdue: "bg-red-500/10 text-red-400",
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

export default Tasks;
