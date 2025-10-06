"use client";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

const cards = [
  {
    img: "/bestImageModel/Rectangle 96.png",
    title: "Kling 2.5 Turbo",
    desc: "Creates cinematic videos from text and images.",
  },
  {
    img: "/bestImageModel/Rectangle 961.png",
    title: "Kling 2.5 Turbo",
    desc: "Creates cinematic videos from text and images.",
  },
  {
    img: "/bestImageModel/Rectangle 962.png",
    title: "Kling 2.5 Turbo",
    desc: "Creates cinematic videos from text and images.",
  },
  {
    img: "/bestImageModel/Rectangle 963.png",
    title: "Kling 2.5 Turbo",
    desc: "Creates cinematic videos from text and images.",
  },
  {
    img: "/bestImageModel/Rectangle 964.png",
    title: "Kling 2.5 Turbo",
    desc: "Creates cinematic videos from text and images.",
  },
];

export default function BestImageModels() {
  return (
    <section className="bg-[#090F0A] text-white py-20 px-6 md:px-16">
      <h2 className="text-2xl md:text-[32px] font-[600] mb-10 leading-normal">
        Best Image Generation Models
      </h2>

      {/* Horizontal scroll container */}
      <div
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[332px] h-[428px] rounded-[25px] overflow-hidden 
              bg-gradient-to-br from-white/10 to-white/5 
              border border-white/10 backdrop-blur-xl
              shadow-[0_4px_30px_rgba(0,0,0,0.5)] 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-[0_6px_40px_rgba(0,0,0,0.7)]
              snap-center"
          >
            {/* Image */}
            <div className="relative w-[332px] h-[428px] rounded-[24px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none">
                <Image
                  src="/bestImageModel/Rectangle 97.png"
                  alt="overlay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top-left time */}
            <div
              className="absolute top-3 left-3 flex items-center gap-2 text-sm text-gray-300 px-3 py-1.5 
              border border-white/30 rounded-full bg-black/30 backdrop-blur-xl
              shadow-[-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_6px_rgba(255,255,255,0.08)]"
            >
              <Clock size={16} />
              <span>11 days ago</span>
            </div>

            {/* Top-right arrow */}
            <div
              className="absolute top-3 right-3 flex items-center gap-2 text-sm text-gray-300 px-2 py-2 
              border border-white/30 rounded-full bg-black/30 backdrop-blur-xl
              shadow-[-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_6px_rgba(255,255,255,0.08)]"
            >
              <ArrowUpRight size={18} />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-[14px] text-gray-300 mb-3">{card.desc}</p>

              <div className="flex items-center gap-3">
                <button
                  className="flex items-center gap-2 text-sm text-gray-300 px-3 py-1.5
                  border border-white/30 rounded-full
                  bg-gradient-to-b from-white/10 via-white/5 to-white/10
                  backdrop-blur-[8px]
                  shadow-[-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_6px_rgba(255,255,255,0.08)]
                  transition-all duration-200"
                >
                  Text to Image
                </button>

                <button
                  className="flex items-center gap-2 text-sm text-gray-300 px-3 py-1.5
                  border border-white/30 rounded-full
                  bg-gradient-to-b from-white/10 via-white/5 to-white/10
                  backdrop-blur-[8px]
                  shadow-[-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_6px_rgba(255,255,255,0.08)]
                  transition-all duration-200"
                >
                  <Image
                    src="/bestImageModel/vector.png"
                    alt="vector"
                    width={18}
                    height={18}
                  />
                  210s
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
