"use client";

import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  return (
    <main className={isStudio ? "" : "pt-[60px]"}>
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
