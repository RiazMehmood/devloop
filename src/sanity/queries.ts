export const heroSliderQuery = `
  *[_type == "heroImage"] | order(_createdAt asc) {
    _id,
    title,
    alt,
    attribute,
    link,
    image
  }
`;
