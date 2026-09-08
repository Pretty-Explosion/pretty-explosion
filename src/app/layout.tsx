import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeFromQuery } from "@/components/ThemeFromQuery";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  // Replace with production URL at go-live
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Pretty Explosion — Quality Video · Grants · Journalism",
    template: "%s · Pretty Explosion",
  },
  description:
    "Pretty Explosion Ltd is a BC Canada AI revenue company: Quality Video Promotion (beachhead), AI grant intelligence, and truth-seeking journalism.",
  keywords: [
    "video promotion",
    "AI commercial production",
    "film grants",
    "media funding",
    "investigative journalism",
    "solutions journalism",
    "Pretty Explosion",
  ],
  icons: {
    icon: [{ url: "/brand/logo/blackhole-mark.png", type: "image/png" }],
    apple: [{ url: "/brand/logo/blackhole-mark.png", type: "image/png" }],
    shortcut: "/brand/logo/blackhole-mark.png",
  },
  openGraph: {
    title: "Pretty Explosion",
    description:
      "Premium AI-assisted video promotion, grant intelligence for creators, and truth-seeking journalism.",
    type: "website",
    siteName: "Pretty Explosion",
    images: [{ url: "/brand/logo/galactic-keyart.png", alt: "Pretty Explosion" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground font-[family-name:var(--font-body)]">
        <Suspense fallback={null}>
          <ThemeFromQuery />
        </Suspense>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
