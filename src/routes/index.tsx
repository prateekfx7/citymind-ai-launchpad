import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Features } from "@/components/Features";
import { SOS } from "@/components/SOS";
import { Architecture } from "@/components/Architecture";
import { TechStack } from "@/components/TechStack";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CityMind AI — Intelligence for Every Citizen" },
      {
        name: "description",
        content:
          "CityMind AI brings traffic, waste, parking, weather, energy and SOS into one citizen-first AI platform powered by React, Next.js and n8n.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background scroll-smooth">
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Approach />
      <Features />
      <SOS />
      <Architecture />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}
