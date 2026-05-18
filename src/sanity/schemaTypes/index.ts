import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { service } from './service'
import { testimonial } from './testimonial'
import { experience } from './experience'
import { faq } from './faq'
import { siteSettings } from './siteSettings'
import { pageHome } from './pageHome'
import { pageAbout } from './pageAbout'
import { pageServices } from './pageServices'

export const schemaTypes: SchemaTypeDefinition[] = [
  projectType,
  service,
  testimonial,
  experience,
  faq,
  siteSettings,
  pageHome,
  pageAbout,
  pageServices
]

