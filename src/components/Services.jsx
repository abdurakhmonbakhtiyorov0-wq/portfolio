import { Send } from "lucide-react";
import { TELEGRAM } from "../content";

function Services({ t }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        {t.services.title}
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.services.items.map((item) => (
          <div key={item.name} className="border-t-2 border-teal pt-5">
            <h3 className="font-display text-lg font-medium">{item.name}</h3>
            <p className="mt-3 text-muted">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-6 rounded-2xl bg-teal-soft p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[44rem]">
          <p>{t.services.included}</p>
          <p className="mt-2 font-semibold">{t.services.price}</p>
        </div>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-white hover:bg-ink"
        >
          <Send size={18} aria-hidden="true" />
          {t.telegram}
        </a>
      </div>
    </section>
  );
}

export default Services;
