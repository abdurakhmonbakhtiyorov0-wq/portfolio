// Vercel serverless function: receives the contact form and sends it to Telegram.
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in the Vercel project settings.

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(503).json({ error: "Form is not configured" });
  }

  const body = req.body ?? {};
  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const name = clean(body.name, 80);
  const contact = clean(body.contact, 80);
  const business = clean(body.business, 80);
  const message = clean(body.message, 1000);

  if (!name || !contact) {
    return res.status(400).json({ error: "Name and contact are required" });
  }

  const text = [
    "Новая заявка с портфолио",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    business && `Бизнес: ${business}`,
    message && `Задача: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const tg = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    },
  );

  if (!tg.ok) {
    return res.status(502).json({ error: "Telegram did not accept the message" });
  }
  return res.status(200).json({ ok: true });
}
