import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Global Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Used in the Home Hero, About Hero, and My Story sections.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Platform Name' },
            { name: 'href', type: 'url', title: 'URL' },
            { name: 'svgPaths', type: 'array', of: [{ type: 'string' }], title: 'SVG Paths' },
          ],
        },
      ],
    }),
    defineField({
      name: 'globalStats',
      title: 'Global Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaBanner',
      title: 'Global CTA Banner',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'subtext', type: 'text', title: 'Subtext' },
        { name: 'buttonLabel', type: 'string', title: 'Button Label' },
        { name: 'buttonHref', type: 'string', title: 'Button URL' },
      ],
    }),
  ],
})
