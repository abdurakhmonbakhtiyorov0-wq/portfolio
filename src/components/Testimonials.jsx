// Hidden until reviews are added to `testimonials.items` in content.js.
function Testimonials({ t }) {
  if (t.testimonials.items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        {t.testimonials.title}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {t.testimonials.items.map((item) => (
          <figure key={item.name} className="rounded-2xl bg-teal-soft p-6 sm:p-8">
            <blockquote className="text-lg">«{item.text}»</blockquote>
            <figcaption className="mt-5">
              <b className="block">{item.name}</b>
              <span className="text-muted">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
