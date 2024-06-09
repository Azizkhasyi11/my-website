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
    FaDiscord
  };

  return (
    <div className="flex items-center justify-center h-20 bg-black mt-auto px-3">
      <div className="flex flex-col justify-center items-center w-1/2">
        <p className="text-white">© {year} <a href="https://github.com/Azizkhasyi11">Aziz Khasyi</a></p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex space-x-4">
          {socialLinks.map((link) => {
            const Icon = icons[link.logo];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
