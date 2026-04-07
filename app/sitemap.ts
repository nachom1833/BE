import { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL || "https://yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/ortopedia.html`,
      lastModified: new Date(),
    },
    // add more routes if needed
  ];
}
