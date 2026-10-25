import { useState } from "react";
import { practice } from "../data/projects";
import ProjectDialog from "./ProjectDialog";

function Practice({ t, lang }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {t.practice.title}
        </h2>
        <p className="mt-3 max-w-[40rem] text-muted">{t.practice.text}</p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practice.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setOpen(project)}
                className="group block w-full text-left"
              >
                <div className="overflow-hidden rounded-xl border border-line">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 font-semibold group-hover:text-teal">
                  {project[lang].title}
                </p>
                <p className="text-sm text-muted">{t.practice.more}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProjectDialog
        project={open}
        lang={lang}
        t={t}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}

export default Practice;
