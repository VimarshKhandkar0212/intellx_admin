import { useState, useEffect } from "react";

import {
  CheckSquare,
  CheckCircle2,
  Clock3,
  AlertCircle,
  ListTodo,
  Plus,
  Trash2,
} from "lucide-react";

import TaskStats from "../components/tasks/TaskStats";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskTabs from "../components/tasks/TaskTabs";
import TasksTable from "../components/tasks/TasksTable";
import {
  TaskCompletionOverview,
  PrioritySummary,
} from "../components/tasks/TaskAnalytics";
import UpcomingDeadlines from "../components/tasks/UpcomingDeadlines";
import TaskCalendar from "../components/tasks/TaskCalendar";
import TodaySchedule from "../components/tasks/TodaySchedule";
import TaskPagination from "../components/tasks/TaskPagination";
import TaskModal from "../components/tasks/TaskModal";
import { preconnect } from "react-dom";

const getTaskStatus = (task) => {
  if (task.status === "Completed") return "Completed";

  if (!task.dueDate) return task.status;

  const now = new Date();
  const dueDate = new Date(`${task.dueDate}T${task.dueTime || "23:59"}:00`);

  if (now > dueDate) {
    return "Overdue";
  }

  return task.status === "Overdue" ? "Pending" : task.status;
};

function Tasks() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("All Tasks");
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Follow up with Rahul Verma",
      description: "Discuss enterprise solution requirements",
      category: "Follow-up",
      assignedTo: "Admin",
      priority: "High",
      status: "Completed",
      dueDate: "2026-11-02",
      dueTime: "11:00",
    },
    {
      id: 2,
      title: "Send proposal to Priya Singh",
      description: "Prepare and send the updated proposal",
      category: "Sales",
      assignedTo: "Admin",
      priority: "High",
      status: "Pending",
      dueDate: "2026-11-04",
      dueTime: "12:00",
    },
    {
      id: 3,
      title: "Product demo for Neha Sharma",
      description: "Prepare demo presentation and meeting link",
      category: "Meeting",
      assignedTo: "Admin",
      priority: "Medium",
      status: "In Progress",
      dueDate: "",
      dueTime: "15:56",
    },
    {
      id: 4,
      title: "Update lead information",
      description: "Review and update missing lead details",
      category: "Other",
      assignedTo: "Admin",
      priority: "Low",
      status: "Pending",
      dueDate: "2026-11-04",
      dueTime: "09:00",
    },
    {
      id: 5,
      title: "Review closed leads",
      description: "Review recently converted leads",
      category: "Other",
      assignedTo: "Admin",
      priority: "Medium",
      status: "Completed",
      dueDate: "2026-11-05",
      dueTime: "10:00",
    },
    {
      id: 6,
      title: "Prepare weekly lead report",
      description: "Compile weekly lead performance metrics",
      category: "Reporting",
      assignedTo: "Admin",
      priority: "Low",
      status: "Completed",
      dueDate: "2026-11-01",
      dueTime: "11:00",
    },
    {
      id: 7,
      title: "Contact pending leads",
      description: "Reach out to leads awaiting first contact",
      category: "Follow-up",
      assignedTo: "Admin",
      priority: "High",
      status: "Overdue",
      dueDate: "2026-11-02",
      dueTime: "17:00",
    },
    {
      id: 8,
      title: "Second meeting with Mr. Arjun",
      description: "Talk about the budget and get final approval",
      category: "Meeting",
      assignedTo: "Admin",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-11-05",
      dueTime: "13:00",
    },
  ]);

  useEffect(() => {
    const updateOverdueTasks = () => {
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          const updatedStatus = getTaskStatus(task);

          if (updatedStatus !== task.status) {
            return {
              ...task,
              status: updatedStatus,
            };
          }

          return task;
        });
      });
    };

    updateOverdueTasks();

    const interval = setInterval(updateOverdueTasks, 30000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      change: "+12%",
      changeText: "from last month",
      icon: ListTodo,
      iconColor: "purple",
    },
    {
      title: "Completed",
      value: tasks.filter((task) => task.status === "Completed").length,
      change: "+15%",
      changeText: "from last month",
      icon: CheckCircle2,
      iconColor: "green",
    },
    {
      title: "In Progress",
      value: tasks.filter((task) => task.status === "In Progress").length,
      change: "8%",
      changeText: "from last month",
      icon: Clock3,
      iconColor: "blue",
    },
    {
      title: "Pending",
      value: tasks.filter((task) => task.status === "Pending").length,
      change: "-4%",
      changeText: "from last month",
      icon: CheckSquare,
      iconColor: "cyan",
    },
    {
      title: "Overdue",
      value: tasks.filter((task) => task.status === "Overdue").length,
      change: "-2%",
      changeText: "from last month",
      icon: AlertCircle,
      iconColor: "orange",
    },
  ];

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsTaskModalOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) return;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    setSelectedTaskIds((prev) => prev.filter((id) => id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setSelectedTaskIds((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId],
    );
  };

  const handleToggleAll = (visibleTaskIds, checked) => {
    setSelectedTaskIds((prev) => {
      if (checked) {
        return [...new Set([...prev, ...visibleTaskIds])];
      }

      return prev.filter((id) => !visibleTaskIds.includes(id));
    });
  };

  const handleBulkDelete = () => {
    if (selectedTaskIds.length === 0) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${selectedTaskIds.length} selected tasks?`,
    );

    if (!confirmed) return;
    setTasks((prev) =>
      prev.filter((task) => !selectedTaskIds.includes(task.id)),
    );

    setSelectedTaskIds([]);
  };

  const handleCreateTask = (taskData) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...taskData, id: task.id }
            : task,
        ),
      );

      setEditingTask(null);
      return;
    }

    const newTask = {
      ...taskData,
      id: Date.now(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    const matchesTab =
      activeTab === "All Tasks" ||
      (activeTab === "My Tasks" && task.assignedTo === "Admin") ||
      task.status === activeTab;

    return matchesSearch && matchesStatus && matchesPriority && matchesTab;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, priorityFilter, activeTab]);

  const totalTasks = filteredTasks.length;
  const totalPages = Math.ceil(totalTasks / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalTasks);
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
    }
  }, [currentPage, totalPages]);

  const completionStatuses = [
    {
      label: "Completed",
      status: "Completed",
      className: "bg-green-500",
      textClass: "text-green-400",
    },
    {
      label: "In Progress",
      status: "In Progress",
      className: "bg-blue-500",
      textClass: "text-blue-400",
    },
    {
      label: "Pending",
      status: "Pending",
      className: "bg-yellow-500",
      textClass: "text-yellow-400",
    },
    {
      label: "Overdue",
      status: "Overdue",
      className: "bg-red-500",
      textClass: "text-red-400",
    },
  ];

  const completionData = completionStatuses.map((item) => {
    const value = tasks.filter((task) => task.status === item.status).length;
    return {
      ...item,
      value,
      percentage: tasks.length ? Math.round((value / tasks.length) * 100) : 0,
    };
  });

  const priorityLevels = [
    {
      label: "High Priority",
      priority: "High",
      className: "bg-red-500",
      textClass: "text-red-400",
    },
    {
      label: "Medium Priority",
      priority: "Medium",
      className: "bg-orange-500",
      textClass: "text-orange-400",
    },
    {
      label: "Low Priority",
      priority: "Low",
      className: "bg-green-500",
      textClass: "text-green-400",
    },
  ];

  const priorityData = priorityLevels.map((item) => {
    const value = tasks.filter(
      (task) => task.priority === item.priority,
    ).length;

    return {
      ...item,
      value,
      percentage: tasks.length ? Math.round((value / tasks.length) * 100) : 0,
    };
  });

  const upcomingDeadlines = tasks
    .filter((task) => task.dueDate && task.status !== "Completed")
    .map((task) => ({
      ...task,
      dueDateObject: new Date(`${task.dueDate}T00:00:00`),
    }))
    .sort((a, b) => {
      const dateDifference = a.dueDateObject - b.dueDateObject;

      if (dateDifference !== 0) return dateDifference;

      return (a.dueTime || "23:59").localeCompare(b.dueTime || "23:59");
    })
    .slice(0, 4)
    .map((task) => ({
      title: task.title,
      time: task.dueDate,
      dueTime: task.dueTime || "",
      priority: task.priority,
    }));

  const today = new Date();

  const todayKey = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const todaySchedule = tasks
    .filter((task) => task.dueDate === todayKey)
    .sort((a, b) => (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99"))
    .map((task) => ({
      title: task.title,
      time: task.dueTime
        ? new Date(`2000-01-01T${task.dueTime}`).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        : "All day",
      type: task.category,
      status: task.status,
    }));

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

        <button
          onClick={() => setIsTaskModalOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
        >
          <Plus size={16} />
          Create Task
        </button>
      </div>

      {/* Task Overview */}
      <TaskStats stats={stats} />

      {/* Task Workspace */}
      <div
        className="rounded-2xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        {/* Search & Filters */}
        <TaskFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          onClear={() => {
            setSearchTerm("");
            setStatusFilter("All");
            setPriorityFilter("All");
          }}
        />

        {/* Task Tabs */}
        <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Bulk Actions */}
        {selectedTaskIds.length > 0 && (
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3"
            style={{ borderColor: "var(--border-secondary)" }}
          >
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {selectedTaskIds.length} task(s) selected
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedTaskIds([])}
                className="rounded-lg border px-3 py-2 text-xs"
                style={{
                  borderColor: "var(--border-secondary)",
                  color: "var(--text-secondary)",
                }}
              >
                Clear Selection
              </button>
              <button
                type="button"
                onClick={handleBulkDelete}
                className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/20"
              >
                <Trash2 size={14} />
                Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Task Table */}
        <TasksTable
          tasks={paginatedTasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          selectedTaskIds={selectedTaskIds}
          onToggleTask={handleToggleTask}
          onToggleAll={handleToggleAll}
          onStatusChange={handleStatusChange}
        />

        {/* Task Table Footer */}
        <TaskPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalTasks={totalTasks}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={setCurrentPage}
        />

        {/* Analytics & Insights */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Task Completion Overview */}
          <TaskCompletionOverview completionData={completionData} />

          {/* Priority Summary */}
          <PrioritySummary
            priorityData={priorityData}
            totalTasks={tasks.length}
          />

          {/* Upcoming Deadlines */}
          <UpcomingDeadlines tasks={upcomingDeadlines} />
        </div>

        {/* Calendar & Today's Schedule */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mini Calendar */}
          <TaskCalendar tasks={tasks} />

          {/* Today's Schedule */}
          <TodaySchedule schedule={todaySchedule} />
        </div>
      </div>

      {/* Create Task Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleCreateTask}
        editingTask={editingTask}
      />
    </div>
  );
}

export default Tasks;
