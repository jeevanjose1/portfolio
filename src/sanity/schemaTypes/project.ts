import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Project Thumbnail (Card)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Project Hero (Details Page)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'link',
      title: 'Live Project Link',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project in the featured section',
      initialValue: false,
    }),

    // --- Project Intelligence ---
    defineField({
      name: 'projectInfo',
      title: 'Project Intelligence',
      type: 'object',
      fields: [
        { name: 'client', type: 'string', title: 'Client' },
        { name: 'industry', type: 'string', title: 'Industry' },
        { name: 'year', type: 'string', title: 'Year' },
        { name: 'platform', type: 'string', title: 'Platform' },
        { name: 'duration', type: 'string', title: 'Duration' },
        { name: 'role', type: 'string', title: 'Role' },
        { name: 'teamSize', type: 'string', title: 'Team Size' },
        { name: 'status', type: 'string', title: 'Status' },
      ],
    }),

    // --- Case Study Body ---
    defineField({
      name: 'body',
      title: 'Case Study Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    // --- Features ---
    defineField({
      name: 'features',
      title: 'Key Modules / Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Feature Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 2 },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name (e.g. Activity, Zap, Shield)' },
          ],
        },
      ],
    }),

    // --- Tech Stack ---
    defineField({
      name: 'techStack',
      title: 'Technology Stack',
      type: 'object',
      fields: [
        { name: 'frontend', type: 'array', of: [{ type: 'string' }], title: 'Frontend Layer' },
        { name: 'backend', type: 'array', of: [{ type: 'string' }], title: 'Backend Layer' },
        { name: 'database', type: 'array', of: [{ type: 'string' }], title: 'Database Layer' },
        { name: 'devops', type: 'array', of: [{ type: 'string' }], title: 'Infrastructure' },
      ],
    }),

    // --- Metrics ---
    defineField({
      name: 'metrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Performance Boost)' },
            { name: 'numericValue', type: 'number', title: 'Numeric Value' },
            { name: 'suffix', type: 'string', title: 'Suffix (e.g. %, ms, X)' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
