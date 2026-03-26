import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://matariki-massage-wellness.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/treatments/`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/gift-vouchers/`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
