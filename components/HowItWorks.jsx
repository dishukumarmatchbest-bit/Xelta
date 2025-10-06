"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const numberRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Spark the Idea",
      text: "It all begins with a thought — a few words, an image, or a concept. You bring the seed of creativity; Xelta understands and builds upon it.",
    },
    {
      number: "02",
      title: "AI as Your Creative Partner",
      text: "Through powerful models, purpose-built kits, and adaptive workflows, Xelta helps shape your ideas into scripts, visuals, videos, stories, comics, 3D worlds, and more while keeping your voice at the centre.",
    },
    {
      number: "03",
      title: "Evolve and Share",
      text: "Your creation is ready to grow beyond the screen. Export, publish, and share it anywhere or keep iterating as your imagination expands.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const number = numberRef.current;

    let currentStep = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${steps.length * 100}%`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress * (steps.length - 1);
          const newStep = Math.round(progress);

          if (newStep !== currentStep) {
            const activeStep = steps[newStep];
            currentStep = newStep;

            // Animate out
            gsap.to([title, desc, number], {
              opacity: 0,
              y: -40,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                // Change content
                title.textContent = activeStep.title;
                desc.textContent = activeStep.text;
                number.textContent = activeStep.number;

                // Animate in
                gsap.fromTo(
                  [title, desc],
                  { opacity: 0, y: 40 },
                  { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );

                gsap.fromTo(
                  number,
                  { opacity: 0, scale: 0.8, y: 30 },
                  { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
                );
              },
            });
          }
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center px-10 py-20 overflow-hidden"
    >
      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-12 lg:mb-16">How It Works</h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="max-w-xl lg:max-w-2xl mb-10 lg:mb-40">
          <h3
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 title"
          >
            {steps[0].title}
          </h3>
          <p
            ref={descRef}
            className="text-base lg:text-[16px] text-gray-300 leading-relaxed desc max-w-full lg:max-w-xl"
          >
            {steps[0].text}
          </p>
        </div>

        {/* Right Large Number */}
        <div className="flex-shrink-0 self-center lg:self-start">
          <span
            ref={numberRef}
            className="text-9xl md:text-[140px] lg:text-[180px] font-bold text-white leading-none number"
            style={{
              textShadow: `
                1px 1px 0 #aaa,
                2px 2px 0 #999,
                3px 3px 0 #888,
                4px 4px 0 #777,
                5px 5px 0 #666,
                6px 6px 0 #555,
                7px 7px 0 #444,
                8px 8px 8px rgba(0,0,0,0.8)
              `,
            }}
          >
            {steps[0].number}
          </span>
        </div>
      </div>
    </section>
  );
}
