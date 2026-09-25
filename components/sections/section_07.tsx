import { socialLinks } from "../../portfolio";
import { SectionLabel, SectionProps, SocialButtons } from "./shared";

export default function Section07({ sectionRef, className }: SectionProps) {
  return (
    <section ref={sectionRef} className={`${className} contact-section`} id="contact">
      <SectionLabel number="07" />
      <div>
        <h2>REACH OUT TO<br />ME<span>!</span></h2>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
        <a className="email" href={socialLinks.email}>l.satyam@op.iitg.ac.in</a>

        <div className="action-row">
          <SocialButtons />
        </div>

      </div>

      <img className="portrait" src="https://avatars.githubusercontent.com/u/26645754?v=4" alt="Satyam Lal" />
    </section>
  );
}
