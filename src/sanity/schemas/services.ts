// schemas/service.ts
import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'reference',
      to: [{ type: 'techStack' }],
    }),
  ],
});
