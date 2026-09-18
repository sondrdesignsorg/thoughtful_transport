import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Wheelchair Transportation Services on Oahu | Thoughtful Transport",
  description: "Scheduled, non-emergency wheelchair-accessible rides across Oahu — medical appointments, errands, and more. Door-to-door assistance, open 7 days a week.",
  path: "/services",
});

export default function ServicesPage() { return <SitePage page="services" />; }
