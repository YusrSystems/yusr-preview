"use client";
import { TooltipProvider as YusrTooltipProvider } from "@yusr_systems/ui";

export default function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <YusrTooltipProvider>{children}</YusrTooltipProvider>;
}
