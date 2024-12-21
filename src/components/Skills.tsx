"use client";

import SparklesText from "@/components/SparklesText";
import Memoji from "../../public/images/memoji_4.jpeg";
import config from "@/settings/config";
import Image from "next/image";
import { getIcon } from "@/lib/utils";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900">
      {/* Title */}
      <div className="flex items-center justify-center mb-8 sm:mb-12">
        <SparklesText
          text="My Skills"
          className="dark:text-gray-300 text-gray-700 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700 select-none"
        />
      </div>

      {/* Memoji Image */}
      <div className="w-35 h-35 sm:w-30 sm:h-30 md:w-35 md:h-35 rounded-full shadow-lg mb-8 z-10">
        <Image
          src={Memoji}
          alt="Contact"
          width={150}
          height={150}
          draggable={false}
          className="border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 rounded-full hover:motion-preset-shrink select-none"
        />
      </div>

      {/* Skill Cards */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center w-full max-w-screen-lg">
        {config.skills.map((skill, index) => (
          <div
            key={skill + index.toString()}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gray-300 dark:bg-gray-500 dark:hover:shadow-gray-900 dark:shadow-lg dark:hover:shadow-2xl dark:bg-opacity-40 dark:backdrop-blur-3xl rounded-2xl bg-opacity-40 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-2xl transition duration-700 select-none border-2 border-gray-900 dark:border-gray-300 border-opacity-40 dark:border-opacity-40"
          >
            <Image
              alt={skill + index.toString()}
              src={getIcon(skill)}
              width={50}
              height={50}
              className="transition duration-700 hover:motion-preset-shake motion-duration-2000"
            />
          </div>
        ))}
      </div>
    </div>
  );
}