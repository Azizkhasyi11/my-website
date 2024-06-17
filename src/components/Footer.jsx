import { useEffect, useState } from 'react';
import { FaArrowRight, FaGlobe } from "react-icons/fa";
import Banner from "/banner.jpeg";
import { socialLinks } from "../data";
import { FaInstagram, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function SocialLinks() {
  const year = new Date().getFullYear();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const icons = {
    FaGithub,
    FaLinkedin,
    FaX,
    FaInstagram,
    FaDiscord,
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center">
      <div className="bg-zinc-800 min-h-screen max-w-[480px] mx-auto rounded-lg flex-grow pb-2 shadow-lg">
        {/* Banner */}
        <div className="relative overflow-hidden h-48 rounded-t-lg">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-48 object-cover rounded-t-lg transform"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
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
        <div className="sm:p-4 pt-20 p-4">
          <h1 className="text-3xl font-bold">Aziz Khasyi</h1>
          <p className="text-gray-400">Student Programmer</p>
          <p className="text-sm text-gray-300 mt-2">
            Heya! A beginner programmer in web development from Jakarta,
            Indonesia. Still learning and a student. I think... that&apos;s
            enough for a bio... right?
          </p>
          <div className="w-full border-t border-white my-4"></div>
          <div className="mt-4 space-y-4">
            {socialLinks.map(({ id, url, logo, name, description, color }) => {
              const Icon = icons[logo];
              return (
                <a
                  key={id}
                  href={url}
                  className="flex items-center bg-white rounded-lg shadow hover:bg-zinc-600 hover:shadow-lg transition-transform transform hover:scale-105 hover:skew-y-3"
                  aria-label={`Link to ${name}`}
                >
                  <div className="flex-1 bg-zinc-700 hover:bg-zinc-950 p-4 rounded-l-lg">
                    <h2
                      className={`text-lg font-semibold ${color} hover:text-white flex items-center space-x-2`}
                    >
                      <Icon className={`${color} text-xl`} />
                      <span>{name}</span>
                      <p className="text-sm text-gray-600">{description}</p>
                    </h2>
                  </div>
                  <div className="flex items-center justify-center w-10 h-full rounded-r-lg bg-zinc-700">
                    <FaArrowRight className="text-black" />
                  </div>
                </a>
              );
            })}
            <a
              href="/"
              className="flex items-center bg-white rounded-lg shadow hover:bg-zinc-600 hover:shadow-lg transition-transform transform hover:scale-105 hover:skew-y-3"
              aria-label="Link to Website"
            >
              <div className="flex items-center p-4 space-x-4">
                <FaGlobe className="text-white text-xl" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Website
                  </h2>
                  <p className="text-sm text-gray-600">Visit my website</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-full rounded-r-lg bg-zinc-700">
                <FaArrowRight className="text-black" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-4">
          <div className="text-sm text-center">
            <p className="text-white">
              © {year} <a href="https://github.com/Azizkhasyi11">Aziz Khasyi</a>
            </p>
            <p className="text-white">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
