import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

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
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
