import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
    </div>
  );
}
