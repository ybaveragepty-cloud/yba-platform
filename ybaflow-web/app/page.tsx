import PremiumHero from "@/components/PremiumHero";
import FlowExplanation from "@/components/FlowExplanation";
import TerraIntroduction from "@/components/TerraIntroduction";
import TerraAI from "@/components/TerraAI";
import SystemConnections from "@/components/SystemConnections";
import ComingSoon from "@/components/ComingSoon";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-exo overflow-x-hidden">
      {/* Hero Section - Control the Flow of Intelligent Systems */}
      <PremiumHero />

      {/* What is YBA Flow - Platform explanation */}
      <FlowExplanation />

      {/* Introducing YBA Terra - First real-world system */}
      <TerraIntroduction />

      {/* Terra AI - The intelligence differentiator */}
      <TerraAI />

      {/* How It All Connects - Flow → Terra → Terra AI */}
      <SystemConnections />

      {/* Coming Soon - Future YBA products */}
      <ComingSoon />

      {/* Final CTA - Don't Build Average Systems */}
      <FinalCTA />
    </main>
  );
}