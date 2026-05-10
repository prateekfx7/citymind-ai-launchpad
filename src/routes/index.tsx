import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexora — The Future of CityMind AI" },
      {
        name: "description",
        content:
          "Empower citizens with intelligent AI systems that analyze, adapt, and deliver real-time city insights for smarter urban living.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Approach />
    </div>
  );
}
