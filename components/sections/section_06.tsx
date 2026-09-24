import { SectionLabel, SectionProps } from "./shared";

const projects = [
  {
    name: "Gazibo - Featured",
    code: "PROJ_001",
    description: "OnChain dApp Solana-Anchor based freelance workplace for everyone.",
    github: "https://github.com/satyamlal/Gazibo",
    liveDemo: "https://gazibo.vercel.app/",
    showGithub: true,
    showLiveDemo: true,
  },
  {
    name: "Talky",
    code: "PROJ_002",
    description: "Talky is a modern, anonymous chat platform where anyone start conversations without revealing their identity.",
    github: "https://github.com/satyamlal/Talky",
    liveDemo: "https://talky-frontend-5gur.onrender.com/",
    showGithub: true,
    showLiveDemo: true,
  },
];

export default function Section06({ sectionRef, className }: SectionProps) {
  return (
    <section ref={sectionRef} className={className}>
      <SectionLabel number="06" />
      <h2>PROJECTS<span>.</span></h2>
      <div className="project-grid">
        {
          projects.map(project =>
            <article className="project-card" key={project.name}>
              <small>[{project.code}]</small>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div>
                {
                  project.showGithub && project.github && <a href={project.github} target="_blank" rel="noreferrer"><img src="/img/icons/common/github.svg" alt="" /> GITHUB</a>
                }
                {
                  project.showLiveDemo && project.liveDemo && project.liveDemo !== "#" && <a href={project.liveDemo} target="_blank" rel="noreferrer">↗ LIVE DEMO</a>
                }
              </div>
            </article>
          )}
      </div>
    </section>);
}
