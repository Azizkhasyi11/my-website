import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Tilt } from "react-tilt";

export default function Project() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Azizkhasyi11/repos")
      .then((res) => {
        const filteredRepos = res.data.filter((repo) => !repo.fork);
        setRepos(filteredRepos);
        // console.log(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center py-20 transition-colors duration-500"
      id="project"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          I have worked on some projects in my repository. You can check them
          out on my{" "}
          <a
            className="underline text-white"
            href="https://github.com/Azizkhasyi11"
          >
            GitHub
          </a>
          .
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Failed to load projects.</p>
        ) : (
          <div className="mt-5 flex justify-center gap-8 flex-wrap mb-4">
            {repos.slice(0, 4).map((repo) => (
              <Tilt key={repo.id} className="Tilt" options={{ max: 25 }}>
                <Card
                  // key={repo.id}
                  title={repo.name}
                  description={repo.description || "No description available"}
                  // image={repo.owner?.avatar_url || ""}
                  link={repo.html_url}
                  className="hover:shadow-md hover:shadow-white"
                />
              </Tilt>
            ))}
          </div>
        )}
        <Button as={Link} to="/projects">
          See More
        </Button>
      </div>
    </section>
  );
}
