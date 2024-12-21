import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaAngleDown, FaAngleDoubleDown } from "react-icons/fa";
import Image from "next/image";

import config from "@/settings/config";

import Memoji from "../../public/images/memoji.jpeg";

const navbar: string[] = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Header({
    currentPage,
    scrollToPage
}: { currentPage: any, scrollToPage:(pageIndex:number) => void}) {
  const [theme, setTheme] = useState<"dark" | "light">(config.defaultTheme || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="relative z-20">
      <div className="flex justify-center">
        <div
          className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-20 my-6 bg-gray-300 dark:bg-gray-500 dark:hover:shadow-gray-900 dark:shadow-lg dark:hover:shadow-2xl dark:bg-opacity-40 dark:backdrop-blur-sm rounded-2xl bg-opacity-40 backdrop-blur-sm fixed flex items-center justify-between px-4 md:px-2 shadow-lg hover:shadow-2xl transition duration-700 select-none border-2 border-gray-900 dark:border-gray-300 border-opacity-40 dark:border-opacity-40 z-10"
          draggable="false"
        >
          <a 
          onClick={() => {scrollToPage(0); setMenuOpen(false);}}
          className="transition duration-700">
            <Image
              src={Memoji}
              alt="icon"
              width={50}
              height={50}
              draggable="false"
              className="hover:shadow-2xl cursor-pointer rounded-full border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 hover:motion-preset-confetti"
            />
          </a>

          <div className="lg:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <FaAngleDoubleDown size={24} className="text-gray-700 dark:text-gray-300 cursor-pointer motion-preset-fade-lg motion-duration-2000 rotate-180 transition duration-1000" />
            ) : (
              <FaAngleDown size={24} className="text-gray-700 dark:text-gray-300 cursor-pointer motion-preset-fade-lg motion-duration-2000 rotate-0 transition duration-1000" />
            )}
          </div>

          <nav className="hidden lg:flex space-x-4">
            {navbar.map((item, index) => (
              <a
                onClick={() => {scrollToPage(index); setMenuOpen(false);}}
                key={index}
                draggable={false}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 transition font-semibold cursor-pointer hover:scale-105 duration-300 relative underline-offset-4 select-none"
              >
                {item}
              </a>
            ))}
          </nav>

          <button onClick={toggleTheme} className="mr-4">
            {theme === "light" ? (
              <FaMoon
                size={24}
                className="text-gray-700 cursor-pointer hover:text-gray-900 hover:scale-125 transition duration-500"
              />
            ) : (
              <FaSun
                size={24}
                className="text-yellow-500 cursor-pointer hover:text-yellow-600 hover:scale-125 transition duration-500"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-10/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-3/12 bg-gray-300 dark:bg-gray-500 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm rounded-xl p-6 shadow-lg z-40 select-none border-4 border-gray-900 dark:border-gray-300 border-opacity-40 dark:border-opacity-40 motion-preset-blur-down-md motion-duration-2000">
          <nav className="flex flex-col space-y-4">
            {navbar.map((item, index) => (
              <a
                onClick={() => {scrollToPage(index); setMenuOpen(false);}}
                key={index}
                draggable={false}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 transition font-semibold cursor-pointer hover:scale-105 duration-300 relative underline-offset-4 text-center underline rounded-lg backdrop-blur-3xl select-none"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}