import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard", "/lesson/", "/checkout", "/login", "/signup"]
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}
