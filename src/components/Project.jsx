import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

export default function Project() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
      id="project"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          I have worked on some projects in my repository. You can check them out on my <a className="underline text-white" href="https://github.com/Azizkhasyi11">GitHub</a>.
        </p>
        <div className="mt-5 flex justify-center gap-8 flex-wrap mb-4">
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
  );
}
