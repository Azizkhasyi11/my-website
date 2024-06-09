import { useEffect } from "react";
import { useState } from "react";
import { navLinks } from "../data";

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
      <nav className="backdrop-blur-lg flex justify-between h-14 items-center p-4 border-b-2 fixed w-full z-40 top-0 left-0 text-white">
        <a className="flex gap-4 items-center" href="/">
          {/* <img
            src="https://avatars.githubusercontent.com/u/74176356?v=4"
            alt="logo"
            className="h-10 w-10 rounded-full"
          /> */}
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
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="hover:text-gray-300 hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul
        className={`fixed top-[54px] right-[-2px] w-44 text-center space-y-1flex flex-col border-2 backdrop-blur-lg items-center py-4 z-50 shadow-black shadow-sm md:hidden rounded transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              className="block rounded-lg px-4 py-2 text-sm font-medium"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
