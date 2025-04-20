// components/server/ServicesSection.tsx
import { client } from "./../../sanity/lib/client";
import { servicesQuery } from "./../../sanity/queries";
import ServicesClient from "./../components/ServicesClient";

export default async function ServicesSection() {
  const services = await client.fetch(servicesQuery, {}, {
      next: { revalidate: 86400 },});

  return <ServicesClient services={services} />;
}
