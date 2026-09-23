import { greetings } from "../../portfolio";
import { SectionLabel, SectionProps, SocialButtons, Stat } from "./shared";

type HeroProps = SectionProps & { typedName: string };

export default function Section01({ sectionRef, className, typedName }: HeroProps) {
  const resumeUrl = greetings.resumeLink !== "#" ? greetings.resumeLink : "https://drive.google.com/drive/my-drive";
  return <section ref={sectionRef} className={`hero ${className}`}><SectionLabel number="01" /><h1>HI ALL,<br />I&apos;M<br /><span>{typedName}</span><b>_</b></h1><p className="hero-copy">I turn complex product and data challenges into clean, dependable systems that scale from first release to high-volume production.</p><div className="action-row"><a className="button" href={resumeUrl} target="_blank" rel="noreferrer">[ SEE MY RESUME ]</a><SocialButtons /></div><div className="stats is-active"><Stat value={18} suffix="+" label="HAPPY CLIENTS" /><Stat value={9} suffix="+" label="PROJECTS DONE" /><Stat value={100} suffix="%" label="SATISFACTION" /></div></section>;
}
