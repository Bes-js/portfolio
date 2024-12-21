import Image from "next/image";
import { 
    FaInstagram,
    FaTwitter, 
    FaLinkedin,
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaPhone
} from "react-icons/fa";
import config from "@/settings/config";

import SparklesText from "@/components/SparklesText";
import Memoji from '../../public/images/memoji_5.jpeg';


const socialMediaLinks: {
    tag: string;
    icon: any;
    url: string;
}[] = config.social.map((value) => {
    return {
        tag: value.tag,
        url: value.url,
        icon: 
        value.tag == 'Discord' ? <FaDiscord /> :
        value.tag == 'Facebook' ? <FaFacebook /> :
        value.tag == 'Github' ? <FaGithub /> :
        value.tag == 'Instagram' ? <FaInstagram /> :
        value.tag == 'Linkedin' ? <FaLinkedin /> :
        value.tag == 'Twitter' ? <FaTwitter /> :
        <FaPhone />
    }
})

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex-shrink-0 w-screen min-h-screen flex flex-col items-center justify-center scroll-snap-align-start px-4 py-10 md:px-8 lg:px-16 z-10"
    >
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 text-center">
        {/* Title */}
        <SparklesText
          text="Contact Me"
          className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-gray-300 text-gray-700 select-none sm:text-4xl drop-shadow-lg shadow-gray-900 dark:shadow-gray-300 transition duration-700"
        />

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
          {config.contactMessage}
        </p>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-8 flex-wrap justify-center">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:shadow-2xl transition duration-500 flex flex-col items-center justify-center gap-2 hover:-translate-y-48 hover:dark:-translate-y-4"
            >
              <div className="text-2xl">{link.icon}</div>
              <span className="text-xs md:text-sm">{link.tag}</span>
            </a>
          ))}
        </div>

        {/* Memoji Image */}
        <div className="w-25 h-25 md:w-25 md:h-25 rounded-full shadow-lg mt-8">
          <Image
            src={Memoji}
            alt="Memoji"
            width={200}
            height={200}
            draggable={false}
            className="border-2 border-gray-900 dark:border-gray-300 transition duration-700 border-opacity-40 dark:border-opacity-40 rounded-full hover:motion-preset-shrink select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
