import BestImageModels from "@/components/model/BestImageModels";
import BestOpenModels from "@/components/model/BestOpenSource";
import BestVideoModels from "@/components/model/BestVideoModels";
import ModelsShowcaseHero from "@/components/model/ModelsHero";


export default function ModelsShowcase() {

  return (
    <>
    <ModelsShowcaseHero/>
      {/* Other Sections */}
      <section>
        <BestImageModels/>
      </section>
      <section>
        <BestVideoModels/>
      </section>
      <section>
        <BestOpenModels/>
      </section>
    </>
  );
}
