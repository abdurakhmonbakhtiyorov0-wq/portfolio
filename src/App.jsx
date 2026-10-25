import { useEffect, useState } from "react";
import { content } from "./content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Cases from "./components/Cases";
import Practice from "./components/Practice";
import Contact from "./components/Contact";

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved in content) return saved;
  } catch {
    // Storage can be blocked — fall back to the browser language.
  }
  return navigator.language.startsWith("uz") ? "uz" : "ru";
}

function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Not critical: the language just won't be remembered.
    }
  }, [lang, t]);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Steps t={t} />
        <Cases t={t} lang={lang} />
        <Practice t={t} lang={lang} />
      </main>
      <Contact t={t} />
    </>
  );
}

export default App;
