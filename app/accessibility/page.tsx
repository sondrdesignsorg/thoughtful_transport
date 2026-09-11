import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = { title: "Accessibility Statement | Thoughtful Transport", alternates: { canonical: "/accessibility" } };
export default function AccessibilityPage() { return <SitePage page="accessibility" />; }
