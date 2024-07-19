export default function Hero() {
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section
      className="relative flex flex-col items-center justify-center h-[650px] bg-gray-400 text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500"
    >
      <div className="flex items-center justify-center absolute top-24 left-5">
        {/* <select
          className="bg-black text-white border-white rounded-lg"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          title="Select Language"
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
          <option value="jp">日本語</option>
        </select> */}
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="relative text-4xl font-bold text-center z-10 flex flex-col">
          <span className="text-base font-thin font-sansjp">ハロー、世界</span>
          Hello, World!
        </h1>
        <p className="relative text-lg text-gray-500 text-center z-10">
          Welcome to my website
        </p>
        <div className="mt-10 relative z-10 center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-down animate-bounce cursor-pointer select-none fill-black dark:fill-white stroke-black dark:stroke-white"
            alt="Scroll Down"
            onClick={handleScroll}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
