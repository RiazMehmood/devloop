import { FaAward, FaCode, FaRocket, FaBolt, FaChartLine } from "react-icons/fa";

const reasons = [
  {
    title: "Top-Rated Developer",
    desc: "100% client satisfaction on Upwork with consistent 5-star reviews.",
    icon: <FaAward className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Expert in JAMstack",
    desc: "Years of experience building modern, fast, and scalable JAMstack apps.",
    icon: <FaCode className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Clean & Maintainable Code",
    desc: "Code that’s not only functional, but also clean, documented, and easy to scale.",
    icon: <FaRocket className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Performance Obsessed",
    desc: "Optimized for speed and UX — we fine-tune every detail.",
    icon: <FaBolt className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Always Up-to-date",
    desc: "We stay ahead of the curve by using the latest tools and tech.",
    icon: <FaChartLine className="text-indigo-600 text-3xl" />,
  }
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here’s why developers, startups, and companies trust us to bring their ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-indigo-50 hover:bg-white transition border border-indigo-100 hover:shadow-xl rounded-xl p-6 text-left flex flex-col items-start gap-4"
          >
            <div className="">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
            <p className="text-gray-600">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
