export default function CallToAction() {
  return (
    <section className="relative bg-indigo-600 text-white py-20 px-6 sm:px-10">
      <div className="absolute inset-0 bg-indigo-900 opacity-10 backdrop-blur-sm" />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">
          Not sure where to start?
        </h3>
        <p className="mb-6 text-white/90">
          Book your <span className="font-semibold text-yellow-300">FREE consultation</span> and we’ll help you choose the perfect stack and strategy for your next big idea.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Book a Free Call →
        </a>
      </div>
    </section>
  );
}
