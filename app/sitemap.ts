import type { MetadataRoute } from "next";

const baseUrl = "https://ttredesign.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/contact", "/privacy", "/terms", "/accessibility", "/security"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-09-10"),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.5,
  }));
}
