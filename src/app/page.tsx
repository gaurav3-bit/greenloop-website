import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import HowItWorks from "@/components/HowItWorks";
import WhyGreenLoop from "@/components/WhyGreenLoop";
import SustainabilityImpact from "@/components/SustainabilityImpact";
import ServiceArea from "@/components/ServiceArea";
import PickupForm from "@/components/PickupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeServe />
        <HowItWorks />
        <WhyGreenLoop />
        <SustainabilityImpact />
        <ServiceArea />
        <PickupForm />
      </main>
      <Footer />
    </>
  );
}
