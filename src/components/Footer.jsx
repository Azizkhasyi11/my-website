import { FaTwitter, FaInstagram, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center h-20 bg-black mt-auto px-3">
      <div className="flex flex-col justify-center items-center w-1/2">
        <p className="text-white">© {year} <a href="https://github.com/Azizkhasyi11">Aziz Khasyi</a></p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex space-x-4">
          <a
            href="https://github.com/Azizkhasyi11"
            className="text-white hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/azizkhasyi11"
            className="text-white hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a href="https://instagram.com/aziz_khasyi11" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://discord.com/users/588313501169352718" className="text-white hover:text-gray-300">
            <FaDiscord />
          </a>
          <a href="https://linkedin.com/in/azizkhasyi" className="text-white hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
