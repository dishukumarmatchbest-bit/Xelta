import BestImageModels from "@/components/BestImageModels";
import BestOpenModels from "@/components/BestOpenSource";
import BestVideoModels from "@/components/BestVideoModels";
import ModelsShowcaseHero from "@/components/ModelsHero";

export default function ModelsShowcase() {

  return (
    <>
    <ModelsShowcaseHero/>
      {/* Other Sections */}
      <section>
        <BestImageModels />
      </section>
      <section>
        <BestVideoModels />
      </section>
      <section>
        <BestOpenModels />
      </section>
    </>
  );
}
