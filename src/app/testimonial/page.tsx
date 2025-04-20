// app/testimonials/page.tsx

import TestimonialsGrid from "@/app/components/TestimonialGrid";
import { client } from "@/sanity/lib/client";

const query = `*[_type == "testimonial"]{
  _id,
  name,
  role,
  quote,
  "image": image.asset->url
}`;

export default async function TestimonialsPage() {
  const testimonials = await client.fetch(query, {}, {
      next: { revalidate: 86400 },});

  return (
    <main className="bg-white py-20 px-4 sm:px-8 lg:mb-38">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
        <p className="text-gray-600 mb-12">
          Trusted by startups, founders, and growing teams worldwide.
        </p>
        <TestimonialsGrid testimonials={testimonials} />
      </section>
    </main>
  );
}
