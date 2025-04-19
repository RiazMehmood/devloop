import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { contactInfoQuery } from "@/sanity/queries";

export default async function ContactDetails() {
  const contactInfo = await client.fetch(contactInfoQuery);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <FaPhone className="text-indigo-600 text-xl" />
        <span>{contactInfo?.phone || "Phone not available"}</span>
      </div>
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-indigo-600 text-xl" />
        <span>{contactInfo?.email || "Email not available"}</span>
      </div>
      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
        <span>{contactInfo?.address || "Address not available"}</span>
      </div>
    </div>
  );
}
