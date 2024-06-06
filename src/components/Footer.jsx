import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center h-20 bg-black mt-auto">
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
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
