import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { service } from './service'
import { testimonial } from './testimonial'
import { experience } from './experience'
import { faq } from './faq'


export const schemaTypes: SchemaTypeDefinition[] = [
  projectType,
  service,
  testimonial,
  experience,
  faq
]
