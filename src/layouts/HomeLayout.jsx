import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-zinc-800 dark:text-white">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
