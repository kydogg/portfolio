import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { WebVitals } from "@/components/web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Baker - Full-Stack Developer & Designer",
  description: "Portfolio of Kyle Baker, a full-stack developer and designer specializing in modern web applications, UI/UX design, and digital experiences.",
  keywords: ["Kyle Baker", "Full-Stack Developer", "Web Developer", "UI/UX Designer", "Portfolio"],
  authors: [{ name: "Kyle Baker" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Kyle Baker - Full-Stack Developer & Designer",
    description: "Portfolio showcasing modern web applications and digital experiences",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div suppressHydrationWarning>
            <Navigation />
          </div>
          {children}
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  );
}
