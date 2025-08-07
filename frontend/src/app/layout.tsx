import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "William Frank's Portfolio",
  description: "A comprehensive portfolio showcasing academic research, software engineering projects, and technical expertise in machine learning and data science.",
  keywords: ["machine learning", "data science", "software engineering", "portfolio"],
  authors: [{ name: "William Frank", url: "https://github.com/BillDFrank" }],
  creator: "William Frank",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willi-portfolio.vercel.app",
    title: "William Frank's Portfolio",
    description: "A comprehensive portfolio showcasing academic research, software engineering projects, and technical expertise.",
    siteName: "William Frank's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Frank's Portfolio",
    description: "Portfolio",
    creator: "@williamfrank",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-primary-dark text-text-primary">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
