import Image from "next/image";
import config from "@/settings/config";

import Memoji from "../../public/images/memoji_3.jpeg";
import SparklesText from "@/components/SparklesText";

const About = () => {
  return (
    <div
      id="about"
      className="flex-shrink-0 w-screen min-h-screen flex flex-col items-center justify-center scroll-snap-align-start px-4 py-10 md:px-8 lg:px-16 z-10"
    >
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Memoji Image */}
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full hover:motion-preset-shake">
          <Image
            src={Memoji}
            alt="About Me"
            width={240}
            height={240}
            draggable={false}
            className="border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 rounded-full select-none"
          />
        </div>

        {/* Description */}
        <div className="flex-1 text-center md:text-left space-y-6">

          {/* Title */}
          <SparklesText
          text="About Me"
          className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-gray-300 text-gray-700 select-none sm:text-4xl drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700"
        />

          {/* Descriptions */}
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            {config.aboutMessage.first}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            {config.aboutMessage.second}
          </p>

          {/* Hobby */}
          <div className="flex flex-wrap gap-2 mt-4">
            {config.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs md:text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;