import { useEffect, useRef, useState } from "react";

// Sends the request to /api/lead, which forwards it to Telegram.
// Shown only when VITE_LEAD_FORM=on is set on Vercel (after the bot is configured).
function LeadForm({ t }) {
  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");
  // Keep the card the same height when the form is swapped for the message.
  const [height, setHeight] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    if (status === "success") titleRef.current?.focus();
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.status);
      setHeight(form.offsetHeight);
      setName(data.name.trim().split(/\s+/)[0]);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{ minHeight: height }}
        className="lead-success relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-teal-soft p-6 text-center sm:p-8"
      >
        <div className="lead-halo relative rounded-full" aria-hidden="true">
          <span className="lead-confetti">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} style={{ "--i": i }} />
            ))}
          </span>
          <svg viewBox="0 0 96 96" className="lead-check h-24 w-24">
            <circle cx="48" cy="48" r="44" className="lead-check-ring" />
            <path d="M30 49 L43 62 L67 36" className="lead-check-mark" />
          </svg>
        </div>

        <h3
          ref={titleRef}
          tabIndex={-1}
          className="lead-rise mt-6 font-display text-2xl font-bold outline-none"
          style={{ "--d": "0.9s" }}
        >
          {t.form.successTitle}
        </h3>
        {name && (
          <p className="lead-rise mt-2 text-lg font-semibold text-teal" style={{ "--d": "1.05s" }}>
            {t.form.successThanks.replace("{name}", name)}
          </p>
        )}
        <p className="lead-rise mt-3 max-w-sm text-muted" style={{ "--d": "1.2s" }}>
          {t.form.successText}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="lead-rise mt-8 text-sm font-medium text-teal underline decoration-teal-bright underline-offset-4 hover:text-ink"
          style={{ "--d": "1.4s" }}
        >
          {t.form.again}
        </button>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-teal";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-teal-soft p-6 sm:p-8 ${status === "sending" ? "lead-sending" : ""}`}
    >
      <h3 className="font-display text-xl font-bold">{t.form.title}</h3>
      <div className="mt-6 grid gap-4">
        <label className="font-medium">
          {t.form.name}
          <input name="name" required maxLength={80} autoComplete="name" className={field} />
        </label>
        <label className="font-medium">
          {t.form.contact}
          <input name="contact" required maxLength={80} autoComplete="tel" className={field} />
        </label>
        <label className="font-medium">
          {t.form.business}
          <input name="business" maxLength={80} placeholder={t.form.businessHint} className={field} />
        </label>
        <label className="font-medium">
          {t.form.message}
          <textarea name="message" rows={3} maxLength={1000} className={field} />
        </label>
        {/* Hidden from people; bots that fill every field get ignored by the API. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-white hover:bg-ink disabled:opacity-70"
        >
          {status === "sending" && <span className="lead-spinner" aria-hidden="true" />}
          {status === "sending" ? t.form.sending : t.form.send}
        </button>
        <p role="status" className="text-signal">
          {status === "error" && t.form.error}
        </p>
      </div>
    </form>
  );
}

export default LeadForm;
