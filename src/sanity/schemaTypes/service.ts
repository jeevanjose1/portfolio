import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A catchy one-liner for the service page hero',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Core Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The bullet points shown on the service card',
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Monitor, Smartphone, Cloud)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'isMain',
      title: 'Show in Main Services',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g. From $500',
    }),

    // --- What You Get ---
    defineField({
      name: 'whatYouGet',
      title: 'What You Get',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
            { name: 'title', type: 'string', title: 'Benefit Title' },
            { name: 'description', type: 'text', title: 'Benefit Description', rows: 2 },
          ],
        },
      ],
    }),

    // --- Tech Stack ---
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', type: 'string', title: 'Category (e.g. Frontend)' },
            { name: 'techs', type: 'array', of: [{ type: 'string' }], title: 'Technologies' },
          ],
        },
      ],
    }),

    // --- Process ---
    defineField({
      name: 'process',
      title: 'Our Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Step Number (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Step Description', rows: 2 },
            { name: 'duration', type: 'string', title: 'Typical Duration' },
          ],
        },
      ],
    }),

    // --- Packages ---
    defineField({
      name: 'packages',
      title: 'Pricing Packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Package Name' },
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'label', type: 'string', title: 'Label (e.g. For Startups)' },
            { name: 'highlighted', type: 'boolean', title: 'Featured Package', initialValue: false },
            {
              name: 'features',
              type: 'array',
              title: 'Package Features',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'text', type: 'string', title: 'Feature Text' },
                    { name: 'included', type: 'boolean', title: 'Is Included', initialValue: true },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
