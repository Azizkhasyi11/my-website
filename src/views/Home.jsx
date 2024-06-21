import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";

export default function Home() {

  return (
    <>
      <div className="relative">
        <Hero />
      </div>
      <div className="relative z-10">
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
      </div>
      {/* <section className="flex flex-col items-center justify-center py-20 transition-colors duration-500">
        <CodeBlock code={Code} />
      </section> */}
    </>
  );
}
