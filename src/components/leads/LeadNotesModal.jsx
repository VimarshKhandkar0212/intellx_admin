import { useEffect, useState } from "react";
import { X, NotebookPen, Plus } from "lucide-react";


export default function LeadNotesModal({ lead, onClose, onSave }) {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState(lead.notes || []);
  const [actionMode, setActionMode] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    setNotes(lead.notes || []);
    setNoteText("");
  }, [lead.id, lead.notes]);

  
    const handleAddNote = () => {
        const text = noteText.trim();
        if (!text) return;

        const newNote = {
            id: Date.now(),
            text,
            createdAt: new Date().toLocaleString(),
        };

        const updatedNotes = [...notes, newNote];

        setNotes(updatedNotes);
        onSave({ ...lead, notes: updatedNotes });
        setNoteText("");
        setSelectedNoteId(null);
        setActionMode(null);
    };

    const handleEditNote = () => {
        if (actionMode !== "edit") {
            setActionMode("edit");
            setSelectedNoteId(null);
            setNoteText("");
            return;
        }

        if (selectedNoteId === null || !noteText.trim()) return;

        const updatedNotes = notes.map((note) =>
            note.id === selectedNoteId
            ? { ...note, text: noteText.trim(), updatedAt: new Date().toLocaleString() }
            : note
        );

        setNotes(updatedNotes);
        onSave({ ...lead, notes: updatedNotes });
        setNoteText("");
        setSelectedNoteId(null);
        setActionMode(null);
    };

    const handleDeleteNote = () => {
        if (actionMode !== "delete") {
            setActionMode("delete");
            setSelectedNoteId(null);
            setNoteText("");
            return;
        }

        if (selectedNoteId === null) return;

        const confirmed = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmed) return;

        const updatedNotes = notes.filter(
            (note) => note.id !== selectedNoteId
        );

        setNotes(updatedNotes);
        onSave({ ...lead, notes: updatedNotes });
        setNoteText("");
        setSelectedNoteId(null);
        setActionMode(null);
    };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        <div
          className="flex items-center justify-between border-b p-5"
          style={{ borderColor: "var(--border-secondary)" }}
        >
          <div>
            <h2
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Take Notes
            </h2>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {lead.name} · {lead.company}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-white/10"
            style={{ color: "var(--text-muted)" }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              New note
            </label>

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write a follow-up update, meeting summary..."
              rows={4}
              className="w-full resize-y rounded-xl border p-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
              }}
            />
          </div>

          
        <div className="flex flex-wrap gap-2">
            <button
                type="button"
                onClick={handleAddNote}
                disabled={!noteText.trim() || actionMode !== null}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-white transition disabled:opacity-50"
                style={{ backgroundColor: "#7c3aed" }}
            >
                Save Note
            </button>

            <button
                type="button"
                onClick={handleEditNote}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-white transition"
                style={{ backgroundColor: "#16a34a" }}
            >
                {actionMode === "edit" && selectedNoteId !== null
                ? "Update Note"
                : "Edit Note"}
            </button>

            <button
                type="button"
                onClick={handleDeleteNote}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-white transition"
                style={{ backgroundColor: "#dc2626" }}
            >
                Delete Note
            </button>
        </div>

        {actionMode && (
            <p
                className="mt-2 text-xs"
                style={{ color: "var(--text-muted)" }}
            >
                {actionMode === "edit"
                ? "Select a previous note to edit it."
                : "Select a previous note to delete it."}
            </p>
        )}


          <div>
            <h3
              className="mb-3 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Previous Notes ({notes.length})
            </h3>

            {notes.length === 0 ? (
              <p
                className="rounded-xl border p-4 text-sm"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border-secondary)",
                }}
              >
                No notes yet. Add your first note above.
              </p>
            ) : (
              <div className="max-h-56 space-y-3 overflow-y-auto">
                {[...notes].reverse().map((note) => (
                  
                    <div
                        key={note.id}
                        onClick={() => {
                            if (!actionMode) return;

                                setSelectedNoteId(note.id);

                                if (actionMode === "edit") {
                                    setNoteText(note.text);
                                } else if (actionMode === "delete") {
                                    const confirmed = window.confirm(
                                        "Delete this note?"
                                    );

                                    if (confirmed) {
                                        const updatedNotes = notes.filter(
                                            (item) => item.id !== note.id
                                        );

                                        setNotes(updatedNotes);
                                        onSave({ ...lead, notes: updatedNotes });
                                        setNoteText("");
                                        setSelectedNoteId(null);
                                        setActionMode(null);
                                    }
                                }
                        }}
                        className={`rounded-xl border p-3 ${
                            actionMode ? "cursor-pointer transition hover:border-purple-400" : ""
                        } ${
                            selectedNoteId === note.id ? "ring-2 ring-purple-500" : ""
                        }`}
                        style={{
                            backgroundColor: "var(--input-bg)",
                            borderColor: "var(--border-secondary)",
                        }}
                    >

                    <p
                      className="whitespace-pre-wrap break-words text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {note.text}
                    </p>

                    <p
                      className="mt-2 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <NotebookPen
                        size={12}
                        className="mr-1 inline-block"
                      />
                      {note.createdAt}
                    </p>
                </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
