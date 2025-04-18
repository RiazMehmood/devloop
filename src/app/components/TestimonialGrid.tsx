import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial._id} testimonial={testimonial} />
      ))}
    </div>
  );
}
