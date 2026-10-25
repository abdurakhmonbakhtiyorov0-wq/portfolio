import { Send } from "lucide-react";
import { TELEGRAM } from "../content";
import MapCard from "./MapCard";

function Hero({ t }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-muted">{t.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-white hover:bg-ink"
            >
              <Send size={18} aria-hidden="true" />
              {t.telegram}
            </a>
            <a
              href="#work"
              className="rounded-xl border border-line bg-white px-5 py-3 font-semibold hover:border-ink"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <MapCard t={t.map} />
      </div>
    </section>
  );
}

export default Hero;
