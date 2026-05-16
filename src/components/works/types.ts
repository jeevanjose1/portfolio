import type { ProjectMetric } from "@/lib/data";

export interface NormalizedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  publishedDate: string;
  body?: unknown;
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
  features?: { title: string; description: string; iconName: string }[];
  techStack?: { frontend: string[]; backend: string[]; database: string[]; devops: string[] };
  metrics?: ProjectMetric[];

}
