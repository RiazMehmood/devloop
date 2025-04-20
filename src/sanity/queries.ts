
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

export const projectsQuery = `*[_type == "project"]{
  _id,
  title,
  description,
  github,
  image {
    asset -> {
      url
    }
  },
  stack[]->{
    _id,
    name,
    iconUrl {
      asset -> {
        url
      }
    }
  }
}`;

export const servicesQuery = `*[_type == "service"]{
  _id,
  title,
  description,
  techStack->{
    name,
    iconUrl
  }
}`;

export const contactInfoQuery = `*[_type == "contactInfo"][0] {
  phone,
  email,
  address
}`;


// lib/queries.ts

export const testimonialsQuery = `*[_type == "testimonial"]{
  _id,
  name,
  role,
  quote,
  "image": image.asset->url
}`;
