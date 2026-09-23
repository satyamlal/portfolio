import { SectionLabel, SectionProps } from "./shared";

export default function Section04({ sectionRef, className }: SectionProps) {
  return <section ref={sectionRef} className={className}><SectionLabel number="04" /><h2>EDUCATION<span>.</span></h2><div className="education-card"><strong>UNIVERSITY OF MANAGEMENT AND TECHNOLOGY</strong><span>Bachelor of Science in Computer Science</span></div></section>;
}
