import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TaskPagination({
  currentPage,
  totalPages,
  totalTasks,
  startIndex,
  endIndex,
  onPageChange,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t px-4 py-3"
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
        Showing {totalTasks === 0 ? 0 : startIndex + 1}–{endIndex} of{" "}
        {totalTasks} tasks
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            borderColor: "var(--border-secondary)",
            color: "var(--text-muted)",
          }}
        >
          <ChevronLeft size={14} />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`rounded-lg px-2.5 py-1.5 text-xs ${
              currentPage === page
                ? "bg-purple-500/15 font-medium text-purple-400"
                : ""
            }`}
            style={
              currentPage !== page ? { color: "var(--text-muted)" } : undefined
            }
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            borderColor: "var(--border-secondary)",
            color: "var(--text-muted)",
          }}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
