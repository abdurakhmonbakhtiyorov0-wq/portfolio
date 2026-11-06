import { ChevronDown } from "lucide-react";

function Faq({ t }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {t.faq.title}
        </h2>
        <div className="border-t border-line">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 text-teal transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="max-w-[40rem] pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
