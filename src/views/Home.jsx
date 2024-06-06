import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Aziz Khasyi";
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-80 bg-black">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="text-lg text-gray-500">Welcome to my website</p>
      </div>
      <div className="flex flex-col items-center justify-center h-80">
        <h1 className="text-4xl font-bold" id="about">About</h1>
        <p className="text-lg text-gray-500">This is the about section</p>
      </div>
      <div className="flex flex-col items-center justify-center h-80 bg-black">
        <h1 className="text-4xl font-bold" id="contact">Contact</h1>
        <p className="text-lg text-gray-500">This is the contact section</p>
      </div>
    </>
  );
}
