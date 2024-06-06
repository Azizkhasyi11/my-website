import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-800 text-black dark:text-white">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <BackTop />
    </div>
  );
}
