import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Video,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const meetings = [
  {
    id: 1,
    time: "10:30 AM",
    name: "Rahul Verma",
    company: "ABC Pvt Ltd",
    type: "Discovery Call",
    status: "Upcoming",
  },
  {
    id: 2,
    time: "01:00 PM",
    name: "Neha Sharma",
    company: "TechNova Solutions",
    type: "Product Demo",
    status: "Upcoming",
  },
  {
    id: 3,
    time: "04:30 PM",
    name: "Amit Kumar",
    company: "Sunrise Technologies",
    type: "Follow-up Meeting",
    status: "Upcoming",
  },
  {
    id: 4,
    time: "09:00 AM",
    name: "Priya Singh",
    company: "FutureX",
    type: "Proposal Discussion",
    status: "Completed",
  },
];

function TodaysMeetings() {
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const filteredMeetings =
    selectedFilter === "All"
      ? meetings
      : meetings.filter((meeting) => meeting.status === selectedFilter);

  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Today's Meetings
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Your meetings for today
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/calendar")}
          className="flex items-center gap-1 text-xs font-medium text-purple-400 transition hover:text-purple-300"
        >
          Calendar
          <ChevronRight size={13} />
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 flex gap-2">
        {["All", "Upcoming", "Completed"].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelectedFilter(filter)}
            className={`rounded-lg px-3 py-1.5 text-[10px] font-medium transition ${
              selectedFilter === filter
                ? "bg-purple-500/15 text-purple-400"
                : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Meetings */}
      <div className="space-y-2">
        {filteredMeetings.length > 0 ? (
          filteredMeetings.map((meeting) => {
            const isSelected = selectedMeeting === meeting.id;
            const isCompleted = meeting.status === "Completed";

            return (
              <button
                key={meeting.id}
                type="button"
                onClick={() =>
                  setSelectedMeeting(isSelected ? null : meeting.id)
                }
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                  isSelected
                    ? "border-purple-500/30 bg-purple-500/[0.05]"
                    : "hover:bg-white/[0.02]"
                }`}
                style={{
                  backgroundColor: isSelected ? undefined : "var(--input-bg)",
                  borderColor: isSelected
                    ? undefined
                    : "var(--border-secondary)",
                }}
              >
                {/* Icon */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isCompleted
                      ? "bg-green-500/10 text-green-400"
                      : "bg-purple-500/15 text-purple-400"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={15} strokeWidth={1.8} />
                  ) : (
                    <Video size={15} strokeWidth={1.8} />
                  )}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <p
                    className="truncate text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {meeting.name}
                  </p>

                  <p
                    className="mt-0.5 truncate text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {meeting.company} · {meeting.type}
                  </p>
                </div>

                {/* Time + Status */}
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <div
                    className={`flex items-center gap-1 text-[10px] ${
                      isCompleted ? "text-green-400" : "text-purple-400"
                    }`}
                  >
                    <Clock size={11} />
                    {meeting.time}
                  </div>

                  <span
                    className={`text-[9px] ${
                      isCompleted ? "text-green-400" : "text-gray-500"
                    }`}
                  >
                    {meeting.status}
                  </span>
                </div>
              </button>
            );
          })
        ) : (
          <div
            className="rounded-xl border border-dashed py-8 text-center text-xs"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-muted)",
            }}
          >
            No meetings found.
          </div>
        )}
      </div>

      {/* Selected Meeting Details */}
      {selectedMeeting && (
        <div
          className="mt-3 rounded-xl border p-3"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--border-secondary)",
          }}
        >
          {(() => {
            const meeting = meetings.find(
              (item) => item.id === selectedMeeting,
            );

            if (!meeting) return null;

            return (
              <>
                <p
                  className="text-[10px] font-medium uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Selected Meeting
                </p>

                <p
                  className="mt-1 text-xs font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {meeting.type} with {meeting.name}
                </p>

                <p
                  className="mt-1 text-[10px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {meeting.company} · {meeting.time}
                </p>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}

export default TodaysMeetings;
