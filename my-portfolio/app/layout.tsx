import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chean Wei Jie - Fullstack Developer & Business Analytics Student",
  description: "Portfolio of Chean Wei Jie, a passionate Information Systems student at SMU specializing in Business Analytics and AI. Experienced in fullstack development, web scraping, and data management.",
  keywords: ["Chean Wei Jie", "Fullstack Developer", "Business Analytics", "Artificial Intelligence", "SMU", "Web Development", "Java", "JavaScript", "Python", "React", "Vue.js"],
  authors: [{ name: "Chean Wei Jie" }],
  creator: "Chean Wei Jie",
  openGraph: {
    title: "Chean Wei Jie - Fullstack Developer & Business Analytics Student",
    description: "Portfolio showcasing projects in web development, AI, and business analytics. Available for internships Aug-Dec 2025.",
    url: "https://cheanweijie.com", // Replace with actual domain when deployed
    siteName: "Chean Wei Jie Portfolio",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chean Wei Jie - Fullstack Developer & Business Analytics Student",
    description: "Portfolio showcasing projects in web development, AI, and business analytics. Available for internships Aug-Dec 2025.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wei Jie Portfolio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}