function Steps({ t }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {t.steps.title}
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((step, i) => (
            <li key={step.name}>
              <span
                aria-hidden="true"
                className="font-display text-4xl font-bold text-teal-bright"
              >
                {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.name}</h3>
              <p className="mt-2 text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Steps;
