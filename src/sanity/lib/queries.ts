import { groq } from 'next-sanity'

// Projects
export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  categories,
  publishedAt,
  link,
  githubUrl,
  isFeatured
}`

export const featuredProjectsQuery = groq`*[_type == "project" && isFeatured == true] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  categories,
  publishedAt,
  link,
  githubUrl,
  isFeatured
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  categories,
  publishedAt,
  link,
  githubUrl,
  isFeatured,
  projectInfo,
  body,
  features,
  techStack,
  metrics
}`

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  iconName,
  isMain,
  order,
  features,
  startingPrice,
  whatYouGet,
  techStack,
  process,
  packages,
  faqs
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  iconName,
  isMain,
  order,
  startingPrice,
  whatYouGet,
  techStack,
  process,
  packages,
  faqs
}`

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  content,
  rating,
  image
}`

// Experience
export const experienceQuery = groq`*[_type == "experience"] | order(order asc) {
  _id,
  year,
  title,
  subtitle,
  description
}`

// FAQ
export const faqQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer
}`

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  description,
  email,
  socialLinks,
  globalStats,
  ctaBanner
}`

// Pages
export const pageHomeQuery = groq`*[_type == "pageHome"][0] {
  _id,
  heroBadge,
  heroHeading,
  heroSubheadline,
  ctaPrimary,
  ctaSecondary
}`

export const pageAboutQuery = groq`*[_type == "pageAbout"][0] {
  _id,
  heroBadge,
  heroHeading,
  heroParagraphs,
  heroStats,
  myStoryText,
  timeline,
  education,
  certifications,
  beyondCode,
  skillGroups
}`

export const pageServicesQuery = groq`*[_type == "pageServices"][0] {
  _id,
  heroBadge,
  heroHeading,
  heroSubtitle,
  process,
  additionalServices
}`
