import ClickupHero from "@/components/ClickupHero";
import ClickupFeatures from "@/components/ClickupFeatures";
import ClickupTerra from "@/components/ClickupTerra";
import ClickupFooter from "@/components/ClickupFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Hero Section - Clean ClickUp-style hero with YBA branding */}
      <ClickupHero />

      {/* Features Section - Professional feature grid */}
      <ClickupFeatures />

      {/* Terra Section - YBA Terra showcase with live dashboard */}
      <ClickupTerra />

      {/* Footer - Clean company footer */}
      <ClickupFooter />
    </main>
  );
}