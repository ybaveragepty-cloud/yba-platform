export default function Features() {
  return (
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
  );
}
