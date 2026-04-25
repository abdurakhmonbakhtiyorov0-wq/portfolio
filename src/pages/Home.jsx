import React, { useEffect, useState } from "react";
import Todo_logo from "../assets/Todo.png";
import github_user from "../assets/Github-search.png";
import Comfy_store from "../assets/Comfy-store.png";
import validation from "../assets/validation.png";
import movei from "../assets/movei.png";
import country from "../assets/country.png";
import Mastercraft from "../assets/Mastercraft.png";
import Trinity from "../assets/Trinity.png";
import ip_redactor from "../assets/ip_redactor.png";
import weather from "../assets/weather.png";
import { Link } from "react-router";
import Project from "../components/Project";
import { X } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Github user search app",
    diff: "3",
    level: "INTERMEDIATE",
    tags: ["React Js", "Css"],
    description:
      "A app that helps find a GitHub user and provides a wealth of information about them, including their company of work.",
    image: `${github_user}`,
    links: {
      live: "https://git-hub-user-steel.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/gitHub-user",
      try: "#",
    },
  },
  {
    id: 2,
    title: "Country search app",
    diff: "3",
    level: "INTERMEDIATE",
    tags: ["React Js", "Css"],
    description:
      "This app helps to find out a lot of information about what is included in the flag of the population of many countries that exist at the moment.",
    image: `${country}`,
    links: {
      live: "https://country-search-indol-three.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/country-search",
      try: "#",
    },
  },
  {
    id: 3,
    title: "Form validation app",
    diff: "2",
    level: "JUNIOR",
    tags: ["React Js", "Css"],
    description:
      "A React registration form with data validation (name, email, age 18+) and password matching. Real-time data display and form clearing functionality are implemented.",
    image: `${validation}`,
    links: {
      live: "https://validation-project-six.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/validation-project",
      try: "#",
    },
  },
  {
    id: 4,
    title: "Movei search app",
    diff: "3",
    level: "INTERMEDIATE",
    tags: ["React Js", "Css"],
    description:
      "A React project that helps you find any movie and add it to your favorite movies page and save it ",
    image: `${movei}`,
    links: {
      live: "https://online-movie-search.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/online-movie-search",
      try: "#",
    },
  },
  {
    id: 5,
    title: "Online Mastercraft store",
    diff: "2",
    level: "JUNIOR",
    tags: ["React Js", "Css"],
    description:
      "A modern landing page for a crowdfunding campaign. The project emphasizes complex layout, state management (reward selection), and adaptability. ",
    image: `${Mastercraft}`,
    links: {
      live: "https://mastercraft-project.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/Mastercraft-project",
      try: "#",
    },
  },
  {
    id: 6,
    title: "Trinity Bank Tover",
    diff: "2",
    level: "JUNIOR",
    tags: ["React Js", "Css"],
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquakefrequency. ",
    image: `${Trinity}`,
    links: {
      live: "https://trinity-project-chi.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/trinity-project",
      try: "#",
    },
  },
  {
    id: 7,
    title: "Todo app",
    diff: "3",
    level: " INTERMEDIATE",
    tags: ["React Js", "Css"],
    description:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    image: `${Todo_logo}`,
    links: {
      live: "https://react-tasks-project.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/react-tasks-project",
      try: "#",
    },
  },
  {
    id: 8,
    title: "Comfy store",
    diff: "5",
    level: " SENIOR",
    tags: ["React Js", "Css"],
    description:
      "A curated selection of furniture for those who appreciate clean lines and eco-friendly materials. Create a space you'll love to live in.",
    image: `${Comfy_store}`,
    links: {
      live: "https://online-store-rust-tau.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/online-store",
      try: "#",
    },
  },
  {
    id: 9,
    title: "Ip redactor",
    diff: "3",
    level: " INTERMEDIATE",
    tags: ["React Js", "Css"],
    description:
      "A  React project that may find every places in the world and you may find the places when a much popular company is located.",
    image: `${ip_redactor}`,
    links: {
      live: "https://ip-redactor.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/ip-redactor",
      try: "#",
    },
  },
  {
    id: 10,
    title: "Weather app",
    diff: "2",
    level: " JUNIOR",
    tags: ["React Js", "Css"],
    description:
      "A  React project with this app you may see a wether of every country you want as well you can see a wind speed or temperature.",
    image: `${weather}`,
    links: {
      live: "https://weather-app-bice-tau-41.vercel.app",
      repo: "https://github.com/abdurakhmonbakhtiyorov0-wq/weather-app",
      try: "#",
    },
  },
];

function Home() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    document.body.style.overflow = about ? "hidden" : "unset";
  }, [about]);
  const diffStyles = {
    5: {
      text: "text-red-500",
      bg: "bg-red-500",
      border: "border-red-500",
    },
    2: {
      text: "text-[#aad742]",
      bg: "bg-[#aad742]",
      border: "border-[#aad742]",
    },
    3: {
      text: "text-[#f1b604]",
      bg: "bg-[#f1b604]",
      border: "border-[#f1b604]",
    },
  };
  const styles = diffStyles[about?.diff];

  return (
    <div className="my-12 ">
      <div className="container-large">
        <h1 className="my-8 text-3xl font-bold text-center">
          All Frontend Mentor Projects
        </h1>
        <p className="capitalize font-medium text-xl text-center">
          current count : <span className="logo">{Projects.length}</span>
        </p>
        {about && (
          <div className="fixed inset-0 z-40  flex p-4 items-center justify-center overflow-y-auto">
            {" "}
            <button
              onClick={() => setAbout(null)}
              className="absolute z-130 flex justify-center items-center bg-white right-8 top-8  w-16.25 h-16.25 rounded-full"
            >
              <X />
            </button>{" "}
            <div className="absolute z-130 w-290 top-30 flex bg-white rounded-sm  max-h-screen ">
              <img className="w-200! " src={about.image} alt="" />
              <div className="bg-white w-full flex flex-col py-6 px-8 justify-center items-start ">
                <h1 className="text-2xl font-medium">{about.title}</h1>
                <div className="flex justify-between w-full mt-8 items-center">
                  {" "}
                  <div className="uppercase flex gap-2 font-medium">
                    <h3 className="text-yellow-500 ">{about.tags[0]}</h3>
                    <h3 className="text-[#6abecd]">{about.tags[1]}</h3>
                  </div>
                  <div className={`border rounded-sm  flex  ${styles.border}`}>
                    <p
                      className={`${styles.bg} px-2 -ml-px text-white
                       font-medium rounded-l-sm`}
                    >
                      {about.diff}
                    </p>
                    <p className={`text-center px-2 ${styles.text}`}>
                      {about.level}
                    </p>
                  </div>
                </div>{" "}
                <p className="my-8">{about.description}</p>
                <div className="flex gap-5 justify-end">
                  <Link to={about.links.live} className="text-start links p-2">Live</Link>
                  <Link to={about.links.repo} className="text-start links p-2">Repo</Link>
                </div>
              </div>
            </div>{" "}
          </div>
        )}
        <div className="flex flex-wrap gap-6">
          {Projects.map((item) => {
            const styles = diffStyles[item.diff];
            return (
              <div
                key={item.id}
                className="overflow-hidden w-148 rounded-xl flex  flex-col  mt-10 cursor-pointer border border-[#d6d6d6]"
              >
                <div className="overflow-hidden  h-96.75">
                  <img
                  onClick={() => setAbout(item)}
                    className="object-cover h-96.75 w-full transition duration-300 hover:scale-105"
                    src={item.image}
                    alt=""
                  />
                </div>{" "}
                <div className="py-6 px-8">
                  <h1 className="text-2xl text-start font-medium title">
                    {item.title}
                  </h1>
                  <div className="flex justify-between  mt-4 items-center">
                    {" "}
                    <div className="uppercase flex gap-2 font-medium">
                      <h3 className="text-yellow-500 ">{item.tags[0]}</h3>
                      <h3 className="text-[#6abecd]">{item.tags[1]}</h3>
                    </div>
                    <div
                      className={`border rounded-sm  flex  ${styles.border}`}
                    >
                      <p
                        className={`${styles.bg} px-2 -ml-px text-white
                       font-medium rounded-l-sm`}
                      >
                        {item.diff}
                      </p>
                      <p className={`text-center px-2 ${styles.text}`}>
                        {item.level}
                      </p>
                    </div>
                  </div>{" "}
                  <p
                    onClick={() => setAbout(item)}
                    className="text-gray-600 hover:underline"
                  >
                    Click on the panel for more details
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
