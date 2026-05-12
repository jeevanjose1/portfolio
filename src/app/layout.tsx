import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevan Jose — Full-Stack & Mobile Developer",
  description:
    "Full-stack developer crafting modern, scalable web applications with clean code and thoughtful design. Based in Vadodara, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased bg-primary text-primary transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {/* Mobile Navigation */}
          <MobileNav />
          
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Desktop Sidebar */}
            <Sidebar />
            
            {/* Main Content Area */}
            <main className="flex-1 lg:ml-sidebar-w min-h-screen relative">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
