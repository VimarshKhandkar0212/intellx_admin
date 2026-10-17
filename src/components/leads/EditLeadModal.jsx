
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  status: "New",
  source: "Website",
};

function EditLeadModal({ lead, onClose, onSave }) {
  const [formData, setFormData] = useState(initialFormData);

  const isEditing = Boolean(lead);

  useEffect(() => {
    if (lead) {
      setFormData({
        name: lead.name || "",
        company: lead.company || "",
        email: lead.email || "",
        phone: lead.phone || "",
        status: lead.status || "New",
        source: lead.source || "Website",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [lead]);

  if (lead === null && !onSave) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...(lead || {}),
      ...formData,
    });
  };

  const inputClass =
    "w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:border-purple-500";

  const inputStyle = {
    backgroundColor: "var(--input-bg)",
    borderColor: "var(--border-primary)",
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
        className="w-full max-w-lg rounded-2xl border p-6 shadow-2xl"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-primary)",
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {isEditing ? "Edit Lead" : "Add New Lead"}
            </h2>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {isEditing
                ? "Update the lead's information."
                : "Enter the details to create a new lead."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-white/10"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Company
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                placeholder="Enter company"
                required
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={`${inputClass} dark-select`}
                style={inputStyle}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Meeting Scheduled">Meeting Scheduled</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Source
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className={`${inputClass} dark-select`}
                style={inputStyle}
              >
                <option value="Website">Website</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>
          </div>

          <div
            className="flex justify-end gap-3 border-t pt-4"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:bg-white/5"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
            >
              {isEditing ? "Save Changes" : "Create Lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditLeadModal;
