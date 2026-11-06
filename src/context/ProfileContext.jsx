import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const initialProfile = {
  avatar: "",
  firstName: "Admin",
  lastName: "Administrator",
  email: "admin@intellxai.in",
  phone: "+91 98765 43210",
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("adminProfile");

    return savedProfile ? JSON.parse(savedProfile) : initialProfile;
  });

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem("adminProfile", JSON.stringify(updatedProfile));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
