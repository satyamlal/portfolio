import { experience } from "../../portfolio";
import { SectionLabel, SectionProps } from "./shared";

const companyLogo: Record<string, string> = {
    "Duseca Software": "/img/icons/common/duseca_software_logo.jpeg",
    "Meganos Software": "/img/icons/common/meganos.png",
    "Bleed-AI": "/img/icons/common/bleedAI.jpg",
    ZRTechnologies: "/img/icons/common/zrtech.jpeg",
};

export default function Section02({ sectionRef, className }: SectionProps) {
    return (
        <section ref={sectionRef} className={className}>
            <SectionLabel number="02" />
            <h2>EXPERIENCE<span>.</span></h2>
            <div className="experience-grid">
                {experience.map((item) => (
                    <article className="experience-card" key={item.company}>
                        <div className="experience-heading">
                            <img src={companyLogo[item.company] || item.companyLogo} alt={`${item.company} logo`} />
                            <div>
                                <strong>
                                    {item.companyLink ? (
                                        <a className="company-link" href={item.companyLink} target="_blank" rel="noreferrer">
                                            {item.company}
                                        </a>
                                    ) : item.company}
                                </strong>
                                <span>{item.role}</span>
                                <b>{item.date}</b>
                            </div>
                        </div>
                        <p>{item.desc}</p>
                        {item.designLinks && item.designLinks.length > 0 && (
                            <ul className="design-links">
                                {item.designLinks.map((design) => (
                                    <li key={design.name}>
                                        <a href={design.href} target="_blank" rel="noreferrer">
                                            {design.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="experience-actions">
                            {item.liveDemo?.display && (
                                <a className="live-demo" href={item.liveDemo.href} target="_blank" rel="noreferrer">
                                    [↗ LIVE DEMO]
                                </a>
                            )}
                            {item.github?.display && (
                                <a className="live-demo" href={item.github.href} target="_blank" rel="noreferrer">
                                    [↗ GitHub]
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
