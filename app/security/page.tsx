import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = { title: "Website Security | Thoughtful Transport", alternates: { canonical: "/security" } };
export default function SecurityPage() { return <SitePage page="security" />; }
