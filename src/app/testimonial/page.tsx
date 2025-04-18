import TestimonialsGrid from "./../components/TestimonialGrid";
import { dummyTestimonials } from "../../lib/testimonial";

export default function TestimonialsPage() {
  return (
    <main className="bg-white py-20 px-4 sm:px-8 lg:mb-38">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
        <p className="text-gray-600 mb-12">
          Trusted by startups, founders, and growing teams worldwide.
        </p>
        <TestimonialsGrid testimonials={dummyTestimonials} />
      </section>
    </main>
  );
}
