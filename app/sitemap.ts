import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const staticRoutes = ["/", "/courses", "/contact"];
  const courseRoutes = courses.map((course) => `/course/${course.slug}`);

  return [...staticRoutes, ...courseRoutes].map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/courses" ? 0.9 : 0.7
  }));
}
