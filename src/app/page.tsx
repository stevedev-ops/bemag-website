import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Values } from "@/components/sections/Values";
import { Mission } from "@/components/sections/Mission";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollBridge } from "@/components/sections/ScrollBridge";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollBridge />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <Mission />
        <CaseStudies />
        <Testimonials />
        <Values />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
