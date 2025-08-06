import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-border bg-card/50 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-accent">
                  William's Portfolio
                </div>
                <div className="flex items-center space-x-6">
                  <a href="/" className="text-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="/projects" className="text-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                  <a href="/research" className="text-foreground hover:text-primary transition-colors">
                    Research
                  </a>
                  <a href="/about" className="text-foreground hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="border-t border-border bg-card/50">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-muted-foreground">
                <p>&copy; 2025 William's Portfolio. Built with Next.js and Tailwind CSS.</p>
                <div className="mt-2 space-x-4">
                  <a href="https://github.com/willi" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/willi" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="mailto:willi@example.com" className="hover:text-primary transition-colors">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
