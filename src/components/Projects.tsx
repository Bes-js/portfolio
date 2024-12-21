"use client";

import Image from "next/image";
import SparklesText from "@/components/SparklesText";
import Memoji from "../../public/images/memoji.jpeg";
import config from "@/settings/config";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-8 lg:px-16">

      {/* Memoji Image */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-40 lg:h-40 rounded-full shadow-lg mb-8 z-10">
        <Image
          src={Memoji}
          alt="Memoji"
          width={240}
          height={240}
          draggable={false}
          className="border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 rounded-full hover:motion-preset-shrink select-none"
        />
      </div>

      {/* Title */}
      <div className="flex items-center justify-center mb-8 sm:mb-12">
        <SparklesText
          text="My Projects"
          className="dark:text-gray-300 text-gray-700 select-none text-3xl sm:text-4xl md:text-5xl drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700"
        />
      </div>

      {/* Project Image Cards */}
      <div className="gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center w-full max-w-screen-lg justify-center items-center flex">
        {config.projects.map((project, index) => (
          <a
            key={project.name + index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gray-300 dark:bg-gray-500 dark:bg-opacity-40 dark:backdrop-blur-3xl rounded-2xl bg-opacity-40 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-2xl transition duration-700 select-none border-2 border-gray-900 dark:border-gray-300 border-opacity-40 dark:border-opacity-40"
          >
            <Image
              alt={project.name + index}
              src={project.image}
              width={100}
              height={100}
              className="transition duration-700 hover:motion-preset-shake motion-duration-2000 rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;