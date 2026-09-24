import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Satyam Lal",
  title: "Hi all, I'm Satyam",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/drive/my-drive",
};

export const openSource = {
  githubUserName: "satyamlal",
};

export const contact = {};

// Change this value to update the browser tab and social preview title.
export const siteTitle = "Satyam Lal | Full Stack Developer";

export const socialLinks: SocialLinksType = {
  email: "mailto:l.satyam@op.iitg.ac.in",
  linkedin: "https://www.linkedin.com/in/satyamlal/",
  github: "https://github.com/satyamlal",
  // instagram: "https://www.instagram.com/__Satyam100",
  // facebook: 'https://www.facebook.com/1Satyam100',
  // twitter: 'https://twitter.com/1Satyam100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "UI Designer - Remote",
    company: "Digital Marketing Inside, USA",
    companyLogo: "/img/icons/common/dmi.png",
    date: "Jan 2021 - May 2022",
    companyLink: "https://digitalmarketinginside.com",
    liveDemo: { display: true, href: "/documents/dmi.pdf" },
    github: { display: false, href: "" },
    designLinks: [
      { name: "BravoPaws", href: "https://www.instagram.com/bravopawsofficial/" },
      { name: "AnimalHealthWarehouse", href: "https://www.instagram.com/animal_health_warehouse/" },
      { name: "24hrSupplement", href: "https://www.instagram.com/24hoursupplement/" },
    ],
    desc: "I crafted UIs and Graphic designs along with developing shopify and wordpress websites for 5 different e-commerce brands. Helping the brands increase their sales by 40% in revenue.",
  },
  {
    role: "Full Stack Developer - Remote",
    company: "The Solar Home",
    companyLogo: "https://full-stack-home-solar.vercel.app/assets/logo-vi3uq4UW.svg",
    date: "July 2024 - Jan 2025",
    companyLink: "https://full-stack-home-solar.vercel.app/",
    liveDemo: { display: true, href: "https://full-stack-home-solar.vercel.app/" },
    github: { display: false, href: "" },
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Full Stack Developer - Remote",
    company: "LgaooPlants",
    companyLogo: "https://lgaooplants.com/wp-content/uploads/2026/06/cropped-lgaooplants-offical-logo.png",
    date: "May 2025 - Nov 2025",
    companyLink: "https://lgaooplants.com/",
    liveDemo: { display: true, href: "https://lgaooplants.com/" },
    github: { display: false, href: "" },
    desc: "Developed a modern web application for Lgaooplants using Next.js and TypeScript. Built a scalable backend with PostgreSQL and designed an intuitive, visually appealing UI to deliver a smooth and engaging user experience. Focused on responsive design, efficient data handling, and clean application architecture.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1Satyam100/developer-portfolio",
    link: "https://developer-portfolio-1Satyam100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Satyam is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Satyam has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Satyam is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Satyam for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: siteTitle,
  description: greetings.description,
  author: "Satyam Lal",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1Satyam100.vercel.app",
  keywords: [
    "Satyam Lal",
    "Portfolio",
    "Satyam Lal Portfolio",
  ],
};
