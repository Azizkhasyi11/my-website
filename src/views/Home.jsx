import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import CodeBlock from "../components/CodeBlock";

export default function Home() {
  const Code = `const name = "Aziz Khasyi";
const title = "Fullstack Developer";
const location = "Indonesia";
const skills = ["JavaScript", "React", "Node.js", "Express.js"];
const tools = ["Git", "GitHub", "VS Code"];
const hobbies = ["Coding", "Gaming", "Reading"];
const socials = {
  GitHub: "https://github.com/Azizkhasyi11",
  LinkedIn: "",
  Twitter: "",
  Instagram: "",
  Discord: "",
};

console.log(name, title, location, skills, tools, hobbies, socials);

export default name, title, location, skills, tools, hobbies, socials;

// Feel free to connect with me!`;

  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Project />
      <section
        className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
        id="contact"
      >
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      {/* <section className="flex flex-col items-center justify-center py-20 transition-colors duration-500">
        <CodeBlock code={Code} />
      </section> */}
    </>
  );
}
