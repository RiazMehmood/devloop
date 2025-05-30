interface ValidationRule {
    required: () => ValidationRule;
}

interface HeroImageField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: ValidationRule) => ValidationRule; // Replaced `any` with `ValidationRule`
    options?: {
        hotspot: boolean;
    };
}

const heroImage: {
    name: string;
    title: string;
    type: string;
    fields: HeroImageField[];
} = {
    name: "heroImage",
    title: "Hero Image",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: "alt",
            title: "Alt Text",
            type: "string",
        },
        {
            name: "link",
            title: "Button Link",
            type: "url",
            validation: Rule => Rule.required(),
        },
        {
            name: "attribute",
            title: "Photo Credit (HTML)",
            type: "text",
        },
    ],
};

export default heroImage;
