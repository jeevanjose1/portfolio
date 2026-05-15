import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MainContent from "@/components/layout/MainContent";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { SanitySiteSettings } from "@/sanity/types";

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
  title: "Jeevan Jose ",
  description: "Portfolio of a full-stack developer specializing in modern web applications, clean architecture, and exceptional user experiences.",
  keywords: ["full-stack developer", "web developer", "portfolio", "React", "Next.js"],
  openGraph: {
    title: "Jeevan Jose",
    description: "Portfolio of a full-stack developer specializing in modern web applications.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteSettings = await client.fetch<SanitySiteSettings>(siteSettingsQuery);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Palette flash prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=localStorage.getItem('portfolio-palette')||'neutral';document.documentElement.setAttribute('data-palette',p);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            <Navbar />
            <MainContent>{children}</MainContent>
            <Footer siteSettings={siteSettings} />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
