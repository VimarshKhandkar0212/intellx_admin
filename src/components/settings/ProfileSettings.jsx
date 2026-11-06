import { Mail, Smartphone, Camera, Trash2 } from "lucide-react";
import { useRef } from "react";

export default function ProfileSettings({ profile, onProfileChange }) {
  const fileInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      onProfileChange({
        target: {
          name: "avatar",
          value: reader.result,
        },
      });
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    onProfileChange({
      target: {
        name: "avatar",
        value: "",
      },
    });

    fileInputRef.current.value = "";
  };

  return (
    <section
      id="profile"
      className="rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-6">
        <h2
          className="text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Profile Information
        </h2>

        <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
          Update your personal and account information.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-semibold text-white">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt="Profile Avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            profile.firstName.charAt(0).toUpperCase() || "A"
          )}
        </div>

        <div>
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {profile.firstName} {profile.lastName}
          </h3>

          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Administrator
          </p>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />

          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300"
            >
              <Camera size={14} />
              Change avatar
            </button>

            {profile.avatar && (
              <button
                type="button"
                onClick={handleRemoveAvatar}
                className="flex items-center gap-1 text-xs font-medium text-red-400 hover:text-red-300"
              >
                <Trash2 size={14} />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={onProfileChange}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-primary)",
            }}
          />
        </div>

        <div>
          <label
            className="mb-2 block text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={onProfileChange}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--border-secondary)",
              color: "var(--text-primary)",
            }}
          />
        </div>

        <div>
          <label
            className="mb-2 block text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={onProfileChange}
              className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
              }}
            />
          </div>
        </div>

        <div>
          <label
            className="mb-2 block text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Phone Number
          </label>

          <div className="relative">
            <Smartphone
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={onProfileChange}
              className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
