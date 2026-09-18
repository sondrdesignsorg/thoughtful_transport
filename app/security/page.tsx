import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Website Security | Thoughtful Transport",
  description: "Security practices and responsible disclosure contact for the Thoughtful Transport website.",
  path: "/security",
});
export default function SecurityPage() { return <SitePage page="security" />; }
