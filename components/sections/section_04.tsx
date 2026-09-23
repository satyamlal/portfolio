import { SectionLabel, SectionProps } from "./shared";

export default function Section04({ sectionRef, className }: SectionProps) {
  return (
  <section ref={sectionRef} className={className}>
    <SectionLabel number="04" />
      <h2>EDUCATION<span>.</span></h2>
      
      <div className="education-card">
        <strong>Indian Institute of Technology, Guwahati - 2024</strong>
        <span>B.Sc in Data Science & Artificial Intelligence</span>
      </div>
  </section>);
}
