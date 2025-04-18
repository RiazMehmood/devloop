// app/about/page.tsx or pages/about.tsx
import Hero from "./../components/AboutHero";
import ServicesSection from "./../components/AboutServiceSection";
import WhyUs from "./../components/AboutWhyUsSection";
import CallToAction from "./../components/AboutCallToAction";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesSection />
      <WhyUs />
      <CallToAction /> 
    </main>
  );
}
