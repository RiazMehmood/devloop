"use client";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const FooterClient = ({ data }: { data: any }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setMessage(result.message || result.error || "Something went wrong");
    setEmail("");
  };

  return (
    <footer className="px-8 py-18 md:py-3 lg:py-4 bg-[#333333] h-auto min-h-[700px] md:min-h-[220px] lg:min-h-[250px] xl:min-h-[690px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-6 lg:gap-12 gap-12">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4 xl:text-2xl text-white">About Us</h2>
          <p className="text-sm text-gray-300 md:text-[12px] lg:text-[14px] xl:text-[17px] md:whitespace-normal">
            Devloop is a forward-thinking software company committed to building powerful,
            scalable, and intuitive web applications. We specialize in crafting modern digital
            solutions tailored for startups, businesses, and enterprises, using cutting-edge
            technologies to stay ahead in a fast-evolving digital world.
            <br />
            <br />
            Whether you're launching a new product or optimizing an existing system, Devloop
            delivers solutions that are not only technically strong but also user-centric and
            future-ready.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white xl:text-2xl">Features</h2>
          <ul className="space-y-2 text-sm text-gray-300 xl:text-xl">
            <li className="hover:underline cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/testimonial">Testimonial</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white xl:text-2xl">Follow Us</h2>
          <div className="flex space-x-4 text-gray-300 text-lg">
            <a href={data?.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-[#0077b5] cursor-pointer" />
            </a>
            <a href={data?.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#3b5998] cursor-pointer" />
            </a>
            <a href={data?.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-[#1da1f2] cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white xl:text-2xl">Subscribe Newsletter</h2>
          <p className="text-sm text-gray-300 mb-2">
            Stay updated with our latest news and offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-md border border-gray-500 text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
            {message && <p className="text-sm text-green-400 mt-1">{message}</p>}
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="md:mt-32 xl:text-xl pb-1 text-center text-sm text-gray-400">
        © 2025 All rights reserved by{" "}
        <span className="font-semibold text-white">Devloop</span>
      </div>
    </footer>
  );
};

export default FooterClient;
