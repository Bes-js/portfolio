import IConfig from "@/types/config";

const config: IConfig = {
    welcomeMessage: {
        first: 'Hello! This is',
        second: 'Five universe.'
    },

    aboutMessage: {
        first: 'Hi there! I’m Beş, also known as Berkant. I’m 21 years old and work as a freelance developer. My expertise lies in developing Node.js-based backend and frontend solutions.',
        second: 'Like most software developers, I enjoy listening to music, writing code, and chatting. Oh, and I have a special love for coffee! Here’s a little secret: an adult five can drink up to 7-8 cups of coffee in days. ☕'
    },

    contactMessage: 'If you’d like to get in touch, feel free to use the contact options below—or not, it’s entirely up to you :D',

    defaultTheme: 'dark',

    skills: ['typescript', 'javascript', 'react', 'lua', 'csharp'],
    tags: ['Full Stack Development', 'Verified Lens Creator', 'Open Source Contributor'],
    projects: [
        { name: 'Hercai', link: 'https://github.com/Bes-js/hercai', image: '/images/hercai.png' },
        { name: 'Nyro', link: 'https://github.com/Bes-js/nyro', image: '/images/nyro.png' },
        { name: 'Cherry3', link: 'https://github.com/Bes-js/cherry3', image: '/images/cherry3.png' },
        { name: 'Canvafy', link: 'https://github.com/Bes-js/canvafy', image: '/images/canvafy.png' },
    ],

    social: [
        { tag: 'Github', url: 'https://github.com/Bes-js' },
        { tag: 'Discord', url: 'https://discord.gg/luppux' },
        { tag: 'Instagram', url: 'https://instagram.com/_berknt' }
    ],

    site: {
        title: 'Five Universe',
        description: 'Five Universe is a portfolio template for developers who want to showcase their work and skills.'
    }
};

export default config;