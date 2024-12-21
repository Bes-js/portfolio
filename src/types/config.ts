type SocialTags = 'Instagram' | 'Discord' | 'Twitter' | 'X' | 'Linkedin' | 'Github' | 'Facebook';


export default interface IConfig {
    welcomeMessage: {
        first: string;
        second: string;
    };

    aboutMessage: {
        first: string;
        second: string;
    };

    contactMessage: string;

    defaultTheme: 'light' | 'dark';

    skills: string[];
    tags: string[];
    projects: {
        name: string;
        link: string;
        image: string;
    }[];

    social: {
        tag: SocialTags;
        url: string;
    }[];

    site: {
        title: string;
        description: string;
    };
}