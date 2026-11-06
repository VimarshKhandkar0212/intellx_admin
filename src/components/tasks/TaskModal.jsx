import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  title: "",
  description: "",
  category: "Follow-up",
  assignedTo: "Admin",
  priority: "Medium",
  status: "Pending",
  dueDate: "",
  dueTime: "",
};

export default function TaskModal({ isOpen, onClose, onSave, editingTask }) {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        category: editingTask.category || "Follow-up",
        assignedTo: editingTask.assignedTo || "Admin",
        priority: editingTask.priority || "Medium",
        status: editingTask.status || "Pending",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.includes("-")
            ? editingTask.dueDate
            : ""
          : "",
        dueTime: editingTask.dueTime || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [editingTask, isOpen]);
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    onSave({
      ...form,
      id: editingTask ? editingTask.id : undefined,
      title: form.title.trim(),
      description: form.description.trim(),
      dueDate: form.dueDate || editingTask?.dueDate || "",
      dueTime: form.dueTime || "",
    });

    setForm(initialForm);
    onClose();
  };

  const inputClass =
    "w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-purple-500";
  const inputStyle = {
    backgroundColor: "var(--input-bg)",
    borderColor: "var(--border-secondary)",
    color: "var(--text-primary)",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-xl overflow-y-auto rounded-2xl border p-6 shadow-2xl"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
          maxHeight: "90vh",
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {editingTask ? "Edit Task" : "Create Task"}
            </h2>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {editingTask
                ? "Update the details of your task."
                : "Add a new task to your workspace."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-[var(--bg-card-hover)]"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Task Title *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              autoFocus
              placeholder="e.g. Follow up with a client"
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe the task..."
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              >
                <option>Follow-up</option>
                <option>Sales</option>
                <option>Meeting</option>
                <option>Reporting</option>
                <option>Research</option>
                <option>Technical</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Assigned To
              </label>
              <input
                name="assignedTo"
                value={form.assignedTo}
                onChange={handleChange}
                placeholder="Assignee"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Priority
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Overdue</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Due Time
              </label>

              <input
                type="time"
                name="dueTime"
                value={form.dueTime}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              ></input>
            </div>
          </div>

          <div
            className="flex justify-end gap-3 border-t pt-4"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-4 py-2.5 text-sm font-medium"
              style={{
                borderColor: "var(--border-secondary)",
                color: "var(--text-secondary)",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-500"
            >
              {editingTask ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
