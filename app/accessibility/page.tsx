import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement | Thoughtful Transport",
  description: "Our commitment to an accessible website and wheelchair-accessible transportation across Oahu, Hawaii.",
  path: "/accessibility",
});
export default function AccessibilityPage() { return <SitePage page="accessibility" />; }
