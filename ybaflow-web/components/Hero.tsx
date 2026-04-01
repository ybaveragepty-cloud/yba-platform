export default function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            YBAFlow
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Automation systems for real operations
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            YBAFlow builds practical automation, dashboards, and AI-assisted
            workflows for operational businesses that need systems that
            actually work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start a project
            </a>
            <a
              href="#terra"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explore YBA Terra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
