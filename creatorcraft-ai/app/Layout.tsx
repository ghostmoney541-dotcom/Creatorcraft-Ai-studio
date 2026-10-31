import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorCraft AI | Creative Studio",
  description:
    "One studio for music, visuals, branding, and creative business tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
