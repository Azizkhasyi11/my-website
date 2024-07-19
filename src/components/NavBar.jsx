import { useEffect, useState } from "react";
import { navLinks } from "../data";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Debounce function to limit how often a function is called
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY;
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(link.id);
        }
      }
    });
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const closeMenuOnScroll = () => setIsOpen(false);
      window.addEventListener("scroll", closeMenuOnScroll);
      return () => {
        window.removeEventListener("scroll", closeMenuOnScroll);
      };
    }
  }, [isOpen]);

  return (
    <>
      <nav className="backdrop-blur-lg flex justify-between h-14 items-center p-4 border-b-2 fixed w-full z-40 top-0 left-0 text-white">
        <a className="flex gap-4 items-center" href="/">
          Aziz Khasyi
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
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
        <ul className="hidden md:flex md:items-center md:gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hover:opacity-50 hover:underline transition ${
                  activeSection === link.id ? "text-yellow-500 underline" : ""
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul
        className={`fixed top-[54px] right-0 w-44 text-center space-y-1 flex flex-col border-2 backdrop-blur-lg items-center py-4 z-50 shadow-black shadow-sm md:hidden rounded transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeSection === link.id ? "text-yellow-500 underline" : ""
              }`}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
