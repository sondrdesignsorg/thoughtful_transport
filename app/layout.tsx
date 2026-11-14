import type { Metadata } from "next";
import { Great_Vibes, Instrument_Serif, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thoughtfultransport.net"),
  title: {
    default: "Wheelchair Transportation on Oahu | Thoughtful Transport",
    template: "%s",
  },
  description: "Trusted non-emergency, wheelchair-accessible transportation across Oahu. Locally owned. Call (808) 220-1263.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${instrumentSerif.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
