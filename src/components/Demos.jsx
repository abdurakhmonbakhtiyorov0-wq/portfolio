import { ExternalLink } from "lucide-react";
import barbershop from "../assets/demo-barbershop.webp";
import cafe from "../assets/demo-cafe.webp";
import autoservice from "../assets/demo-autoservice.webp";

const demos = [
  { id: "barbershop", image: barbershop },
  { id: "cafe", image: cafe },
  { id: "autoservice", image: autoservice },
];

function Demos({ t }) {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {t.demos.title}
        </h2>
        <p className="mt-3 max-w-[40rem] text-muted">{t.demos.text}</p>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {demos.map(({ id, image }) => (
            <li key={id}>
              <a
                href={`/demo/${id}/`}
                target="_blank"
                rel="noopener"
                className="group block"
              >
                <div className="overflow-hidden rounded-xl border border-line">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium">
                  {t.demos.items[id].name}
                </h3>
                <p className="text-muted">{t.demos.items[id].text}</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-teal group-hover:text-ink">
                  <ExternalLink size={18} aria-hidden="true" />
                  {t.demos.open}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Demos;
