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
  metadataBase: new URL("https://jeevanjose.com"),
  title: "Jeevan Jose",
  description: "Full-stack developer and mobile engineer specializing in building scalable web apps, mobile experiences, and cloud solutions for startups and businesses.",
  keywords: ["full-stack developer", "web developer", "mobile engineer", "portfolio", "React", "Next.js", "Flutter", "freelance developer India"],
  openGraph: {
    title: "Jeevan Jose — Full-Stack Developer & Mobile Engineer",
    description: "Full-stack developer and mobile engineer specializing in scalable web apps, mobile experiences, and cloud solutions.",
    type: "website",
    url: "https://jeevanjose.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevan Jose — Full-Stack Developer & Mobile Engineer",
      },
    ],
    siteName: "Jeevan Jose Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan Jose — Full-Stack Developer & Mobile Engineer",
    description: "Full-stack developer and mobile engineer specializing in scalable web apps, mobile experiences, and cloud solutions.",
    images: ["/og-image.png"],
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
            <MainContent>{children}

            </MainContent>

            <Footer siteSettings={siteSettings} />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
