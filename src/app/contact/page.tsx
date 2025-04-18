import ContactHeader from "../components/ContactHeader";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/ContactMapEmbed";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHeader />
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <ContactDetails />
        <ContactForm />
      </section>
      <MapEmbed />
    </main>
  );
}
