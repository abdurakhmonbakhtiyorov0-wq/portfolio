import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import GithubIcon from "./GithubIcon";

function ProjectDialog({ project, lang, t, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (project) ref.current.showModal();
    else ref.current.close();
  }, [project]);

  const text = project?.[lang];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-2xl bg-white p-0 text-ink"
    >
      {project && (
        <div>
          <img
            src={project.image}
            alt={text.title}
            className="aspect-video w-full object-cover object-top"
          />
          <div className="p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold sm:text-2xl">{text.title}</h3>
            <p className="mt-3 text-muted">{text.text}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 font-semibold">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal hover:text-ink"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  {t.links.live}
                </a>
              )}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-ink"
              >
                <GithubIcon size={18} />
                {t.links.repo}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.links.close}
            className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}

export default ProjectDialog;
