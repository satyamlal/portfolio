import { SectionLabel, SectionProps, Counter } from "./shared";

const proficiency = [["Backend engineering", 95], ["Data engineering / ETL", 90], ["Cloud & DevOps", 88], ["Frontend development", 82], ["Testing & reliability", 90]] as const;

export default function Section03({ sectionRef, className }: SectionProps) {
  return <section ref={sectionRef} className={className}><SectionLabel number="03" /><h2>PROFICIENCY<span>.</span></h2><p className="section-intro">Balanced across product-facing interfaces, backend systems, and core programming discipline.</p><div className="proficiency-grid">{proficiency.map(([label, value]) => <div className="meter" key={label}><div><span>{label}</span><b><Counter target={value} suffix="%" /></b></div><i><em style={{ width: `${value}%` }} /></i></div>)}</div></section>;
}
