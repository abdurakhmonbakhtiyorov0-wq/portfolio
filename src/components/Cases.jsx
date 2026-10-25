import { Check, ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { cases } from "../data/projects";

function Cases({ t, lang }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        {t.cases.title}
      </h2>

      <div className="mt-10 space-y-14 md:space-y-20">
        {cases.map((item) => {
          const text = item[lang];
          return (
            <article key={item.id} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-2xl border border-line object-cover object-top"
                />
              ) : (
                <div
                  className={`${item.tint} flex aspect-[16/10] w-full items-end rounded-2xl p-6 sm:p-8`}
                >
                  <p className="font-display text-4xl leading-none font-bold break-words sm:text-5xl">
                    {item.title}
                  </p>
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-lg">{text.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {text.points.map((point) => (
                    <li key={point} className="flex gap-3 text-muted">
                      <Check size={20} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-muted">{t.cases.stack}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-3 py-1 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-5 font-semibold">
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal hover:text-ink"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      {t.links.live}
                    </a>
                  )}
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal hover:text-ink"
                  >
                    <GithubIcon size={18} />
                    {t.links.repo}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Cases;
