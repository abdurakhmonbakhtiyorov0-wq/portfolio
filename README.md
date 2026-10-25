# Портфолио — Абдурахмон Бахтиёров

Сайт-портфолио: делаю сайты для малого бизнеса. Русский и узбекский язык.

Живая версия: https://portfolio-xi-jade-72.vercel.app
Связь: [Telegram @Bahtiyorov_Abdurahmon](https://t.me/Bahtiyorov_Abdurahmon)

## Запуск

```bash
npm install
npm run dev
```

## Где что менять

- `src/content.js` — все тексты на русском и узбекском, ссылка на Telegram.
- `src/data/projects.js` — большие проекты (`cases`) и учебные проекты (`practice`). Чтобы у большого проекта появился скриншот, импортируйте картинку и добавьте её в поле `image`; ссылку на живую версию — в поле `live`.
- `src/index.css` — цвета и шрифты.

Стек: React 19, Vite, Tailwind CSS 4.
