import { FaInstagram, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../data";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  const icons = {
    FaGithub,
    FaLinkedin,
    FaX,
    FaInstagram,
    FaDiscord,
  };

  return (
    <div className="bg-black mt-auto px-3 py-4 sm:border-0 border-t-2">
      <div className="flex flex-col sm:flex-row items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
          <div className="text-sm text-center">
            <p className="text-white">
              © {year} <a href="https://github.com/Azizkhasyi11">Aziz Khasyi</a>
            </p>
            <p className="text-white">All Rights Reserved</p>
          </div>
        </div>
        <div className="w-1/2 sm:w-0 sm:border-l-0 border-t border-white my-2 sm:my-0"></div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 mt-2 sm:mt-0">
          <div className="flex space-x-4 flex-wrap justify-center">
            {socialLinks.map((link) => {
              const Icon = icons[link.logo];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 mb-2"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}