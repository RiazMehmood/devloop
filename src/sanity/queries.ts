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

export const topBarQuery = `*[_type == "topBarInfo"][0] {
  email,
  phone,
  linkedin,
  facebook,
  twitter
}`;

// export const workQuery = `
//   *[_type == "project"]{
//     _id,
//     title,
//     description,
//     "image": image.asset->url,
//     github,
//     stack
//   }
// `;

// lib/queries.js
export const projectsQuery = `*[_type == "project"]{
  title,
  description,
  github,
  image {
    asset -> {
      url
    }
  },
  stack[]->{
    name,
    iconUrl {
      asset -> {
        url
      }
    }
  }
}`;
