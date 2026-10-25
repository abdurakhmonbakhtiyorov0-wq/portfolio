import { Send } from "lucide-react";
import { TELEGRAM } from "../content";

function Header({ t, lang, setLang }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-teal font-display text-sm font-bold text-white"
          >
            A
          </span>
          <span className="wavy font-display text-base font-medium">
            {t.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          <a className="hover:text-ink" href="#services">
            {t.nav.services}
          </a>
          <a className="hover:text-ink" href="#work">
            {t.nav.work}
          </a>
          <a className="hover:text-ink" href="#contact">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-line p-0.5 text-sm font-medium">
            {["ru", "uz"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-md px-2.5 py-1 ${
                  lang === code ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.telegram}
            className="flex items-center gap-2 rounded-lg bg-teal px-3 py-2 text-sm font-semibold text-white hover:bg-ink"
          >
            <Send size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{t.telegram}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
