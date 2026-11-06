import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const parseDueDate = (value) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;

  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

export default function TaskCalendar({ tasks }) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() =>
    getDateKey(new Date()),
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthName = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Monday-first calendar
  const startingDay = (firstDay.getDay() + 6) % 7;

  const calendarDays = [
    ...Array.from({ length: startingDay }, (_, i) => ({
      key: `blank-${i}`,
      blank: true,
    })),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      const key = getDateKey(date);

      return {
        key,
        date,
        day: i + 1,
      };
    }),
  ];

  const activeTasks = tasks
    .filter((task) => task.status !== "Completed")
    .map((task) => ({
      ...task,
      parsedDate: parseDueDate(task.dueDate),
    }))
    .filter((task) => task.parsedDate);

  const selectedTasks = activeTasks.filter(
    (task) => getDateKey(task.parsedDate) === selectedDate,
  );

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const dueToday = activeTasks.filter(
    (task) => getDateKey(task.parsedDate) === getDateKey(today),
  ).length;

  const dueThisWeek = activeTasks.filter(
    (task) => task.parsedDate >= startOfWeek && task.parsedDate <= endOfWeek,
  ).length;

  const overdue = activeTasks.filter((task) => task.parsedDate < today).length;

  const changeMonth = (amount) => {
    setViewDate(new Date(year, month + amount, 1));
  };

  return (
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

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            {monthName}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="rounded-lg p-2 transition hover:bg-[var(--bg-card-hover)]"
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              setViewDate(new Date());
              setSelectedDate(getDateKey(new Date()));
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-secondary)",
              backgroundColor: "var(--input-bg)",
            }}
            aria-label="Go to current month"
          >
            <CalendarDays size={16} />
          </button>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="rounded-lg p-2 transition hover:bg-[var(--bg-card-hover)]"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <p
            key={day}
            className="mb-2 text-center text-[10px] font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            {day}
          </p>
        ))}

        {calendarDays.map((item) => {
          if (item.blank) {
            return <div key={item.key} />;
          }

          const isSelected = selectedDate === item.key;
          const isToday = getDateKey(today) === item.key;

          const hasTasks = activeTasks.some(
            (task) => getDateKey(task.parsedDate) === item.key,
          );

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setSelectedDate(item.key)}
              className={`relative mx-auto flex h-9 w-9 flex-col items-center justify-center rounded-xl text-xs font-medium transition ${
                isSelected ? "bg-purple-500 text-white" : ""
              }`}
              style={
                isSelected
                  ? undefined
                  : {
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-secondary)",
                      outline: isToday ? "1px solid #a855f7" : "none",
                    }
              }
            >
              {item.day}

              {hasTasks && (
                <span
                  className={`absolute bottom-1 h-1 w-1 rounded-full ${
                    isSelected ? "bg-white" : "bg-purple-400"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        className="mt-4 border-t pt-4"
        style={{ borderColor: "var(--border-secondary)" }}
      >
        <p
          className="mb-2 text-xs font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Tasks on{" "}
          {new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        {selectedTasks.length > 0 ? (
          <div className="max-h-24 space-y-2 overflow-y-auto">
            {selectedTasks.map((task) => (
              <div
                key={task.id}
                className="rounded-lg px-3 py-2 text-xs"
                style={{
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-secondary)",
                }}
              >
                {task.title}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            No tasks scheduled for this date.
          </p>
        )}
      </div>

      <div
        className="mt-5 grid grid-cols-3 gap-3 border-t pt-5"
        style={{ borderColor: "var(--border-secondary)" }}
      >
        {[
          { value: dueToday, label: "Due Today" },
          { value: dueThisWeek, label: "This Week" },
          { value: overdue, label: "Overdue" },
        ].map((item) => (
          <div key={item.label}>
            <p
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {item.value}
            </p>

            <p
              className="mt-1 text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
