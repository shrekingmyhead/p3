export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    // title: 'Hi, I\'m Priyanka!',
    // subtitle: 'Welcome to my personal site!',
    // description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    hero: {
        title: "Hi, I'm Priyanka",
        text: `Welcome to my personal site! Here's my <a href='https://github.com/shrekingmyhead' target="_blank"  >GitHub</a>.<br>Connect with me on <a href='https://www.linkedin.com/in/priyanka-datta-133767221/' target="_blank">LinkedIn</a>.<br>
           <br>Skills Accquired :
           <div style="display: flex;">
               <ul style="flex: 1; list-style-type: none;">
                   <li>HTML/CSS</li>
                   <li>JavaScript</li>
                   <li>React.js</li>
                   <li>Next.js</li>
                   <li>Astro</li>
               </ul>
               <ul style="flex: 1; list-style-type: none;">
                   <li>Python</li>
                   <li>Scikit-learn</li>
                   <li>C</li>
                   <li>TypeScript</li>
                   <li>MySQL</li>
               </ul>
           </div>`,

        actions: [
            {
                text: 'Resume',
                href: '/Priyanka_Datta-Resume.pdf',
                target: '_blank'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
