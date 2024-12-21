"use client";

import Image from "next/image";
import SparklesText from "@/components/SparklesText";
import Memoji from "../../public/images/memoji_2.jpeg";
import config from "@/settings/config";

const Home = () => {
  return (
    <div
      id="home"
      className="flex-shrink-0 w-screen h-full flex items-center justify-center scroll-snap-align-start bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex flex-col items-center justify-center space-y-8 mb-28">

        {/* Memoji Image */}
        <div className="w-25 h-25 md:w-25 md:h-25 rounded-full shadow-lg mt-8 z-10">
          <Image
            src={Memoji}
            alt="Contact"
            width={200}
            height={200}
            draggable={false}
            className="border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 rounded-full hover:motion-preset-shrink select-none"
          />
        </div>

        {/* Welcome Messages */}
        <SparklesText
          text={config.welcomeMessage.first}
          className="dark:text-gray-300 text-gray-700 select-none font-semibold drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700 motion-preset-oscillate-lg motion-duration-[4500ms]"
        />
        <SparklesText
          text={config.welcomeMessage.second}
          className="dark:text-gray-300 text-gray-700 select-none font-semibold drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700 motion-preset-oscillate-lg motion-duration-[4500ms]"
        />
      </div>
    </div>
  );
};

export default Home;