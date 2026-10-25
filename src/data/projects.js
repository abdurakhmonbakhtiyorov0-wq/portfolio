import githubUser from "../assets/Github-search.webp";
import country from "../assets/country.webp";
import validation from "../assets/validation.webp";
import movie from "../assets/movei.webp";
import mastercraft from "../assets/Mastercraft.webp";
import trinity from "../assets/Trinity.webp";
import todo from "../assets/Todo.webp";
import comfyStore from "../assets/Comfy-store.webp";
import ipTracker from "../assets/ip_redactor.webp";
import weather from "../assets/weather.webp";
import aiProject from "../assets/AI_Project.webp";
import multikids from "../assets/multikids.webp";
import novaro from "../assets/novaro.webp";

const repo = (name) =>
  `https://github.com/abdurakhmonbakhtiyorov0-wq/${name}`;

// Big projects. Add `image` (a screenshot import) to show it instead of the title panel.
export const cases = [
  {
    id: "multikids",
    title: "MultiKids",
    tint: "bg-teal-soft",
    stack: ["Next.js", "Express", "PostgreSQL", "three.js", "Playwright"],
    image: multikids,
    repo: repo("multikids"),
    live: "https://multikids-q7zt.vercel.app",
    ru: {
      summary: "Образовательная платформа для 1–11 классов и подготовки к SAT.",
      points: [
        "Больше 1000 вопросов, ответы проверяются на сервере",
        "Кабинет для родителей с PIN-кодом",
        "3D-персонаж для младших классов, устанавливается как приложение",
      ],
    },
    uz: {
      summary: "1–11-sinflar va SATga tayyorgarlik uchun taʼlim platformasi.",
      points: [
        "1000 dan ortiq savol, javoblar serverda tekshiriladi",
        "PIN-kodli ota-onalar kabineti",
        "Kichik sinflar uchun 3D-personaj, ilova sifatida oʻrnatiladi",
      ],
    },
  },
  {
    id: "novaro",
    title: "NOVARO",
    tint: "bg-mist",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    image: novaro,
    repo: repo("Buildings"),
    live: "https://novaro-buildings.vercel.app",
    ru: {
      summary: "Каталог новостроек на русском, узбекском и английском.",
      points: [
        "552 проекта с фильтрами по региону, району, цене и сроку сдачи",
        "Страницы застройщиков и цены по районам",
        "Форма заявки, которая сохраняет заявки в базу",
      ],
    },
    uz: {
      summary: "Rus, oʻzbek va ingliz tillaridagi yangi uylar katalogi.",
      points: [
        "Viloyat, tuman, narx va topshirish muddati boʻyicha filtrli 552 ta loyiha",
        "Quruvchilar sahifalari va tumanlar boʻyicha narxlar",
        "Arizalarni bazaga saqlaydigan forma",
      ],
    },
  },
  {
    id: "lumina",
    title: "Lumina Market",
    tint: "bg-blush",
    stack: ["Next.js", "Express", "PostgreSQL"],
    repo: repo("lumina-market"),
    live: null,
    ru: {
      summary: "Интернет-магазин, где можно и покупать, и продавать.",
      points: [
        "Регистрация и вход",
        "Корзина и оформление заказа",
        "Продавцы добавляют свои товары и видят продажи",
      ],
    },
    uz: {
      summary: "Ham sotib olish, ham sotish mumkin boʻlgan internet-doʻkon.",
      points: [
        "Roʻyxatdan oʻtish va kirish",
        "Savat va buyurtma berish",
        "Sotuvchilar oʻz tovarlarini qoʻshadi va sotuvlarni koʻradi",
      ],
    },
  },
];

export const practice = [
  {
    id: "github-user",
    image: githubUser,
    live: "https://git-hub-user-steel.vercel.app",
    repo: repo("gitHub-user"),
    ru: {
      title: "Поиск пользователей GitHub",
      text: "Находит профиль на GitHub и показывает репозитории, подписчиков и место работы.",
    },
    uz: {
      title: "GitHub foydalanuvchilarini qidirish",
      text: "GitHub profilini topadi va repozitoriylar, obunachilar hamda ish joyini koʻrsatadi.",
    },
  },
  {
    id: "country",
    image: country,
    live: "https://country-search-indol-three.vercel.app",
    repo: repo("country-search"),
    ru: {
      title: "Поиск стран",
      text: "Флаг, население, столица и регион любой страны, с поиском и фильтром.",
    },
    uz: {
      title: "Davlatlarni qidirish",
      text: "Istalgan davlatning bayrogʻi, aholisi, poytaxti va mintaqasi — qidiruv va filtr bilan.",
    },
  },
  {
    id: "validation",
    image: validation,
    live: "https://validation-project-six.vercel.app",
    repo: repo("validation-project"),
    ru: {
      title: "Форма регистрации",
      text: "Проверяет имя, почту, возраст 18+ и совпадение паролей прямо при вводе.",
    },
    uz: {
      title: "Roʻyxatdan oʻtish formasi",
      text: "Ism, email, 18+ yosh va parollar mosligini yozish paytida tekshiradi.",
    },
  },
  {
    id: "movie",
    image: movie,
    live: "https://online-movie-search.vercel.app",
    repo: repo("online-movie-search"),
    ru: {
      title: "Поиск фильмов",
      text: "Ищет фильмы и сохраняет понравившиеся в «Избранное».",
    },
    uz: {
      title: "Filmlarni qidirish",
      text: "Filmlarni qidiradi va yoqqanlarini «Sevimlilar»ga saqlaydi.",
    },
  },
  {
    id: "ai-summarizer",
    image: aiProject,
    live: "https://ai-project-opal-iota.vercel.app",
    repo: repo("Ai-project"),
    ru: {
      title: "AI Text Summarizer",
      text: "Сокращает длинный текст до главного с помощью Google Gemini.",
    },
    uz: {
      title: "AI Text Summarizer",
      text: "Google Gemini yordamida uzun matnni qisqa xulosaga aylantiradi.",
    },
  },
  {
    id: "ip-tracker",
    image: ipTracker,
    live: "https://ip-redactor.vercel.app",
    repo: repo("ip-redactor"),
    ru: {
      title: "IP-трекер",
      text: "Показывает на карте, где находится IP-адрес или сайт.",
    },
    uz: {
      title: "IP-treker",
      text: "IP-manzil yoki sayt qayerda joylashganini xaritada koʻrsatadi.",
    },
  },
  {
    id: "weather",
    image: weather,
    live: "https://weather-app-bice-tau-41.vercel.app",
    repo: repo("weather-app"),
    ru: {
      title: "Погода",
      text: "Температура и скорость ветра в любом городе мира.",
    },
    uz: {
      title: "Ob-havo",
      text: "Dunyoning istalgan shahridagi harorat va shamol tezligi.",
    },
  },
  {
    id: "todo",
    image: todo,
    live: "https://react-tasks-project.vercel.app",
    repo: repo("react-tasks-project"),
    ru: {
      title: "Список задач",
      text: "Задачи с тёмной темой и перетаскиванием для смены порядка.",
    },
    uz: {
      title: "Vazifalar roʻyxati",
      text: "Qorongʻi mavzu va tartibni sudrab oʻzgartirish imkoniyatiga ega vazifalar.",
    },
  },
  {
    id: "trinity",
    image: trinity,
    live: "https://trinity-project-chi.vercel.app",
    repo: repo("trinity-project"),
    ru: {
      title: "Trinity Bank Tower",
      text: "Концепт-сайт 84-этажного небоскрёба в сейсмоопасном городе.",
    },
    uz: {
      title: "Trinity Bank Tower",
      text: "Zilzilaga moyil shahardagi 84 qavatli osmonoʻpar uchun konsept-sayt.",
    },
  },
  {
    id: "mastercraft",
    image: mastercraft,
    live: null,
    repo: repo("Mastercraft-project"),
    ru: {
      title: "Mastercraft",
      text: "Лендинг краудфандинговой кампании с выбором награды.",
    },
    uz: {
      title: "Mastercraft",
      text: "Mukofot tanlash imkoniyatiga ega kraudfanding kampaniyasi lendingi.",
    },
  },
  {
    id: "comfy-store",
    image: comfyStore,
    live: null,
    repo: repo("comfy-store"),
    ru: {
      title: "Comfy Store",
      text: "Интернет-магазин мебели с каталогом товаров.",
    },
    uz: {
      title: "Comfy Store",
      text: "Mahsulotlar katalogiga ega mebel internet-doʻkoni.",
    },
  },
];
