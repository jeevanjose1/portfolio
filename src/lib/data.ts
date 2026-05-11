// ─── Type Definitions ───

export interface HeroData {
  badge: string;
  heading: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface StatCard {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** SVG path data for the icon */
  svgPaths: string[];
  /** Optional additional SVG elements (rects, circles) */
  svgExtras?: Array<{
    type: "rect" | "circle";
    attrs: Record<string, string | number>;
  }>;
}

export interface TechItem {
  name: string;
  /** Simple SVG icon markup identifier */
  icon: string;
}

export interface ServiceItem {
  iconName: "Monitor" | "Smartphone" | "Cloud";
  title: string;
  description: string;
  linkHref: string;
}

export interface FeaturedProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  linkHref: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

export interface CTABannerData {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
}

// ─── Hero Data ───

export const heroData: HeroData = {
  badge: "✦ Available for freelance work",
  heading: "Full-Stack Developer &\nMobile Engineer",
  subheadline:
    "I build scalable web apps, mobile apps, and cloud solutions that help startups and businesses grow.",
  ctaPrimary: { label: "View My Work", href: "/works" },
  ctaSecondary: { label: "Download CV", href: "/cv.pdf" },
};

export const statsData: StatCard[] = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    svgPaths: [
      "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      "M9 18c-4.51 2-5-2-7-2",
    ],
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svgPaths: [
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    ],
    svgExtras: [
      { type: "rect", attrs: { width: 4, height: 12, x: 2, y: 9 } },
      { type: "circle", attrs: { cx: 4, cy: 4, r: 2 } },
    ],
  },
  {
    label: "Upwork",
    href: "https://upwork.com",
    svgPaths: [
      "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z",
    ],
  },
];

// ─── Tech Stack Data ───

export const techStackData: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Flutter", icon: "flutter" },
  { name: "TypeScript", icon: "typescript" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Firebase", icon: "firebase" },
  { name: "Next.js", icon: "nextjs" },
];

// ─── Services Data ───

export const servicesData: ServiceItem[] = [
  {
    iconName: "Monitor",
    title: "Web App Development",
    description:
      "Building performant, responsive web applications with modern frameworks like React, Next.js, and Node.js. From landing pages to complex SaaS platforms.",
    linkHref: "/services",
  },
  {
    iconName: "Smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with Flutter and React Native. Native-like performance with a single codebase for iOS and Android.",
    linkHref: "/services",
  },
  {
    iconName: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, CI/CD pipelines, containerization with Docker, and deployment on AWS, GCP, and Firebase. Scalable from day one.",
    linkHref: "/services",
  },
];

// ─── Featured Works Data ───

export const featuredWorksData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard for store owners.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/project-1.svg",
    linkHref: "/works/ecommerce-platform",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "An analytics dashboard for SaaS companies to track user engagement, revenue metrics, and funnel performance with interactive data visualizations.",
    tags: ["React", "PostgreSQL", "AWS"],
    image: "/images/project-2.svg",
    linkHref: "/works/saas-analytics",
  },
];

// ─── Testimonials Data ───

export const testimonialsData: TestimonialItem[] = [
  {
    quote:
      "Exceptional developer who delivered our platform ahead of schedule. The code quality and attention to detail were outstanding. Highly recommend for any complex project.",
    name: "Sarah Mitchell",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote:
      "Working with this developer transformed our business. The mobile app they built increased our customer engagement by 40%. Professional and communicative throughout.",
    name: "James Rodriguez",
    company: "GrowthLab",
    rating: 5,
  },
  {
    quote:
      "A true full-stack expert. They handled everything from database architecture to the frontend polish. Our SaaS product launched smoothly thanks to their expertise.",
    name: "Emily Chen",
    company: "DataFlow Solutions",
    rating: 5,
  },
];

// ─── CTA Banner Data ───

export const ctaBannerData: CTABannerData = {
  heading: "Ready to build something great together?",
  subtext:
    "Let's turn your idea into a scalable, production-ready product. I'm just a message away.",
  buttonLabel: "Let's Talk",
  buttonHref: "/contact",
};

// ═══════════════════════════════════════════════
// ─── ABOUT PAGE DATA ───
// ═══════════════════════════════════════════════

export interface AboutHeroData {
  badge: string;
  heading: string;
  paragraphs: string[];
  stats: StatCard[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface SkillGroup {
  title: string;
  iconName: "Layout" | "Server" | "Smartphone" | "Cloud";
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dateRange: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  university: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  iconLabel: string;
}

export interface BeyondCodeItem {
  iconName: "GitBranch" | "Users" | "BookOpen";
  title: string;
  description: string;
}

// ─── About Hero ───

export const aboutHeroData: AboutHeroData = {
  badge: "About Me",
  heading: "Passionate Developer.\nProblem Solver. Builder.",
  paragraphs: [
    "With over 4 years of hands-on experience in software development, I specialize in building full-stack web applications, cross-platform mobile apps, and scalable cloud solutions. Based in Vadodara, India, I work with startups and businesses worldwide to turn their ideas into production-ready products.",
    "I'm driven by a love for clean, maintainable code and a deep curiosity for emerging technologies. Every project I take on is an opportunity to solve real problems and create lasting impact through thoughtful engineering.",
  ],
  stats: [
    { value: "4+", label: "Years" },
    { value: "20+", label: "Projects" },
    { value: "5+", label: "Industries" },
  ],
};

// ─── Timeline ───

export const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: "Started Professional Journey",
    description:
      "Began as a junior software engineer, learning the fundamentals of production-grade code, agile workflows, and collaborative development.",
  },
  {
    year: "2022",
    title: "React & Node.js Mastery",
    description:
      "Mastered the React and Node.js ecosystem, building complex SPAs, RESTful APIs, and real-time applications with WebSockets.",
  },
  {
    year: "2023",
    title: "Mobile Development with Flutter",
    description:
      "Expanded into cross-platform mobile development with Flutter, delivering iOS and Android apps from a single codebase.",
  },
  {
    year: "2024",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Added DevOps and cloud infrastructure expertise — Docker, AWS, CI/CD pipelines — enabling end-to-end project delivery.",
  },
  {
    year: "2025",
    title: "Freelancing & Consulting",
    description:
      "Launched freelancing alongside full-time work, partnering with startups and agencies to deliver high-impact digital products.",
  },
];

export const myStoryText =
  "I believe great software is built at the intersection of empathy and engineering. My approach starts with understanding the people who will use the product — their pain points, workflows, and goals. From there, I architect solutions that are not just technically sound, but genuinely delightful to use. Continuous learning is at the core of everything I do. Whether it's a new framework, a design pattern, or a cloud service, I invest time in staying ahead of the curve so my clients always get modern, future-proof solutions.";

// ─── Skills ───

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 88 },
      { name: "HTML / CSS", proficiency: 95 },
      { name: "Tailwind CSS", proficiency: 92 },
    ],
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", proficiency: 88 },
      { name: "Express.js", proficiency: 85 },
      { name: "REST APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 72 },
    ],
  },
  {
    title: "Mobile",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter", proficiency: 80 },
      { name: "React Native", proficiency: 75 },
      { name: "Firebase", proficiency: 82 },
    ],
  },
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 78 },
      { name: "GCP", proficiency: 70 },
      { name: "CI/CD", proficiency: 80 },
    ],
  },
];

// ─── Experience ───

export const experienceData: ExperienceItem[] = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full-Stack Developer",
    dateRange: "Jan 2023 – Present",
    achievements: [
      "Led development of a SaaS analytics platform serving 10K+ monthly active users with React, Node.js, and PostgreSQL.",
      "Reduced API response times by 40% through query optimization and Redis caching layer implementation.",
      "Mentored a team of 3 junior developers, conducting code reviews and establishing coding standards.",
    ],
  },
  {
    company: "StartupHub Inc.",
    role: "Software Engineer",
    dateRange: "Jun 2021 – Dec 2022",
    achievements: [
      "Built and shipped 5 client-facing web applications from scratch using React, Next.js, and Tailwind CSS.",
      "Developed a cross-platform mobile app with Flutter that achieved 4.7★ rating on both App Store and Google Play.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes.",
    ],
  },
];

// ─── Education ───

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Gujarat Technological University",
    year: "2021",
  },
];

// ─── Certifications ───

export const certificationsData: CertificationItem[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    iconLabel: "AWS",
  },
  {
    name: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    iconLabel: "GCP",
  },
  {
    name: "Meta React Developer Certificate",
    issuer: "Meta (Coursera)",
    iconLabel: "React",
  },
];

// ─── Beyond Code ───

export const beyondCodeData: BeyondCodeItem[] = [
  {
    iconName: "GitBranch",
    title: "Open Source Contributions",
    description:
      "I actively contribute to open source projects and believe in giving back to the developer community that has given me so much.",
  },
  {
    iconName: "Users",
    title: "Technical Mentoring",
    description:
      "I mentor aspiring developers through code reviews, pair programming sessions, and knowledge-sharing workshops.",
  },
  {
    iconName: "BookOpen",
    title: "Continuous Learning",
    description:
      "Technology never stands still, and neither do I. I dedicate time every week to learning new tools, patterns, and best practices.",
  },
];

// ═══════════════════════════════════════════════
// ─── SERVICES PAGE DATA ───
// ═══════════════════════════════════════════════

export interface ServicesHeroData {
  badge: string;
  heading: string;
  subtitle: string;
}

export interface MainServiceItem {
  iconName: "Monitor" | "Smartphone" | "Cloud";
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  linkHref: string;
}

export interface AdditionalServiceItem {
  iconName: "ShoppingCart" | "Network" | "BarChart3" | "Code2";
  title: string;
  description: string;
}

export interface ProcessStepItem {
  number: string;
  iconName: "Search" | "FileText" | "Code" | "Rocket";
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesHeroData: ServicesHeroData = {
  badge: "What I Offer",
  heading: "End-to-End Development Services",
  subtitle: "From idea to deployment — I handle the full product lifecycle",
};

export const mainServicesData: MainServiceItem[] = [
  {
    iconName: "Monitor",
    title: "Web App Development",
    description: "Custom web applications built with modern frameworks to deliver fast, secure, and scalable experiences.",
    features: ["Responsive UI", "REST APIs", "Database Design", "Authentication", "Cloud Deployment"],
    startingPrice: "From $500",
    linkHref: "/contact",
  },
  {
    iconName: "Smartphone",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide native-like performance and seamless user experiences.",
    features: ["iOS + Android", "Flutter/React Native", "Firebase", "Push Notifications", "App Store Deployment"],
    startingPrice: "From $800",
    linkHref: "/contact",
  },
  {
    iconName: "Cloud",
    title: "Cloud & DevOps",
    description: "Robust cloud infrastructure and automated pipelines to ensure your applications run reliably and scale effortlessly.",
    features: ["AWS/GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring", "Security Hardening"],
    startingPrice: "From $300",
    linkHref: "/contact",
  },
];

export const additionalServicesData: AdditionalServiceItem[] = [
  {
    iconName: "ShoppingCart",
    title: "E-commerce Development",
    description: "Custom storefronts and scalable e-commerce platforms tailored to your business needs.",
  },
  {
    iconName: "Network",
    title: "API Development & Integration",
    description: "Robust REST and GraphQL APIs, along with seamless third-party integrations.",
  },
  {
    iconName: "BarChart3",
    title: "Dashboard & Analytics",
    description: "Interactive data visualization dashboards to help you track key metrics and insights.",
  },
  {
    iconName: "Code2",
    title: "Code Review & Consulting",
    description: "Expert analysis of your codebase to identify bugs, optimize performance, and enforce best practices.",
  },
];

export const processData: ProcessStepItem[] = [
  {
    number: "01",
    iconName: "Search",
    title: "Discovery",
    description: "We discuss your requirements, goals, and timeline",
  },
  {
    number: "02",
    iconName: "FileText",
    title: "Planning",
    description: "I send a detailed proposal with milestones and deliverables",
  },
  {
    number: "03",
    iconName: "Code",
    title: "Development",
    description: "I build with daily progress updates and check-ins",
  },
  {
    number: "04",
    iconName: "Rocket",
    title: "Delivery",
    description: "Testing, deployment, and post-launch support",
  },
];

export const faqData: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary widely depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-featured web application or mobile app could take 1-3 months. After our initial discovery call, I will provide a detailed timeline with specific milestones.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients all over the world. I am accustomed to working across different time zones and ensure smooth communication through regular updates and flexible meeting times.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept payments via bank transfer, PayPal, and major credit cards through secure invoicing platforms. Projects typically require a deposit upfront, with the remainder tied to specific project milestones.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. Every project includes a standard 30-day bug-fix guarantee after launch. I also offer ongoing retainer packages for maintenance, updates, and adding new features as your business grows.",
  },
  {
    question: "Can you work in my timezone?",
    answer: "While I am based in India, my work hours are highly flexible. I ensure there is an overlap of at least 2-4 hours with your working day for synchronous meetings and urgent communication.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, I am completely open to signing Non-Disclosure Agreements (NDAs). I take client confidentiality very seriously and ensure your intellectual property remains secure.",
  },
];

// ═══════════════════════════════════════════════
// ─── WORKS PAGE DATA ───
// ═══════════════════════════════════════════════

export type FilterCategory = "All" | "Web Apps" | "Mobile Apps" | "E-commerce" | "Dashboards" | "APIs";

export const filterCategoriesData: FilterCategory[] = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "E-commerce",
  "Dashboards",
  "APIs",
];

export interface ProjectFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
}

export interface ProjectInfo {
  client: string;
  industry: string;
  duration: string;
  year: string;
  platform: string;
  role: string;
  teamSize: string;
  status: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  categories: FilterCategory[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: ProjectFeature[];
  metrics: ProjectMetric[];
  projectInfo: ProjectInfo;
  techStack: TechStack;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-featured online store with real-time inventory management and payment processing",
    longDescription: "A comprehensive e-commerce solution built to handle high-volume traffic and complex inventory needs. The platform integrates seamlessly with multiple payment gateways and provides a robust admin dashboard for order management and analytics.",
    categories: ["All", "Web Apps", "E-commerce"],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      { iconName: "ShoppingCart", title: "Shopping Cart & Checkout", description: "Frictionless checkout experience with guest checkout support." },
      { iconName: "CreditCard", title: "Payment Gateway", description: "Secure payments via Stripe and PayPal integration." },
      { iconName: "LayoutDashboard", title: "Admin Dashboard", description: "Comprehensive CRM and inventory management tools." },
      { iconName: "Package", title: "Real-time Inventory", description: "Automatic stock syncing across multiple warehouses." },
      { iconName: "Truck", title: "Order Tracking", description: "Real-time shipping updates for customers." },
      { iconName: "Smartphone", title: "Mobile Responsive", description: "Perfectly optimized for shopping on any device." },
    ],
    metrics: [
      { label: "Users", value: "2,000+", numericValue: 2000, suffix: "+" },
      { label: "Lighthouse", value: "98/100", numericValue: 98, suffix: "/100" },
      { label: "Uptime", value: "99.9%", numericValue: 99.9, suffix: "%" },
      { label: "Load Time", value: "1.2s", numericValue: 1.2, suffix: "s" },
    ],
    projectInfo: {
      client: "RetailCo Ltd.",
      industry: "E-commerce",
      duration: "12 weeks",
      year: "2023",
      platform: "Web App",
      role: "Lead Full-Stack Developer",
      teamSize: "3 Developers, 1 Designer",
      status: "Completed / Live",
    },
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express", "Stripe API"],
      database: ["MongoDB", "Redis"],
      devops: ["AWS EC2", "Docker", "GitHub Actions"],
    }
  },
  {
    id: "saas-analytics",
    slug: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    description: "Multi-tenant analytics platform with real-time data visualization and custom reports",
    longDescription: "A scalable B2B SaaS platform that aggregates data from multiple sources to provide actionable insights. Designed with a multi-tenant architecture to ensure data isolation and security for enterprise clients.",
    categories: ["All", "Web Apps", "Dashboards"],
    tags: ["React", "Chart.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      { iconName: "BarChart3", title: "Custom Reports", description: "Drag-and-drop report builder for tailored insights." },
      { iconName: "Activity", title: "Real-time Analytics", description: "Live data streaming and updates." },
      { iconName: "Users", title: "Multi-tenant Architecture", description: "Secure data isolation between organizations." },
      { iconName: "Lock", title: "Role-based Access", description: "Granular permissions and user roles." },
      { iconName: "Download", title: "Data Export", description: "Export to CSV, PDF, and Excel formats." },
      { iconName: "Bell", title: "Smart Alerts", description: "Custom threshold notifications via email/Slack." },
    ],
    metrics: [
      { label: "Data Points", value: "50M+", numericValue: 50, suffix: "M+" },
      { label: "Queries/sec", value: "1,000+", numericValue: 1000, suffix: "+" },
      { label: "Uptime", value: "99.99%", numericValue: 99.99, suffix: "%" },
      { label: "Latency", value: "<200ms", numericValue: 200, suffix: "ms" },
    ],
    projectInfo: {
      client: "DataTech Inc.",
      industry: "B2B SaaS",
      duration: "16 weeks",
      year: "2023",
      platform: "Web App",
      role: "Frontend Architect",
      teamSize: "5 Developers",
      status: "Active Maintenance",
    },
    techStack: {
      frontend: ["React", "TypeScript", "Chart.js", "MUI"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL", "ClickHouse"],
      devops: ["AWS ECS", "Terraform", "Datadog"],
    }
  },
  {
    id: "flutter-shopping",
    slug: "flutter-shopping",
    title: "Flutter Shopping App",
    description: "Cross-platform iOS & Android e-commerce app with seamless checkout",
    longDescription: "A high-performance mobile shopping application built with Flutter. Delivers a native-like experience on both iOS and Android from a single codebase, featuring complex animations and real-time backend synchronization.",
    categories: ["All", "Mobile Apps", "E-commerce"],
    tags: ["Flutter", "Firebase", "Razorpay"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      { iconName: "Smartphone", title: "Cross-platform", description: "Native performance on iOS and Android." },
      { iconName: "Zap", title: "Fast Checkout", description: "One-click buying and saved payment methods." },
      { iconName: "Heart", title: "Wishlist", description: "Save products for later across devices." },
      { iconName: "BellRing", title: "Push Notifications", description: "Targeted promos and order updates." },
      { iconName: "Search", title: "Algolia Search", description: "Instant product search with typo tolerance." },
      { iconName: "ShieldCheck", title: "Secure Payments", description: "PCI compliant payment processing." },
    ],
    metrics: [
      { label: "Downloads", value: "50k+", numericValue: 50, suffix: "k+" },
      { label: "App Rating", value: "4.8", numericValue: 4.8, suffix: "★" },
      { label: "Crash Free", value: "99.8%", numericValue: 99.8, suffix: "%" },
      { label: "Conversion", value: "4.2%", numericValue: 4.2, suffix: "%" },
    ],
    projectInfo: {
      client: "FashionBrand",
      industry: "Retail / Fashion",
      duration: "10 weeks",
      year: "2024",
      platform: "iOS & Android",
      role: "Lead Mobile Developer",
      teamSize: "2 Developers",
      status: "Published",
    },
    techStack: {
      frontend: ["Flutter", "Dart", "Provider"],
      backend: ["Firebase Cloud Functions", "Node.js"],
      database: ["Cloud Firestore"],
      devops: ["Codemagic CI/CD", "Firebase Crashlytics"],
    }
  },
  {
    id: "rest-api",
    slug: "rest-api",
    title: "REST API Platform",
    description: "Scalable REST API with JWT auth, rate limiting, and auto-generated Swagger docs",
    longDescription: "A robust, enterprise-grade RESTful API designed to power multiple frontend applications. Built with security and scalability in mind, featuring comprehensive rate limiting, caching, and automated documentation.",
    categories: ["All", "APIs"],
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "#",
    features: [
      { iconName: "Key", title: "JWT Authentication", description: "Secure token-based auth with refresh tokens." },
      { iconName: "Shield", title: "Rate Limiting", description: "DDoS protection and API quota management." },
      { iconName: "BookOpen", title: "Swagger Docs", description: "Auto-generated OpenAPI 3.0 documentation." },
      { iconName: "Database", title: "Connection Pooling", description: "Optimized database access for high concurrency." },
      { iconName: "Zap", title: "Redis Caching", description: "Sub-millisecond response times for frequent queries." },
      { iconName: "FileCode", title: "Input Validation", description: "Strict schema validation using Zod." },
    ],
    metrics: [
      { label: "Req/Month", value: "10M+", numericValue: 10, suffix: "M+" },
      { label: "Response Time", value: "45ms", numericValue: 45, suffix: "ms" },
      { label: "Uptime", value: "99.99%", numericValue: 99.99, suffix: "%" },
      { label: "Test Cov.", value: "95%", numericValue: 95, suffix: "%" },
    ],
    projectInfo: {
      client: "Internal Tooling",
      industry: "Technology",
      duration: "8 weeks",
      year: "2023",
      platform: "Backend / API",
      role: "Backend Developer",
      teamSize: "2 Developers",
      status: "In Production",
    },
    techStack: {
      frontend: [],
      backend: ["Node.js", "Express", "TypeScript", "Zod"],
      database: ["PostgreSQL", "Prisma ORM", "Redis"],
      devops: ["Docker", "Kubernetes", "Prometheus"],
    }
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate Web App",
    description: "Property listing platform with map integration, search filters, and agent dashboard",
    longDescription: "A modern real estate marketplace connecting buyers, sellers, and agents. Features an interactive map-based search, virtual tours integration, and a comprehensive CRM dashboard for real estate agents to manage their listings.",
    categories: ["All", "Web Apps"],
    tags: ["React", "Node.js", "Google Maps API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      { iconName: "Map", title: "Interactive Maps", description: "Google Maps integration with custom clustering." },
      { iconName: "Filter", title: "Advanced Search", description: "Multi-faceted filtering with instant results." },
      { iconName: "Camera", title: "Virtual Tours", description: "Support for 360° property walkthroughs." },
      { iconName: "Users", title: "Agent Dashboard", description: "Lead management and listing analytics." },
      { iconName: "MessageSquare", title: "In-app Messaging", description: "Direct communication between buyers and agents." },
      { iconName: "Bookmark", title: "Saved Searches", description: "Email alerts for new matching properties." },
    ],
    metrics: [
      { label: "Listings", value: "10,000+", numericValue: 10000, suffix: "+" },
      { label: "Agents", value: "500+", numericValue: 500, suffix: "+" },
      { label: "Monthly Visits", value: "100k+", numericValue: 100, suffix: "k+" },
      { label: "Lead Gen", value: "+45%", numericValue: 45, suffix: "%" },
    ],
    projectInfo: {
      client: "PropTech Startup",
      industry: "Real Estate",
      duration: "14 weeks",
      year: "2024",
      platform: "Web App",
      role: "Full-Stack Developer",
      teamSize: "4 Developers",
      status: "Launched",
    },
    techStack: {
      frontend: ["React", "Next.js", "Google Maps API", "Framer Motion"],
      backend: ["Node.js", "GraphQL", "Apollo Server"],
      database: ["MongoDB", "Elasticsearch"],
      devops: ["Vercel", "AWS S3", "Cloudflare"],
    }
  },
  {
    id: "hr-management",
    slug: "hr-management",
    title: "HR Management SaaS",
    description: "Complete HR platform with attendance tracking, payroll, and employee self-service",
    longDescription: "An all-in-one Human Resources platform designed to streamline operations for mid-sized companies. Automates payroll processing, simplifies leave management, and provides a self-service portal for employees.",
    categories: ["All", "Web Apps", "Dashboards"],
    tags: ["React", "Node.js", "MongoDB", "AWS S3"],
    liveUrl: "#",
    features: [
      { iconName: "Clock", title: "Time Tracking", description: "Automated attendance and timesheet management." },
      { iconName: "DollarSign", title: "Payroll Processing", description: "One-click payroll generation and tax calculations." },
      { iconName: "Calendar", title: "Leave Management", description: "Approval workflows and balance tracking." },
      { iconName: "UserCircle", title: "Employee Portal", description: "Self-service access to payslips and documents." },
      { iconName: "FileText", title: "Document Vault", description: "Secure storage for contracts and policies." },
      { iconName: "TrendingUp", title: "Performance Reviews", description: "Customizable appraisal forms and 360 feedback." },
    ],
    metrics: [
      { label: "Companies", value: "250+", numericValue: 250, suffix: "+" },
      { label: "Employees", value: "15,000+", numericValue: 15000, suffix: "+" },
      { label: "Time Saved", value: "30 hrs/wk", numericValue: 30, suffix: "hrs" },
      { label: "CSAT", value: "4.9/5", numericValue: 4.9, suffix: "/5" },
    ],
    projectInfo: {
      client: "HR Solutions Ltd.",
      industry: "Human Resources",
      duration: "20 weeks",
      year: "2023",
      platform: "Web App",
      role: "Lead Architect",
      teamSize: "6 Developers",
      status: "Active",
    },
    techStack: {
      frontend: ["React", "Redux Toolkit", "Ant Design"],
      backend: ["Node.js", "NestJS"],
      database: ["MongoDB", "Redis"],
      devops: ["AWS EKS", "GitLab CI/CD"],
    }
  },
];
