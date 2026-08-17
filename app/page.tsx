import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LinkBar from "@/components/LinkBar";
import OurPlatform from "@/components/OurPlatform";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background">

      <Hero />
      <Stats />
      <OurPlatform />
      <Testimonials />
      <Footer />
    </main>
  );
}
