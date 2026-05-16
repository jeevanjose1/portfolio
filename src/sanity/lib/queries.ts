import { groq } from 'next-sanity'
export const imageFields = /* groq */ `asset->, hotspot, crop`

// Projects
// export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
//   _id,
//   title,
//   "slug": slug.current,
//   description,
//   thumbnail,
//   heroImage,
//   categories,
//   publishedAt,
//   link,
//   githubUrl,
//   isFeatured
// }`



export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    publishedAt,
    link,
    githubUrl,
    isFeatured,
    categories,
 
    // ── Images ──────────────────────────────────────────────────────────────
    thumbnail { ${imageFields} },
    heroImage  { ${imageFields} },
 
    // ── Project Intelligence sidebar (schema field = projectInfo) ────────────
    projectInfo {
      client,
      industry,
      year,
      platform,
      duration,
      role,
      teamSize,
      status,
    },
 
    // ── Modular case study sections ──────────────────────────────────────────
    caseStudy[] {
      _key,
      _type,
 
      // textSection
      _type == "textSection" => {
        heading,
        content
      },
 
      // imageSection
      _type == "imageSection" => {
        caption,
        layout,
        image { ${imageFields} }
      },
 
      // splitSection
      _type == "splitSection" => {
        heading,
        content,
        imagePosition,
        image { ${imageFields} }
      },
 
      // gallerySection — images is an array so use []
      _type == "gallerySection" => {
        gridColumns,
        images[] { ${imageFields} }
      },
    },
 
    // ── Legacy body (deprecated, kept for backwards compat) ──────────────────
    body[] {
      ...,
      _type == "image" => { ${imageFields} }
    },
 
    // ── Features ─────────────────────────────────────────────────────────────
    features[] {
      _key,
      title,
      description,
      iconName,
    },
 
    // ── Tech stack ───────────────────────────────────────────────────────────
    techStack {
      frontend,
      backend,
      database,
      devops,
    },
 
    // ── Metrics ──────────────────────────────────────────────────────────────
    metrics[] {
      _key,
      label,
      numericValue,
      suffix,
    },
  }
`

// ─── All projects (list / index page) ───────────────────────────────────────
export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    categories,
    isFeatured,
    publishedAt,
    thumbnail { ${imageFields} },
    projectInfo { client, industry, year, role },
  }
`

// ─── Featured projects only ───────────────────────────────────────────────────
export const featuredProjectsQuery = groq`
  *[_type == "project" && isFeatured == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    categories,
    thumbnail { ${imageFields} },
    projectInfo { client, industry, year, role },
  }
`

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
  highlight,
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
  features,
  highlight,
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
  workHistory,
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
