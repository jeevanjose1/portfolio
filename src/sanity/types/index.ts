import type { Image } from 'sanity';

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: Image;
  heroImage?: Image;
  categories: string[];
  publishedAt: string;
  link?: string;
  githubUrl?: string;
  isFeatured: boolean;
  body?: unknown[];
  caseStudy?: any[];
  projectInfo?: {
    client: string;
    industry: string;
    year: string;
    platform: string;
    duration: string;
    role: string;
    teamSize: string;
    status: string;
  };
  features?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  techStack?: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  metrics?: {
    label: string;
    numericValue: number;
    suffix?: string;
  }[];
}

export interface SanityService {
  _id: string;
  title: string;
  slug: string;
  tagline?: string;
  description: string;
  iconName: string;
  isMain: boolean;
  order: number;
  features?: string[];
  startingPrice?: string;
  whatYouGet?: {
    icon: string;
    title: string;
    description: string;
  }[];
  techStack?: {
    category: string;
    techs: string[];
  }[];
  process?: {
    step: string;
    title: string;
    description: string;
    duration: string;
  }[];
  packages?: {
    name: string;
    price: string;
    label: string;
    highlighted: boolean;
    features: {
      text: string;
      included: boolean;
    }[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedCategory?: string;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: Image;
}

export interface SanityExperience {
  _id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SanityFAQ {
  _id: string;
  question: string;
  answer: string;
}

export interface SanitySiteSettings {
  _id: string;
  title: string;
  description?: string;
  email?: string;
  profileImage?: Image;
  socialLinks?: {
    label: string;
    href: string;
    svgPaths: string[];
  }[];
  globalStats?: {
    value: string;
    label: string;
  }[];
  ctaBanner?: {
    heading: string;
    subtext: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export interface SanityPageHome {
  _id: string;
  heroBadge: string;
  heroHeading: string;
  heroSubheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  welcome: string
}

export interface SanityPageAbout {
  workHistory: any[] | undefined;
  _id: string;
  heroBadge: string;
  heroHeading: string;
  heroParagraphs: string[];
  heroStats?: { value: string; label: string }[];
  myStoryText: string;
  timeline?: { year: string; title: string; description: string }[];
  education?: { degree: string; university: string; year: string }[];
  certifications?: { name: string; issuer: string; iconLabel: string }[];
  beyondCode?: { title: string; description: string; iconName: string }[];
  skillGroups?: {
    title: string;
    iconName: string;
    skills: { name: string; proficiency: number }[];
  }[];
}

export interface SanityPageServices {
  _id: string;
  heroBadge: string;
  heroHeading: string;
  heroSubtitle: string;
  process?: { number: string; title: string; description: string; iconName: string }[];
  additionalServices?: { title: string; description: string; iconName: string }[];
}
