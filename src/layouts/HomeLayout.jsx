import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function HomeLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        <BackTop />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}
