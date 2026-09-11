import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ttredesign.vercel.app"),
  title: "Thoughtful Transport LLC | Non-Emergency Transportation on Oahu",
  description: "Trusted non-emergency, wheelchair-accessible transportation across Oahu. Locally owned. Call (808) 220-1263.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
