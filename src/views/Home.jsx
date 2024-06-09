import ContactForm from "./Form/ContactForm";
import Card from "../components/Card";
import arrowDown from "/arrow-down.svg"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen bg-black text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="relative text-4xl font-bold text-center z-10">
            Hello, World!
          </h1>
          <p className="relative text-lg text-gray-500 text-center z-10">
            Welcome to my website
          </p>
          <div className="mt-10 relative z-10 center">
            <img
              src={arrowDown}
              alt="Scroll Down"
              className="animate-bounce cursor-pointer select-none fill-white"
              onClick={handleScroll}
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
        id="about"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
            This is the about section
          </p>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
        id="achievements"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Achievements</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
            This is the achievements section
          </p>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
        id="projects"
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
            This is the projects section
          </p>
          <div className="mt-5 flex justify-center gap-5 px-4 flex-wrap mb-4">
            <Card isFlex image="https://placehold.co/400" />
            <Card isFlex />
            <Card isFlex />
            <Card isFlex />
          </div>
          <Button as={Link} to="/projects">
            See More
          </Button>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
        id="contact"
      >
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
