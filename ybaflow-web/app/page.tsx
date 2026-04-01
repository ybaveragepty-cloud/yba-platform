import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />

      <Features />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Who it is for
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Built for operators, not spectators
              </h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>Farms and agri-operations</li>
                <li>Small and medium operational businesses</li>
                <li>Teams managing recurring workflows and handoffs</li>
                <li>Businesses that need automation without enterprise bloat</li>
              </ul>
            </div>

            <div
              id="terra"
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                First product
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                YBA Terra
              </h3>
              <p className="mt-4 text-slate-600">
                YBA Terra is the first vertical product built on YBAFlow. It is
                being designed for farm and production operations that need
                better task tracking, inventory visibility, workflow control,
                and operational reporting.
              </p>
              <p className="mt-4 text-slate-600">
                The long-term direction includes structured farm operations,
                automation, dashboards, and AI assistance built on one shared
                system foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 YBAFlow</p>
          <p>Powered by YBA Systems</p>
        </div>
      </footer>
    </main>
  );
}
