import HomeBanner from "@/components/Banner1";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/Impact";
import BlackRectangle from "@/components/rectangle";


export default function Home() {
  return (
    <>
    <HomeBanner/>
    <HeroSection/>
    <HowItWorks/>
    <ImpactSection/>
    <FAQ/>
    <Footer/>
    </>
  );
}
