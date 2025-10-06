"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlackRectangle from "./rectangle";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBanner() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-banner-wrapper",
        start: "top top",
        end: "200% top", // Extended for slower transition and to hold
        scrub: 0.8, // Smoother and slower scroll response
        pin: true,
      },
    });

    // Step 1: Hide all background content (headline, paragraph, waitlist, email input, background image, overlay)
    tl.to(
      [
        ".home-banner h1", // Headline
        ".home-banner p", // Paragraph
        ".home-banner .waitlist-bar", // Waitlist bar
        ".home-banner .email-input", // Email input
        ".home-banner .bg-overlay", // Background overlay
        ".home-banner .banner-image", // Background image
      ],
      {
        opacity: 0, // Completely hidden
        ease: "power2.out",
        duration: 1.5, // Slow fade to hide
      }
    );

    // Step 2: Fade in and scale down "Transcend" text from a much larger size (5) to its own size (1)
    tl.fromTo(
      ".transcend-text",
      { opacity: 0, y: 50, scale: 5 }, // Start from much larger size (5), offset
      {
        opacity: 1, // Fully visible
        y: 0,
        scale: 1, // Scale down to its "own size" (1)
        ease: "power2.inOut", // Smooth scaling
        duration: 3, // Longer for slow transition
      },
      "-=1.2" // Overlap slightly with content hide
    );

    // *** STEP 3 (fade out) IS REMOVED: "Transcend" will remain visible at scale: 1 when the animation finishes. ***

    return () => tl.kill();
  }, []);

  return (
    <div className="home-banner-wrapper relative w-full overflow-x-hidden overflow-y-hidden bg-black">
      {/* SECTION 1 — HOME BANNER */}
      <section className="home-banner relative flex min-h-screen w-full items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0">
          <Image
            src="/banner/hero-image.png"
            alt="Background"
            fill
            priority
            className="z-0 object-cover banner-image"
          />
          <div className="absolute inset-0 bg-black/40 bg-overlay" />
        </div>

        <div className="bg-transparent relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Waitlist bar */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-white/30 border-l-0 border-r-0 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.15)] relative waitlist-bar">
            <div className="flex -space-x-2 relative z-10 bg-transparent">
              <img
                src="/user/User1.png"
                alt="User 1"
                className="h-[41px] w-[41px] rounded-full"
              />
              <img
                src="/user/User2.png"
                alt="User 2"
                className="h-[41px] w-[41px] rounded-full"
              />
              <img
                src="/user/User3.png"
                alt="User 3"
                className="h-[41px] w-[41px] rounded-full"
              />
            </div>
            <span className="text-[14px] text-white relative z-10">
              3,327 users in the waitlist already!
            </span>
            <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-[#ffffff10] to-transparent rounded-r-full"></div>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold md:text-[64px]">
            Where Ideas Evolve <br /> Into Impact
          </h1>

          <p className="mb-8 max-w-xl text-base md:text-[16px] text-gray-200">
            We combine art and artificial intelligence to enhance creativity and
            make the process of creating faster, smarter, and more inspiring.
          </p>

          {/* Email input */}
          <div className="flex w-full max-w-sm px-1 py-2 items-center overflow-hidden rounded-full border border-white/40 bg-white/10 backdrop-blur-3xs email-input">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-[14px] text-white placeholder-gray-300 focus:outline-none"
            />
            <button className="relative flex items-center gap-2 justify-between rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black hover:bg-gray-200">
              Join the Waitlist
              <span className="-mr-3 flex h-[43px] w-[43px] items-center justify-center rounded-full border-2 border-black bg-black" />
            </button>
          </div>
        </div>

        <div>
          <BlackRectangle />
        </div>
      </section>

      {/* SECTION 2 — TRANSCEND TEXT */}
      <section className="absolute inset-0 flex items-center justify-center bg-black z-0 pointer-events-none">
        <h1
          className="transcend-text text-7xl md:text-[150px] font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "url('/banner/hero-image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transcend
        </h1>
      </section>
    </div>
  );
}