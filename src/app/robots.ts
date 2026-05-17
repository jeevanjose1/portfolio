import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual production domain when deploying
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jeevanjose.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // Prevent search engines from indexing the Sanity Studio
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
