import { useEffect, useState } from "react";
import ContactForm from "./Form/ContactForm";
import Card from "../components/Card";
import arrowDown from "/arrow-down.svg"; // Adjust the path based on your project structure
import { Helmet } from "react-helmet";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="A simple portfolio website built with Vite and React."
        />
      </Helmet>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <section className="flex flex-col items-center justify-center h-screen bg-black text-white dark:bg-white dark:text-black transition-colors duration-500">
        <h1 className="text-4xl font-bold text-center">Hello, World!</h1>
        <p className="text-lg text-gray-500 text-center">Welcome to my website</p>
        <div className="mt-10">
          <img
            src={arrowDown}
            alt="Scroll Down"
            className="animate-bounce cursor-pointer select-none"
            onClick={handleScroll}
          />
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center h-80 bg-white text-black dark:bg-zinc-800 dark:text-white transition-colors duration-500"
        id="about"
      >
        <h1 className="text-4xl font-bold text-center">About</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          This is the about section
        </p>
      </section>
      <section
        className="flex flex-col items-center justify-center h-80 bg-white text-black dark:bg-zinc-800 dark:text-white transition-colors duration-500"
        id="achievements"
      >
        <h1 className="text-4xl font-bold text-center">Achievements</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          This is the achievements section
        </p>
      </section>
      <section
        className="flex flex-col items-center justify-center py-20 bg-white text-black dark:bg-zinc-800 dark:text-white transition-colors duration-500"
        id="projects"
      >
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          This is the projects section
        </p>
        <div className="mt-5 flex justify-center gap-5 px-4 flex-wrap">
          <Card isFlex />
          <Card isFlex />
          <Card isFlex />
          <Card isFlex />
        </div>
      </section>
      <ContactForm id="contact" />
    </>
  );
}
