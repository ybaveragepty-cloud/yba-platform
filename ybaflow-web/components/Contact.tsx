export default function Contact() {
  return (
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
  );
}
