// components/OurServices.tsx
import { FaLaptopCode, FaPython, FaServer, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="h-10 w-10 text-indigo-600" />,
    title: "Web Development",
    description: "Custom websites built with modern tools like Next.js, Tailwind CSS, and Sanity CMS.",
  },
  {
    icon: <FaPython className="h-10 w-10 text-green-600" />,
    title: "Python Scripts",
    description: "Automation tools and mini programs tailored to your workflow.",
  },
  {
    icon: <FaServer className="h-10 w-10 text-yellow-500" />,
    title: "Admin Panels",
    description: "User-friendly dashboards for managing content, users, and settings.",
  },
  {
    icon: <FaCogs className="h-10 w-10 text-rose-500" />,
    title: "CMS Integration",
    description: "Easily update your projects and data using Sanity CMS or similar tools.",
  },
];

export default function OurServices() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-2">
            We build smart, fast, and scalable solutions for web and automation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
