import { useState } from "react";

// Sends the request to /api/lead, which forwards it to Telegram.
// Shown only when VITE_LEAD_FORM=on is set on Vercel (after the bot is configured).
function LeadForm({ t }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-teal";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-teal-soft p-6 sm:p-8">
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
          className="rounded-xl bg-teal px-5 py-3 font-semibold text-white hover:bg-ink disabled:opacity-60"
        >
          {status === "sending" ? t.form.sending : t.form.send}
        </button>
        <p role="status" className={status === "error" ? "text-signal" : "text-teal"}>
          {status === "success" && t.form.success}
          {status === "error" && t.form.error}
        </p>
      </div>
    </form>
  );
}

export default LeadForm;
