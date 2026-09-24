import { SectionLabel, SectionProps, Counter } from "./shared";

const proficiency = [["Backend Engineering", 89], ["Frontend Engineering", 82], ["UI/UX Design", 95], ["Solana/Anchor Development", 80], ["CI/CD", 75], ["System Design", 70]] as const;

export default function Section03({ sectionRef, className }: SectionProps) {
  return (
    <section ref={sectionRef} className={className}>
      <SectionLabel number="03" />
      <h2>PROFICIENCY<span>.</span></h2>
      <p className="section-intro">Balanced across product-facing interfaces, backend systems, and core programming discipline.</p>
      <div className="proficiency-grid">{
        proficiency.map(([label, value]) => <div className="meter" key={label}>
          <div>
            <span>{label}</span>
            <b><Counter target={value} suffix="%" /></b>
          </div>
          <i><em style={{ width: `${value}%` }} /></i>
        </div>
        )}
      </div>
    </section>);
}
