export default function NavBar() {
  return (
    <nav className="backdrop-blur flex justify-between items-center p-4 border-b-2 fixed w-full z-50 top-0 left-0">
      <a className="flex gap-2 items-center" href="/">
        <img
          src="https://avatars.githubusercontent.com/u/74176356?v=4"
          alt="logo"
          className="h-10 w-10 rounded-full"
        />
        Aziz Khasyi
      </a>
      <ul className="flex justify-end items-center gap-4">
        <li>
          <a href="#about" className="hover:text-gray-300 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
