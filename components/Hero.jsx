import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        {/* LEFT TEXT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-[40px] font-bold leading-tight mb-6">
            Create More. Edit <br /> Less. Impact Faster.
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl text-[16px]">
            Xelta combines cutting-edge artificial intelligence with creative
            storytelling tools to transform your ideas into high-quality video
            content, without complex software or editing skills. Whether you’re
            launching a brand, growing an audience, or scaling your content
            strategy, Xelta empowers you to produce professional videos in
            minutes.
          </p>
          <div className="mt-20 flex items-start">
            <div className="h-23 w-[1px] bg-white mr-5 mt-3"></div>
            <div>
              <h3 className="text-[40px] font-bold">AI Video Maker</h3>
              <p className="text-gray-400 text-[16px]">
                Create high-quality videos from simple text prompts — no editing
                skills needed.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center">
          <div
            className="relative flex flex-col items-center gap-5 overflow-hidden"
            style={{
              width: "325px",
              height: "620px",
              borderRadius: "60% / 46%",
              maskImage:
                "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "cover",
            }}
          >
            {/* TOP FADE GRADIENT */}
            <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>

            {/* TOP SLICE */}
            <div
              className="w-[325px] h-[115px] overflow-hidden relative"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            >
              <Image
                src="/hero/slice-top.png"
                alt="Curved Top"
                width={325}
                height={115}
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            {/* MIDDLE SLICE */}
            <div className="w-[325px] h-[390px] overflow-hidden">
              <Image
                src="/hero/slice-top.png"
                alt="Curved Middle"
                width={325}
                height={390}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM SLICE WITH STRONG 80% SHADOW */}
            <div className="relative w-[325px] h-[115px] overflow-hidden">
              {/* Very dark shadow overlay (covers ~80% of height) */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/95 via-black/90 to-transparent z-20 pointer-events-none"></div>

              <Image
                src="/hero/slice-bottom.png"
                alt="Curved Bottom"
                width={325}
                height={115}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
