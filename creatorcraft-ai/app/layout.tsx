import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorcraft.ai"),
  title: {
    default: "CreatorCraft AI | Creative Studio",
    template: "%s | CreatorCraft AI"
  },
  description:
    "CreatorCraft AI brings together music, video, website generation, branding, growth, and AI coding into one premium creative studio.",
  keywords: [
    "CreatorCraft AI",
    "AI creative studio",
    "music generation",
    "brand strategy",
    "AI website builder",
    "creative software"
  ],
  openGraph: {
    title: "CreatorCraft AI",
    description: "Creative systems for modern creators and teams.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorCraft AI",
    description: "Creative systems for modern creators and teams."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
