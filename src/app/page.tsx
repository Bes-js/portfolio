"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Background from "../../public/svg/background.svg";
import DarkBackground from "../../public/svg/dark-background.svg";
import Memoji from "../../public/images/memoji_2.jpeg";

import config from "@/settings/config";

import Home from "@/components/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparklesText from "@/components/SparklesText";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import NavigationButtons from "@/components/NavigationButtons";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToPage = (pageIndex: number) => {
    
    if (typeof pageIndex !== "number") pageIndex = 0;
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: width * pageIndex,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  return (
    <div className="relative">

      {/* Background Images */}
      <Image
        alt="background"
        className="fixed w-full h-full flex dark:hidden transition duration-700 motion-preset-fade-lg motion-duration-2000 inset-0 object-cover select-none"
        src={Background}
        draggable="false"
      />
      <Image
        alt="dark-background"
        className="fixed w-full h-full hidden dark:flex transition duration-700 motion-preset-fade-lg motion-duration-2000 inset-0 object-cover select-none"
        src={DarkBackground}
        draggable="false"
      />

      <Header 
      currentPage={currentPage}
      scrollToPage={scrollToPage}
      />

      {/* Scrollable Pages */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-snap-x-mandatory scroll-smooth h-screen"
      >


        {/* Home Page */}
        <div id="home" className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900">
          <Home />
        </div>

        {/* About Page */}
        <div id="about" className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900">
         <About />
        </div>

        {/* Projects Page */}
        <div id="projects" className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900">
         <Projects />
        </div>


        {/* Skills Page */}
        <div id="skills" className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900">
          <Skills />
        </div>


      {/* Contact Page */}
      <div id="contact" className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900">
          <Contact />
        </div>



      </div>

      {/* Navigation Dots */}
      <NavigationButtons
      currentPage={currentPage}
      scrollToPage={scrollToPage}
      />

      <Footer />
    </div>
  );
}