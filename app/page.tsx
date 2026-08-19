"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurPlatform from "@/components/OurPlatform";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { useAppSelector } from "@/libs/hooks";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null;

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
