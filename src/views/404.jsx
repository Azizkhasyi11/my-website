import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadFull } from "tsparticles";

export default function NotFound() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async (engine) => {
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
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
          options={{
              background: {
                color: {
                  value: "#000000",
                },
              },
              fpsLimit: 150,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  repulse: {
                    distance: 50,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 80000,
                  },
                  value: 500,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
          }}
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
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
