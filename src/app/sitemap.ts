import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { projectsQuery, servicesQuery } from '@/sanity/lib/queries';
import { SanityProject, SanityService } from '@/sanity/types';
import { projectsData, mainServicesData } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jeevanjose.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/works',
    '/tools',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch dynamic routes from Sanity
  let sanityProjects: SanityProject[] = [];
  let sanityServices: SanityService[] = [];

  try {
    sanityProjects = await client.fetch(projectsQuery);
    sanityServices = await client.fetch(servicesQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity data for sitemap:", error);
  }

  // Generate Project Routes
  const projectSlugs = sanityProjects?.length > 0 
    ? sanityProjects.map((p) => p.slug)
    : projectsData.map((p) => p.slug);

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/works/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Generate Service Routes
  const serviceSlugs = sanityServices?.length > 0 
    ? sanityServices.map((s) => s.slug)
    : mainServicesData.map((s) => s.slug);

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes, ...serviceRoutes];
}
