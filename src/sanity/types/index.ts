export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainImage?: any;
  categories: string[];
  publishedAt: string;
  link?: string;
  githubUrl?: string;
  isFeatured: boolean;
  body?: any[];
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
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: any;
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
