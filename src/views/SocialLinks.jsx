import { FaArrowRight, FaGlobe } from "react-icons/fa";
import Banner from "/banner.jpeg";
import { socialLinks } from "../data";
import { FaInstagram, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useParallax } from "react-scroll-parallax";
import { Tilt } from "react-tilt";

export default function SocialLinks() {
  const year = new Date().getFullYear();

  const { ref } = useParallax({ speed: 15 });

  const icons = {
    FaGithub,
    FaLinkedin,
    FaX,
    FaInstagram,
    FaDiscord,
  };

  return (
    <div className="min-h-screen text-white flex flex-col animated-background">
      <div className="relative bg-zinc-800 min-h-screen max-w-[480px] mx-auto rounded flex-grow pb-2">
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10 blur-sm"></div>
        {/* Banner */}
        <div className="relative z-20">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-48 object-cover rounded-t"
          />
          {/* Profile Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://avatars.githubusercontent.com/u/74176356?v=4"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-zinc-800"
            />
          </div>
        </div>
        {/* Content */}
        <div className="sm:p-3 p-3 relative z-20" ref={ref}>
          <h1 className="text-2xl font-bold">Aziz Khasyi</h1>
          <p className="text-gray-400">Student Programmer</p>
          <p className="text-sm text-gray-300 mt-2">
            Heya! A beginner programmer in web development. From Jakarta,
            Indonesia. Still learning and a student. I think... That&apos;s
            enough for bio... Right?
          </p>
          <div className="w-full border-t border-white my-2"></div>
          <div className="mt-4 space-y-4">
            {socialLinks.map((link) => {
              const Icon = icons[link.logo];
              return (
                <Tilt key={link.id} className="Tilt" options={{ max: 25 }}>
                  <a
                    href={link.url}
                    className="flex items-center bg-white rounded-lg shadow hover:bg-zinc-600 hover:shadow-lg transition-all"
                  >
                    <div className="flex-1 bg-zinc-700 hover:bg-black p-4 rounded-l">
                      <h2
                        className={`text-lg font-semibold ${link.color} hover:text-white flex gap-2 items-center`}
                      >
                        <Icon /> {link.name}
                      </h2>
                      <p className="text-sm text-gray-300">
                        {link.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-10 h-full rounded-r">
                      <FaArrowRight className="text-black" />
                    </div>
                  </a>
                </Tilt>
              );
            })}
            <Tilt className="Tilt" options={{ max: 25 }}>
              <a
                href="/"
                className="flex items-center bg-white rounded-lg shadow-white hover:bg-zinc-600 hover:shadow-lg transition-all"
              >
                <div className="flex-1 bg-zinc-700 hover:bg-black p-4 rounded-l">
                  <h2 className="text-lg font-semibold hover:text-white flex gap-2 items-center">
                    <FaGlobe />
                    Website
                  </h2>
                  <p className="text-sm text-gray-300">Visit my website</p>
                </div>
                <div className="flex items-center justify-center w-10 h-full rounded-r ">
                  <FaArrowRight className="text-black" />
                </div>
              </a>
            </Tilt>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-4 relative z-20">
          <div className="text-sm text-center">
            <p className="text-white">
              © {year} <a href="https://github.com/Azizkhasyi11">Aziz Khasyi</a>
            </p>
            <p className="text-white">All Rights Reserved</p>
          </div>
        </div>
      </div>
      <style>{`
        .animated-background {
          background: linear-gradient(135deg, #1a1a1d, #4e4e50, #6f2232, #950740, #c3073f);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite, pulse 5s infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
