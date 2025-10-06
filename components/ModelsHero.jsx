"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const initialCards = [
  { id: 1, src: "/models/Rectangle 92.png", alt: "Card 1", main: false },
  { id: 2, src: "/models/Rectangle 90.png", alt: "Card 2", main: false },
  {
    id: 3,
    src: "/models/vid.mp4",
    alt: "WAN 2.5",
    main: true,
    title: "WAN 2.5",
    subtitle: "The best open source video model, with sound on this",
    overlay: "/models/Glass effect 1.png",
  },
  { id: 4, src: "/models/Rectangle 91.png", alt: "Card 4", main: false },
  { id: 5, src: "/models/Rectangle 89.png", alt: "Card 5", main: false },
];

export default function ModelsShowcaseHero() {
  const [cards, setCards] = useState(initialCards);
  const [background, setBackground] = useState(initialCards.find((c) => c.main));

  const handleCardClick = (index) => {
    if (cards[index].main) return;
    const mainIndex = cards.findIndex((c) => c.main);
    const updated = [...cards];
    [updated[mainIndex], updated[index]] = [
      { ...updated[index], main: true },
      { ...updated[mainIndex], main: false },
    ];
    setCards(updated);
  };

  useEffect(() => {
    const mainCard = cards.find((c) => c.main);
    setBackground(mainCard);
  }, [cards]);

  const positions = [
    "-rotate-[0deg] translate-x-[-180px] translate-y-[20px] scale-85 z-[5]",
    "-rotate-[0deg] translate-x-[-90px] translate-y-[10px] scale-95 z-[10]",
    "rotate-0 z-[20] scale-105 shadow-[0_0_35px_rgba(255,255,255,0.4)]",
    "rotate-[0deg] translate-x-[90px] translate-y-[10px] scale-95 z-[10]",
    "rotate-[0deg] translate-x-[180px] translate-y-[20px] scale-85 z-[5]",
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-12 overflow-hidden bg-black">
        {/* ✅ Fullscreen Dynamic Background */}
        <div className="absolute inset-0 z-0 w-screen h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={background?.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              {background?.src?.endsWith(".mp4") ? (
                <video
                  src={background.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-screen h-screen object-cover"
                />
              ) : (
                <Image
                  src={background.src}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl w-full flex items-center justify-between">
          {/* Left Section */}
          <div className="w-1/2 text-white">
            <h1 className="font-bold text-[50px] leading-tight">
              Fuel Every Idea with <br /> the Right Model
            </h1>
            <p className="mt-4 text-gray-300 text-[16px] max-w-md leading-relaxed">
              Access cutting-edge AI models for text, image, video, 3D, and
              more — everything you need to bring ideas to life.
            </p>

            <button
              className="mt-8 px-8 py-3 rounded-full text-white font-semibold text-[15px]
               bg-transparent backdrop-blur-lg border border-white/70
               shadow-[0_0_10px_rgba(255,255,255,0.3)]
               hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
               hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
              Try It Now!
            </button>
          </div>

          {/* Right Section - Card Stack */}
          <div className="w-1/2 relative flex justify-center">
            <div className="flex items-center justify-center relative">
              <AnimatePresence>
                {cards.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    layout
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    onClick={() => handleCardClick(idx)}
                    className={`absolute rounded-[26px] overflow-hidden cursor-pointer ${positions[idx]} bg-[#111]`}
                    style={{
                      width: card.main ? "240px" : "200px",
                      height: card.main ? "380px" : "370px",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={card.main ? `${card.id}-main` : `${card.id}-thumb`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        {card.src.endsWith(".mp4") ? (
                          <video
                            src={card.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            className="object-cover rounded-[26px]"
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Extra details when main */}
                    {card.main && card.src.endsWith(".mp4") && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-left">
                          <Image
                            src={card.overlay}
                            alt="Overlay"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[47%] h-auto object-contain"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <h2 className="text-white font-bold text-2xl">
                            {card.title}
                          </h2>
                          <p className="text-gray-300 text-sm mt-1">
                            {card.subtitle}
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
