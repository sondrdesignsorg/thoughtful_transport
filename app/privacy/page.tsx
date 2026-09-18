import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Thoughtful Transport",
  description: "How Thoughtful Transport LLC collects, uses, and protects information submitted through this website.",
  path: "/privacy",
});
export default function PrivacyPage() { return <SitePage page="privacy" />; }
