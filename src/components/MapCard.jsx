import { Globe, Navigation, Phone, Star } from "lucide-react";

// A business listing like on Google Maps: first without a website, then the "Сайт" button appears.
function MapCard({ t }) {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-28px_rgb(21_35_59/0.35)]">
        <svg
          viewBox="0 0 400 150"
          className="block h-36 w-full bg-[#eef2f5]"
          aria-hidden="true"
        >
          <g fill="#e2e8ee">
            <rect x="12" y="12" width="96" height="52" rx="4" />
            <rect x="12" y="86" width="96" height="52" rx="4" />
            <rect x="140" y="12" width="120" height="52" rx="4" />
            <rect x="292" y="12" width="96" height="52" rx="4" />
            <rect x="292" y="86" width="96" height="52" rx="4" />
          </g>
          <rect x="140" y="86" width="120" height="52" rx="4" fill="#d6ece4" />
          <g stroke="#ffffff" strokeWidth="14">
            <path d="M0 75 H400" />
            <path d="M124 0 V150" />
            <path d="M276 0 V150" />
          </g>
          <g transform="translate(200 40)">
            <path
              d="M0 34 C-4 24 -16 16 -16 4 a16 16 0 0 1 32 0 C16 16 4 24 0 34z"
              fill="var(--color-signal)"
            />
            <circle cy="4" r="6" fill="#fff" />
          </g>
        </svg>

        <div className="p-5">
          <p className="text-lg font-semibold">{t.business}</p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <span className="font-medium text-ink">4.8</span>
            <span className="flex text-[#f5b400]" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span>({t.reviews})</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {t.category}, <span className="font-medium text-teal">{t.hours}</span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium" aria-hidden="true">
            <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-teal">
              <Navigation size={15} /> {t.route}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-teal">
              <Phone size={15} /> {t.call}
            </span>
            <span className="site-appear flex items-center gap-1.5 rounded-full bg-teal px-3 py-1.5 text-white">
              <Globe size={15} /> {t.site}
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-muted">{t.caption}</figcaption>
    </figure>
  );
}

export default MapCard;
