import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <FaPhone className="text-indigo-600 text-xl" />
        <span>+92 307 2791683</span>
      </div>
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-indigo-600 text-xl" />
        <span>devloop@gmail.com</span>
      </div>
      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
        <span>123 Web Street, Karachi, Pakistan</span>
      </div>
    </div>
  );
}
