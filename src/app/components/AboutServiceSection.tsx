import { FaCheckCircle } from "react-icons/fa";

const services = [
  "JAMStack architecture for ultra-fast performance",
  "SEO-optimized, secure, and scalable web apps",
  "Conversion-optimized UI/UX design",
  "Admin panels & dashboards for full control",
  "Integration with APIs, CRMs, and e-commerce tools",
  "Real-time chat, forms, and interactive features"
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        What We Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-indigo-50 hover:bg-indigo-100 transition p-6 rounded-xl shadow-sm flex items-start gap-3"
          >
            <FaCheckCircle className="text-indigo-600 mt-1" />
            <p className="text-gray-700">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
