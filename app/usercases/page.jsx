"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BestVideoModels from "@/components/model/BestVideoModels";
import BestOpenSource from "@/components/model/BestOpenSource";


function Carousel() {
  const cards = [
    {
      id: 1,
      title: "2.5 Turbo",
      description: "Creates cinematic videos from text and images.",
      image: "/usercase/1.jpg",
      button1: "Text to Image",
      button2: "210s",
    },
    {
      id: 2,
      title: "Kling 2.5 Turbo",
      description: "Creates cinematic videos from text and images.",
      image: "/usercase/2.jpg",
      button1: "Text to Image",
      button2: "210s",
    },
    {
      id: 3,
      title: "Kling 2.5 Turbo",
      description: "Creates cinematic videos from text and images.",
      image: "/usercase/3.jpg",
      button1: "Text to Image",
      button2: "210s",
    },
    {
      id: 4,
      title: "AI Video Pro",
      description: "Generates high-quality videos with advanced AI.",
      image: "/usercase/4.jpg",
      button1: "Video Gen",
      button2: "300s",
    },
    {
      id: 5,
      title: "Vision 3.0",
      description: "Transforms images into dynamic video content.",
      image: "/usercase/6.jpg",
      button1: "Image to Video",
      button2: "180s",
    },
    {
      id: 6,
      title: "Ultra Creator",
      description: "Produces ultra-realistic video outputs.",
      image: "/usercase/8.jpg",
      button1: "Realistic Render",
      button2: "240s",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full px-5 py-10 bg-[#090F0A]">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 306}px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="relative min-w-[280px] h-[380px] rounded-xl overflow-hidden bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-md border border-cyan-500 cursor-pointer"
                style={{ backgroundColor: '#090F0A' }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                  style={{ backgroundColor: '#090F0A' }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority={index === 0}
                  loading={index <= 2 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md rounded-b-xl p-4 flex flex-col space-y-3">
                  <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                  <p className="text-white text-sm opacity-80">{card.description}</p>
                  <div className="flex justify-between">
                    <button className="bg-black/40 text-white text-xs rounded-full px-3 py-1 backdrop-blur border border-white/20">
                      {card.button1}
                    </button>
                    <button className="bg-black/40 text-white text-xs rounded-full px-3 py-1 backdrop-blur border border-white/20">
                      {card.button2}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-md hover:bg-black/70 transition"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-md hover:bg-black/70 transition"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default function UsercasesPage() {
  return (
    <>
      {/* Preload critical images */}
      <link rel="preload" as="image" href="/usercase/1.jpg" />
      <link rel="preload" as="image" href="/usercase/2.jpg" />
      <link rel="preload" as="image" href="/usercase/3.jpg" />
      <link rel="preload" as="image" href="/usercase/4.jpg" />

      <div className="usercases-page bg-[#090F0A] text-white">
        <section className="cover-image" />
        <section className="curved-section">
          <Carousel />
        </section>

        <div className="space-y-6">
          <BestVideoModels/>
          <BestOpenSource />
        </div>
    

        <style jsx>{`
          .usercases-page {
            position: relative;
            overflow-x: hidden;
            padding-bottom: 20px; /* Reduced padding-bottom */
          }
          .space-y-6 > :global(*) {
            margin-bottom: 12px !important; /* Reduce spacing between VideoGeneratorModel and OpenSourceModel */
          }
          :global(.usercases-page > footer) {
            margin-top: 12px !important; /* Reduce space above footer */
            margin-bottom: 0 !important; /* Remove extra space below footer */
          }
          :global(.usercases-page > div > div > div > div > div) {
            margin-bottom: 0 !important; /* Remove bottom margin from last card in carousel */
          }
          .cover-image {
            width: 100%;
            height: 100vh;
            background-image: url("/usercase/1.jpg");
            background-size: cover;
            background-position: center;
            filter: brightness(0.6);
            z-index: 0;
          }
          /* Preload critical image */
          .preload-image {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            pointer-events: none;
          }
          .curved-section {
            position: relative;
            margin-top: -10vh;
            background: #090F0A;
            width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 50% 50% 0 0; /* Curve only at the top */
            box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.7);
            position: relative;
            z-index: 1;
          }
          .curved-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              rgba(9, 15, 10, 0.9),
              transparent 50%
            ),
              linear-gradient(to top, rgba(9, 15, 10, 0.9), transparent 50%);
            z-index: 1;
            pointer-events: none;
          }
        `}</style>
      </div>
    </>
  );
}
