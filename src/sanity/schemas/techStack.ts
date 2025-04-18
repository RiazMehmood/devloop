// schemas/techStack.js
export default {
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tech Name',
      type: 'string',
    },
    {
      name: 'iconUrl',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
