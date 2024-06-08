import { useEffect } from "react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav className="bg-black flex justify-between items-center p-4 border-b-2 fixed w-full z-40 top-0 left-0 text-white">
        <a className="flex gap-4 items-center" href="/">
          <img
            src="https://avatars.githubusercontent.com/u/74176356?v=4"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          Aziz Khasyi
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul className={`hidden md:flex md:items-center md:gap-4`}>
          <li>
            <a href="#about" className="hover:text-gray-300 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-gray-300 hover:underline">
              Achievements
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <ul
        className={`fixed top-16 right-0 w-1/2 text-center space-y-1 dark:bg-black flex flex-col bg-gray-50 items-center py-4 z-50 shadow-black shadow-sm md:hidden rounded transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="w-full pb-2">
          <a
            href="#about"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            About
          </a>
        </li>
        <li className="w-full pb-2">
          <a
            href="#achievements"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Achievements
          </a>
        </li>
        <li className="w-full pb-2">
          <a
            href="#projects"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Projects
          </a>
        </li>
        <li className="w-full pt-2">
          <a
            href="#contact"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
