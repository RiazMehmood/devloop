'use client';

import Image from "next/image";
import { urlFor } from "./../../sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // Import SanityImageSource

interface Service {
  _id: string;
  title: string;
  description: string;
  techStack: {
    name: string;
    iconUrl: SanityImageSource; // Updated type
  };
}

interface Props {
  services: Service[];
}

export default function ServicesClient({ services }: Props) {
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
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {service.techStack?.iconUrl ? (
                  <Image
                    src={urlFor(service.techStack.iconUrl).width(40).url()}
                    alt={service.techStack.name}
                    width={40}
                    height={40}
                  />
                ) : (
                  <span className="text-gray-400 text-3xl">?</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
