import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevan Jose — Full-Stack Developer Portfolio",
  description:
    "Portfolio of a full-stack developer specializing in modern web applications, clean architecture, and exceptional user experiences.",
  keywords: ["full-stack developer", "web developer", "portfolio", "React", "Next.js"],
  openGraph: {
    title: "Jeevan Jose — Full-Stack Developer Portfolio",
    description:
      "Portfolio of a full-stack developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
