const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
];

function About({ t }) {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_2fr] md:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {t.about.title}
        </h2>
        <div className="max-w-[40rem]">
          {t.about.text.map((p) => (
            <p key={p} className="mb-4 text-lg">
              {p}
            </p>
          ))}
          <h3 className="mt-8 text-sm font-semibold text-muted">
            {t.about.skills}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-3 py-1 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
