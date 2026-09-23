import { experience } from "../../portfolio";
import { SectionLabel, SectionProps } from "./shared";

const companyLogo: Record<string, string> = { "Duseca Software": "/img/icons/common/duseca_software_logo.jpeg", "Meganos Software": "/img/icons/common/meganos.png", "Bleed-AI": "/img/icons/common/bleedAI.jpg", ZRTechnologies: "/img/icons/common/zrtech.jpeg" };

export default function Section05({ sectionRef, className }: SectionProps) {
  return <section ref={sectionRef} className={className}><SectionLabel number="05" /><h2>EXPERIENCE<span>.</span></h2><div className="experience-grid">{experience.map(item => <article className="experience-card" key={item.company}><div className="experience-heading"><img src={companyLogo[item.company] || item.companyLogo} alt={`${item.company} logo`} /><div><strong>{item.company}</strong><span>{item.role}</span><b>{item.date}</b></div></div><p>{item.desc}</p></article>)}</div></section>;
}
