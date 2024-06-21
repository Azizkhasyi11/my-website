import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadFull } from "tsparticles";
import NotFoundParticles from "../config/404Particles";

export default function NotFound() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    document.title = "404 - Not Found";
    
    const initParticles = async (engine) => {
      await loadFull(engine);
    };

    initParticlesEngine(initParticles).then(() => {
      setInit(true);
    });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen bg-black select-none overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={NotFoundParticles}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-black text-white">
            404
          </h1>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-400">
            We can&apos;t find that page.
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded  px-5 py-3 text-sm font-medium focus:outline-none focus:ring bg-white text-black hover:bg-gradient-to-r hover:from-black hover:to-white hover:text-white focus:ring-gray-800"
            aria-label="Go back home"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
