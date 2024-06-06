import { useEffect } from "react";
import ContactForm from "./Form/ContactForm";

export default function Home() {
  useEffect(() => {
    document.title = "Aziz Khasyi";
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-80 bg-black text-white dark:bg-white dark:text-black">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="text-lg text-gray-500">Welcome to my website</p>
      </div>
      <div className="flex flex-col items-center justify-center h-80 bg-white dark:bg-zinc-800 text-black dark:text-white">
        <h1 className="text-4xl font-bold" id="about">
          About
        </h1>
        <p className="text-lg text-gray-500">This is the about section</p>
      </div>
      <ContactForm />
    </>
  );
}
