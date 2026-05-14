"use client";

import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) return <main>{children}</main>;
  
  return (
    <main className="pt-8">
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
