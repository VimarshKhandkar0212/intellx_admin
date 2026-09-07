import { CalendarDays, Clock, Video } from "lucide-react";

function TodaysMeetings() {
  const meetings = [
    {
      time: "10:30 AM",
      name: "Rahul Verma",
      company: "ABC Pvt Ltd",
      type: "Discovery Call",
    },
    {
      time: "01:00 PM",
      name: "Neha Sharma",
      company: "TechNova Solutions",
      type: "Product Demo",
    },
    {
      time: "04:30 PM",
      name: "Amit Kumar",
      company: "Sunrise Technologies",
      type: "Follow-up Meeting",
    },
  ];

  return (
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
            Today's Meetings
          </h2>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Your upcoming meetings
          </p>
        </div>

        <CalendarDays size={17} className="text-purple-400" strokeWidth={1.8} />
      </div>

      <div className="space-y-2">
        {meetings.map((meeting) => (
          <div
            key={`${meeting.time}-${meeting.name}`}
            className="flex items-center gap-3 rounded-xl border p-3"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
              <Video size={15} strokeWidth={1.8} />
            </div>

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

            <div className="flex shrink-0 items-center gap-1 text-[10px] text-purple-400">
              <Clock size={11} />
              {meeting.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaysMeetings;
