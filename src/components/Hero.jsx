import arrowDown from "/arrow-down.svg";

export default function Hero() {
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="relative text-4xl font-bold text-center z-10">
          Hello, World!
        </h1>
        <p className="relative text-lg text-gray-500 text-center z-10">
          Welcome to my website
        </p>
        <div className="mt-10 relative z-10 center">
          <img
            src={arrowDown}
            alt="Scroll Down"
            className="animate-bounce cursor-pointer select-none fill-white"
            onClick={handleScroll}
          />
        </div>
      </div>
    </section>
  );
}
