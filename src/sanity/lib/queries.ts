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
  packages
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
  packages
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
