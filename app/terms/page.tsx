import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms | Thoughtful Transport",
  description: "Terms for using the Thoughtful Transport LLC website, including information-only notices and acceptable use.",
  path: "/terms",
});
export default function TermsPage() { return <SitePage page="terms" />; }
