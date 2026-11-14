import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Family-Run Wheelchair Transport on Oahu",
  description: "Thoughtful Transport LLC is a locally owned, family run company providing non-emergency, wheelchair-accessible transportation across Oahu, Hawaii.",
  path: "/about",
});

export default function AboutPage() { return <SitePage page="about" />; }
