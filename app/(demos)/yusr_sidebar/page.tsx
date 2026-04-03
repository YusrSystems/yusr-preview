"use client";
import Link from "next/link"; // Or 'react-router-dom' Link
import { Home, Folder, Settings } from "lucide-react";
import { YusrSideBar } from "@yusr_systems/ui";

export default function AppLayout() {
  // Define your main navigation items
  const mainNav = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <Home size={18} />,
      hasAuth: true,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: <Folder size={18} />,
      hasAuth: false,
    },
  ];

  // Define your secondary navigation items
  const secondaryNav = [
    { title: "Settings", url: "/settings", icon: <Settings size={18} /> },
  ];

  // Define your logout logic
  const handleLogout = async () => {
    console.log("User logged out");
  };

  // Mock user data
  const currentUser = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.png",
  };

  return (
    <YusrSideBar
      LinkComponent={Link}
      logos={{
        logoFullLight: "/logos/full-light.svg",
        logoFullDark: "/logos/full-dark.svg",
        logoOnlyLight: "/logos/icon-light.svg",
        logoOnlyDark: "/logos/icon-dark.svg",
      }}
      displayCompany={{
        name: "Acme Corp",
        logo: "/acme-logo.png",
      }}
      navMain={mainNav}
      navSecondary={secondaryNav}
    >
      {/* Sidebar Sub-components */}
      <YusrSideBar.Header />

      <YusrSideBar.Content LogoutHandler={handleLogout} />

      <YusrSideBar.Footer loggedInUser={currentUser} />
    </YusrSideBar>
  );
}
