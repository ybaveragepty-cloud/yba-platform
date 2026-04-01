export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
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

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            What YBAFlow does
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Practical systems for businesses with real operational pressure
          </h2>
          <p className="mt-4 text-slate-600">
            We focus on usable systems, not abstract ideas. The goal is to
            reduce admin drag, improve visibility, and help teams run more
            efficiently with better workflows and clearer data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Automation systems
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Workflow automation for repetitive operational tasks, handoffs,
              notifications, and admin processes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Operational dashboards
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Clear visibility into the metrics, tasks, and process states that
              matter for day-to-day execution.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              AI-assisted workflows
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Assistants and guided systems that help teams act faster, follow
              process, and reduce decision friction.
            </p>
          </div>
        </div>
      </section>

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

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Start with a real use case
            </h2>
            <p className="mt-4 text-slate-600">
              Tell us what is slowing your operation down. We focus on practical
              systems that reduce friction and improve execution.
            </p>
          </div>

          <form className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Business
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="Business or operation name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="What do you want to automate or improve?"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 YBAFlow</p>
          <p>Powered by YBA Systems</p>
        </div>
      </footer>
    </main>
  );
}