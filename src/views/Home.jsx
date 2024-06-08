import ContactForm from "./Form/ContactForm";
import Card from "../components/Card";
import arrowDown from "/arrow-down.svg"; // Adjust the path based on your project structure
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
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
      <section className="flex flex-col items-center justify-center h-screen bg-black text-white dark:bg-white dark:text-black transition-colors duration-500">
        <h1 className="text-4xl font-bold text-center">Hello, World!</h1>
        <p className="text-lg text-gray-500 text-center">
          Welcome to my website
        </p>
        <div className="mt-10">
          <img
            src={arrowDown}
            alt="Scroll Down"
            className="animate-bounce cursor-pointer select-none fill-white"
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
          <Card isFlex image="https://placehold.co/400"/>
          <Card isFlex />
          <Card isFlex />
          <Card isFlex />
        </div>
        <Link className="mt-5 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-500" to={'/projects'}>
          See More
        </Link>
      </section>
      <ContactForm id="contact" />
    </>
  );
}
