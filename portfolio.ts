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
    schoolName: "Indian Institute of Technology, Guwahati",
    subHeader: "Bachelor of Science in Data Science & Artificial Intelligence",
    duration: "September 2024 - July 2028",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
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
    role: "UI Designer - Remote",
    company: "Digital Marketing Inside, USA",
    companyLogo: "/img/icons/common/dmi.png",
    date: "Jan 2021 - May 2022",
    companyLink: "https://digitalmarketinginside.com",
    liveDemo: { display: true, href: "/documents/dmi.pdf" },
    github: { display: false, href: "" },
    designLinks: [
      { 
        name: "BravoPaws - [open Insta Page]", 
        href: "https://www.instagram.com/bravopawsofficial/",
        icon: "./img/icons/brands/bravopaws.svg", 
      },
      { 
        name: "AnimalHealthWarehouse - [open Insta Page]", 
        href: "https://www.instagram.com/animal_health_warehouse/", 
        icon: "./img/icons/brands/bravopaws.svg", 
      },
      { 
        name: "24hrSupplement - [open Insta Page]", 
        href: "https://www.instagram.com/24hoursupplement/", 
        icon: "./img/icons/brands/bravopaws.svg", 
      },
    ],
    desc: "I crafted UIs and Graphic designs along with developing shopify and wordpress websites for 5 different e-commerce brands. Helping the brands increase their sales by 40% in revenue.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Gazibo - Featured",
    desc: "OnChain dApp Solana-Anchor based freelance workplace for everyone.",
    github: "https://github.com/satyamlal/Gazibo",
    link: "https://gazibo.vercel.app/", 
  },
  {
    name: "Talky",
    desc: "Talky is a modern, anonymous chat platform where anyone start conversations without revealing their identity.",
    link: "https://github.com/satyamlal/Talky",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Rishav Aggarwal",
    role: "Video Editor",
    feedback:
      "I'm quite impressed with his abilities and professional practices. You approach problems from a unique perspective and always ask the right question. He has contributed to the growth of our organization and continues to do so.",
  },
  {
    name: "Saloni Mishra",
    role: "Manager at Duseca Software",
    feedback:
      "Satyam has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality.",
  },
  {
    name: "Zaid Zaffar",
    role: "Architect at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of web development and he's always ready to handle any challenges thrown at him.",
  },
];

export const seoData: SEODataType = {
  title: siteTitle,
  description: greetings.description,
  author: "Satyam Lal",
  image: "https://avatars.githubusercontent.com/u/26645754?v=4",
  url: "https://satyamlal.me/",
  keywords: [
    "Satyam Lal",
    "Portfolio",
    "Satyam Lal Portfolio",
  ],
};
