import { defineField, defineType } from 'sanity'

export const pageServices = defineType({
  name: 'pageServices',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'process',
      title: 'Global Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'Step Number (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon (e.g. Search, Code)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'additionalServices',
      title: 'Additional Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon (e.g. ShoppingCart)' },
          ],
        },
      ],
    }),
  ],
})
