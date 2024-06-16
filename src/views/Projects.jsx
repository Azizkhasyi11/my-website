import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import BackTop from "../components/BackTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { myProjects } from "../data";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollTo(0, 0, "smooth");
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div className="flex flex-col min-h-screen md:px-10 items-center justify-center dark:bg-zinc-800 dark:text-white">
        <Link to="/" className="absolute top-5 left-5 hover:underline animate-pulse">
          Back
        </Link>
        <div className="flex-grow my-12">
          <div className="select-none">
            <h1 className="text-4xl font-bold text-center">Projects</h1>
            <p className="text-lg mt-4 text-center">
              Here are some of my projects that I have worked on.
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-5 px-4 flex-wrap">
            {myProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.url}
                isFlex
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <BackTop />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
