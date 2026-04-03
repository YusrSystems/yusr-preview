"use client";
import {
  SidebarProvider,
  YusrSidBarProps,
  YusrSideBar,
} from "@yusr_systems/ui";
import {
  Percent,
  BusFrontIcon,
  LayoutDashboardIcon,
  MapPinnedIcon,
  SettingsIcon,
  ShieldCheck,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";

const mockYusrSidBarProps: YusrSidBarProps = {
  logos: {
    logoFullDark: "/yusrBusLogoRTL_Dark.png",
    logoFullLight: "/yusrBusLogoRTL_Light.png",
    logoOnlyDark: "/yusrLogoOnly_Dark.png",
    logoOnlyLight: "/yusrLogoOnly_Light.png",
  },
  navMain: [
    {
      title: "لوحة التحكم",
      url: "",
      icon: <LayoutDashboardIcon />,
      hasAuth: true,
    },
    {
      title: "الحسابات",
      url: "",
      icon: <UsersIcon />,
      hasAuth: true,
    },
    {
      title: "الضرائب",
      url: "",
      icon: <Percent />,
      hasAuth: true,
    },
  ],
  navSecondary: [
    {
      title: "الإعدادات",
      url: "",
      icon: <SettingsIcon />,
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="bg-white text-black min-w-60 min-h-screen flex items-center justify-center">
        <YusrSideBar {...mockYusrSidBarProps}>
          <YusrSideBar.Header />
          <YusrSideBar.Content LogoutHandler={async () => {}} />
          <YusrSideBar.Footer />
        </YusrSideBar>
      </div>
      <SidebarProvider>
        <div className="flex-1 min-h-screen p-4">{children}</div>
      </SidebarProvider>
    </div>
  );
}
