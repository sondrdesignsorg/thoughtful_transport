import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = { title: "Website Terms | Thoughtful Transport", alternates: { canonical: "/terms" } };
export default function TermsPage() { return <SitePage page="terms" />; }
