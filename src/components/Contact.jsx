import { Send } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { GITHUB, TELEGRAM } from "../content";

function Contact({ t }) {
  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.contact.text}</p>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-4 text-lg font-semibold text-white hover:bg-ink"
          >
            <Send size={20} aria-hidden="true" />
            {t.telegram}
          </a>
          <p className="mt-3 text-sm text-muted">@Bahtiyorov_Abdurahmon</p>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-muted sm:px-6">
          <p>
            © {new Date().getFullYear()} {t.footer}
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-ink"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
