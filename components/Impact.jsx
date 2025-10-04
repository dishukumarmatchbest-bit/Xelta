import Image from 'next/image';

const cards = [
  {
    title: "Create Stories",
    desc: "Turn any idea into scripts, narratives, or dialogues.",
    bg: "bg-blue-900",
    img: "/Impact/Rectangle 18.png",
    overlay: "/Impact/Glass effect 1.png"
  },
  {
    title: "Design Visuals",
    desc: "Generate captivating images, comics, and illustrations.",
    bg: "bg-orange-900",
    img: "/Impact/Rectangle 19.png",
    overlay: "/Impact/Glass effect 2.png"
  },
  {
    title: "Build Worlds",
    desc: "Turn prompts into 3D scenes and interactive experiences.",
    bg: "bg-teal-900",
    img: "/Impact/Rectangle 20.png",
    overlay: "/Impact/Glass effect 3.png"
  },
  {
    title: "Produce Media",
    desc: "Automate videos, microdramas, and content campaigns with AI.",
    bg: "bg-red-900",
    img: "/Impact/Rectangle 21.png",
    overlay: "/Impact/Glass effect 4.png"
  }
];

export default function ImpactSection() {
  return (
    <section className="bg-black min-h-screen px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-10">
          <h1 className="text-white text-[64px] font-bold leading-tight lg:max-w-[50%]">
            Create Impact, No<br />Matter Your Goal
          </h1>
          <p className="font-[400] text-[15px] h-[63px] w-[472px] text-gray-200 lg:max-w-[45%] mt-14">
            Xelta helps creators, brands, and businesses produce impactful videos quickly and easily whether you’re scaling content, telling stories, or growing your audience.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} rounded-2xl overflow-hidden shadow-lg relative min-h-[340px] flex flex-col justify-end`}
            >
              
              <div className="absolute inset-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                
                <div className="absolute top-0 left-0 w-[48%] h-full">
                  <Image
                    src={card.overlay}   
                    alt="overlay"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[70%] bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-lg blur-lg opacity-30" />
              </div>

              
              <div className="relative p-6 z-10">
                <h2 className="text-white text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-200 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
