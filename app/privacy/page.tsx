import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = { title: "Privacy Policy | Thoughtful Transport", alternates: { canonical: "/privacy" } };
export default function PrivacyPage() { return <SitePage page="privacy" />; }
