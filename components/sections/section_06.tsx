import { SectionLabel, SectionProps } from "./shared";

const projects = [
  { 
    name: "Gazibo", 
    code: "PROJ_001", 
    description: "OnChain dApp Solana-Anchor based freelance workplace for everyone.", 
    link: "https://github.com/satyamlal/Gazibo", 
    showGithub: true, 
    showLiveDemo: true 
  },
  { 
    name: "NAVA Ring", 
    code: "PROJ_002", 
    description: "Developed backend systems integrating wearable smart ring data. Implemented metric processing logic and AI-powered recommendations using OpenAI APIs.", 
    link: "#", 
    showGithub: false, 
    showLiveDemo: false 
  },
  { 
    name: "Premium Property Management", 
    code: "PROJ_003", 
    description: "A comprehensive property management platform for efficient management of properties, leasing, maintenance, and contacts. To simplify property operations.", 
    link: "#", 
    showGithub: false, 
    showLiveDemo: false 
  },
  { 
    name: "Visual Portfolios", 
    code: "PROJ_004", 
    description: "Empowering content creators to generate stunning infographics effortlessly, while boosting their LinkedIn audience. Write, visualize, and grow with our user-friendly platform.", 
    link: "#", 
    showGithub: false, 
    showLiveDemo: false 
  },
  { 
    name: "developer-portfolio", 
    code: "PROJ_005", 
    description: "Software Developer Portfolio Template built with React.js and Next.js Bootstrap that helps you showcase your work and skills as a software developer.", 
    github: "https://github.com/1Satyam100/developer-portfolio", 
    link: "https://developer-portfolio-1Satyam100.vercel.app/", 
    showGithub: true, 
    showLiveDemo: true 
  },
];

export default function Section06({ sectionRef, className }: SectionProps) {
  return <section ref={sectionRef} className={className}><SectionLabel number="06" /><h2>PROJECTS<span>.</span></h2><div className="project-grid">{projects.map(project => <article className="project-card" key={project.name}><small>[{project.code}]</small><h3>{project.name}</h3><p>{project.description}</p><div>{project.showGithub && project.github && <a href={project.github}><img src="/img/icons/common/github.svg" alt="" /> GITHUB</a>}{project.showLiveDemo && project.link && project.link !== "#" && <a href={project.link}>↗ LIVE DEMO</a>}</div></article>)}</div></section>;
}
