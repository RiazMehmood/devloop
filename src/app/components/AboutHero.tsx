export default function Hero() {
  return (
    <section className="relative text-center text-white py-32 px-6 sm:px-10 overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600">
      <div className="absolute inset-0 opacity-30 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Building the Future of the Web
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          We craft blazing-fast, scalable, and secure web applications using modern JavaScript frameworks and headless architecture. If you're ready to turn your idea into a digital reality — you're in the right place.
        </p>
      </div>
    </section>
  );
}
