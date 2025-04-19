// schemas/newsletter.js
interface NewsletterField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: any) => any;
    options?: {
        dateFormat?: string;
        timeFormat?: string;
    };
    initialValue?: () => string;
}

interface NewsletterSchema {
    name: string;
    title: string;
    type: string;
    fields: NewsletterField[];
}

const newsletterSchema: NewsletterSchema = {
    name: 'newsletter',
    title: 'Newsletter Subscription',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email().error('A valid email is required'),
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

export default newsletterSchema;
