const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        { name: "github", title: "GitHub Link", type: "url" },
        {
            name: "stack",
            title: "Tech Stack",
            type: "array",
            of: [{ type: "reference", to: [{ type: "techStack" }] }],
        },
    ],
};

export default project;
