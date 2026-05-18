import { defineField, defineType } from 'sanity'

export const pageAbout = defineType({
  name: 'pageAbout',
  title: 'About Page',
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
      name: 'heroParagraphs',
      title: 'Hero Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
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
      name: 'myStoryText',
      title: 'My Story Text',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline Journey',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', type: 'string', title: 'Degree' },
            { name: 'university', type: 'string', title: 'University' },
            { name: 'year', type: 'string', title: 'Year' },
          ],
        },
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'issuer', type: 'string', title: 'Issuer' },
            { name: 'iconLabel', type: 'string', title: 'Icon Text (e.g. AWS)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'beyondCode',
      title: 'Beyond Code (Hobbies)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon (e.g. GitBranch, Users)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'workHistory',
      title: 'Work History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'company', type: 'string', title: 'Company Name' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'duration', type: 'string', title: 'Duration (e.g. 2021 - Present)' },
            { 
              name: 'points', 
              type: 'array', 
              title: 'Key Responsibilities / Achievements',
              of: [{ type: 'string' }]
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'skillGroups',
      title: 'Skill Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Group Title' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name' },
            {
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', type: 'string', title: 'Skill Name' },
                    { name: 'proficiency', type: 'number', title: 'Proficiency (1-100)' },
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
