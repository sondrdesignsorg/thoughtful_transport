import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Contact Thoughtful Transport | Wheelchair Transportation Oahu",
  description: "Questions about wheelchair-accessible transportation on Oahu? Call (808) 220-1263 any day 7am–9pm or send an information request online.",
  path: "/contact",
});

export default function ContactPage() { return <SitePage page="contact" />; }
