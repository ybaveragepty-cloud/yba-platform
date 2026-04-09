import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Audience from "@/components/Audience";
import TerraIntro from "@/components/TerraIntro";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TerraShowcase from "@/components/TerraShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />

      <Features />

      <TerraShowcase />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Audience />
            <TerraIntro />
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}