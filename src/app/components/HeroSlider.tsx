"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { client } from "./../../sanity/lib/client";
import { urlFor } from "./../../sanity/lib/image";
import { heroSliderQuery } from "./../../sanity/queries";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type HeroImage = {
  _id: string;
  image: SanityImageSource; // Updated type
  alt: string;
  title: string;
  link: string;
  attribute: string;
};

export default function HeroSlider() {
  const [images, setImages] = useState<HeroImage[]>([]);
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchImages = async () => {
    const data = await client.fetch(heroSliderQuery);
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetTyping();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetTyping();
  };

  const resetTyping = () => {
    setText("");
    setCharIndex(0);
    setIsDeleting(false);
  };

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (images.length) {
      startSlider();
      return () => stopSlider();
    }
  }, [images, startSlider]); // Added `startSlider` to the dependency array

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  useEffect(() => {
    if (!images.length) return;

    const title = images[current].title;
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updated = isDeleting
        ? title.substring(0, charIndex - 1)
        : title.substring(0, charIndex + 1);

      setText(updated);

      if (!isDeleting && updated === title) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updated === "") {
        setIsDeleting(false);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, current, images]);

  if (!images.length) return <div className="text-white text-center">Loading slides...</div>;

  return (
    <div
      {...handlers}
      className="relative w-full h-[560px] xl:h-[670px] overflow-hidden group"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      {images.map((image, index) => (
        <div
          key={image._id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image
            src={urlFor(image.image).url()}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 px-4 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center justify-center flex-grow">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {text}
                <span className="animate-pulse">|</span>
              </h1>
            </div>
            <div className="flex flex-col items-center mt-auto space-y-4 pb-8">
              <Link
                href={image.link}
                className="px-6 py-3 border border-white text-white rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
              >
                Read More
              </Link>
              <div
                className="text-xs text-white px-4 text-center"
                dangerouslySetInnerHTML={{ __html: image.attribute }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
