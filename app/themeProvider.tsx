// app/providers.tsx
"use client";

import { ThemeProvider as YusrThemeProvider } from "@yusr_systems/ui";

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
}) {
  return (
    <YusrThemeProvider defaultTheme={defaultTheme}>
      {children}
    </YusrThemeProvider>
  );
}
