// schemas/newsletter.ts
import { Rule } from 'sanity';

export default {
  name: 'newsletter',
  title: 'Newsletter Subscription',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email().error('A valid email is required'),
    },
    {
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};
