import type { MetadataRoute } from "next";

const baseUrl = "https://thoughtfultransport.net";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/about", "/services", "/contact", "/privacy", "/terms", "/accessibility", "/security"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.5,
  }));
}
