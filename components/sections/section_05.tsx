import { Icon } from "@iconify/react/dist/iconify.js";
import { SectionLabel, SectionProps } from "./shared";

export default function Section05({ sectionRef, className }: SectionProps) {
  const skills = [
    ["JavaScript", "logos:javascript"], ["TypeScript", "logos:typescript"],
    ["React", "logos:react"], ["Next", "logos:nextjs-icon"], ["RUST", "logos:rust"],
    ["Solana", "simple-icons:solana"], ["Anchor", "simple-icons:anchor"], ["MongoDB", "logos:mongodb"],
    ["PostgreSQL", "logos:postgresql"], ["Docker", "logos:docker-icon"], ["AWS", "logos:aws"],
    ["REST APIs", "carbon:api-1"], ["WebSocket", "mdi:connection"], ["Redis", "logos:redis"],
    ["GitHub Actions", "logos:github-actions"], ["Linux", "logos:linux"], ["CI/CD", "carbon:continuous-deployment"],
    ["GitHub", "akar-icons:github-fill"],
  ];

  return <section ref={sectionRef} className={className}><SectionLabel number="05" /><h2>SKILLS<span>.</span></h2><p className="section-intro">Tools and technologies I use to build reliable, scalable products.</p><div className="tag-list skills-grid">{skills.map(([name, icon]) => <span key={name}><Icon icon={icon} aria-hidden="true" /> {name}</span>)}</div></section>;
}
