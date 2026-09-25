import { greetings } from "../../portfolio";
import { SectionLabel, SectionProps, SocialButtons, Stat } from "./shared";

type HeroProps = SectionProps & { typedName: string };

export default function Section01({ sectionRef, className, typedName }: HeroProps) {
  const resumeUrl = greetings.resumeLink !== "#" ? greetings.resumeLink : "/documents/dmi.pdf";
  return (
    <section ref={sectionRef} className={`hero ${className}`}>
      <div className="hero-content">
        <SectionLabel number="01" />
        <h1>HI ALL,<br />I&apos;M<br /><span>{typedName}</span><b>_</b></h1>
        <p className="hero-copy">Building bridge between design & code, that scale from first release to high-volume production.</p>

        <div className="action-row">
          <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">[ SEE MY RESUME ]</a>
          <SocialButtons />
        </div>
      </div>

      <div className="hero-stats">
        <div className="stats is-active">
          <Stat
            value={5}
            suffix="+"
            label="Happy Clients"
            numberStyle={{ fontSize: "2rem", color: "#ededed", fontStyle: "normal" }}
            suffixStyle={{ fontSize: "2rem", color: "#ff3d00", fontStyle: "normal" }}
            labelStyle={{ fontSize: "0.60rem", color: "#ededed", fontStyle: "normal" }}
          />
          <Stat
            value={10}
            suffix="+"
            label="Projects Done"
            numberStyle={{ fontSize: "2rem", color: "#ededed", fontStyle: "normal" }}
            suffixStyle={{ fontSize: "2rem", color: "#ff3d00", fontStyle: "normal" }}
            labelStyle={{ fontSize: ".60rem", color: "#ededed", fontStyle: "normal" }}
          />
          <Stat
            value={100}
            suffix="%"
            label="Satisfaction"
            numberStyle={{ fontSize: "2rem", color: "#ededed", fontStyle: "normal" }}
            suffixStyle={{ fontSize: "2rem", color: "#ff3d00", fontStyle: "normal" }}
            labelStyle={{ fontSize: ".60rem", color: "#ededed", fontStyle: "normal" }}
          />
        </div>
      </div>
    </section>
  );
}
