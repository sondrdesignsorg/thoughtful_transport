import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thoughtful Transport LLC | Non-Emergency Transportation on Oahu",
  description: "Trusted non-emergency, wheelchair-accessible transportation across Oahu. Locally owned. Call (808) 220-1263.",
  alternates: { canonical: "https://www.thoughtfultransport.net/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
