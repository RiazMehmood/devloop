"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // integrate with Sanity form handling or Netlify / Formspree
    alert("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border rounded px-4 py-2"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border rounded px-4 py-2"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        className="w-full border rounded px-4 py-2"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  );
}
