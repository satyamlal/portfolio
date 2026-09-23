import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { experience, greetings, socialLinks } from "../portfolio";

const resumeUrl = greetings.resumeLink !== "#" ? greetings.resumeLink : "https://drive.google.com/drive/my-drive";

const skills = [
  { title: "Backend engineering", description: "Designing scalable backend systems with Python, Django, FastAPI, Node.js, and Django REST Framework.", bullets: ["Building high-performance REST APIs, GraphQL services, WebSockets, authentication, SSO, and reporting workflows.", "Refactoring production services for reliability, performance, and maintainable multi-tenant architectures."], tags: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "GraphQL", "WebSockets", "Celery"] },
  { title: "Data engineering & ETL", description: "Architecting ETL pipelines for healthcare reporting, ML workflows, and event-processing workloads at large scale.", bullets: ["Processing millions of daily records and 1B+ annual events with optimized tagging, transformations, and ingestion flows.", "Improving analytics access with BigQuery, ClickHouse, Apache Superset, Pandas, Apache Spark, and Airflow."], tags: ["Airflow", "Apache Spark", "Pandas", "ClickHouse", "BigQuery", "PostgreSQL", "Redis", "Apache Superset"] },
  { title: "Cloud & DevOps", description: "Deploying and maintaining production systems across AWS, GCP, Docker, and Linux environments.", bullets: ["Operating AWS ECS, EC2, Lambda, S3, autoscaling, queue-based processing, and monitoring for high-throughput workloads.", "Shipping reliable CI/CD workflows with GitHub Actions and secure production configuration practices."], tags: ["AWS", "GCP", "Docker", "GitHub Actions", "Linux", "CI/CD"] },
  { title: "Frontend development", description: "Delivering production-ready React.js and Next.js interfaces for web applications and operational workflows.", bullets: ["Translating product requirements into reliable full-stack features across authentication, user management, and business automation.", "Collaborating with frontend teams to integrate API-driven React components and real-time application states."], tags: ["React.js", "Next.js", "TypeScript", "JavaScript"] },
  { title: "Testing & engineering practices", description: "Applying PyTest, TDD, unit tests, and integration tests to reduce manual QA and protect backend reliability.", bullets: ["Working in Agile/Scrum teams while leading implementation from requirements through delivery.", "Improving production systems through systematic debugging, performance optimization, and maintainable engineering practices."], tags: ["PyTest", "TDD", "Agile/Scrum", "GitHub"] },
];
const proficiency = [["Backend engineering", 95], ["Data engineering / ETL", 90], ["Cloud & DevOps", 88], ["Frontend development", 82], ["Testing & reliability", 90]] as const;
const projects = [
  { name: "ToughCAD", code: "PROJ_001", description: "Developed an e-commerce module supporting large file uploads and automated PDF post-processing workflows. Integrated shipping APIs and fulfillment automation. Contributed to generating EUR250k+ in annual revenue through the platform.", link: "https://toughcad.com/", showGithub: false, showLiveDemo: true },
  { name: "NAVA Ring", code: "PROJ_002", description: "Developed backend systems integrating wearable smart ring data. Implemented metric processing logic and AI-powered recommendations using OpenAI APIs.", link: "#", showGithub: false, showLiveDemo: false },
  { name: "Premium Property Management", code: "PROJ_003", description: "A comprehensive property management platform for efficient management of properties, leasing, maintenance, and contacts. To simplify property operations.", link: "#", showGithub: false, showLiveDemo: false },
  { name: "Visual Portfolios", code: "PROJ_004", description: "Empowering content creators to generate stunning infographics effortlessly, while boosting their LinkedIn audience. Write, visualize, and grow with our user-friendly platform.", link: "#", showGithub: false, showLiveDemo: false },
  { name: "developer-portfolio", code: "PROJ_005", description: "Software Developer Portfolio Template built with React.js and Next.js Bootstrap that helps you showcase your work and skills as a software developer.", github: "https://github.com/1Satyam100/developer-portfolio", link: "https://developer-portfolio-1Satyam100.vercel.app/", showGithub: true, showLiveDemo: true },
];
const companyLogo: Record<string, string> = { "Duseca Software": "/img/icons/common/duseca_software_logo.jpeg", "Meganos Software": "/img/icons/common/meganos.png", "Bleed AI": "/img/icons/common/bleedAI.jpg", ZRTechnologies: "/img/icons/common/zrtech.jpeg" };
const skillIcons: Record<string, string> = {
  Python: "logos:python", Django: "vscode-icons:file-type-django", FastAPI: "simple-icons:fastapi", "Node.js": "logos:nodejs-icon", "REST APIs": "carbon:api-1", GraphQL: "logos:graphql", WebSockets: "mdi:connection", Celery: "simple-icons:celery",
  Airflow: "logos:apache-airflow", "Apache Spark": "logos:apache-spark", Pandas: "logos:pandas", ClickHouse: "simple-icons:clickhouse", BigQuery: "logos:google-cloud", PostgreSQL: "logos:postgresql", Redis: "logos:redis", "Apache Superset": "simple-icons:apachesuperset", AWS: "logos:aws", GCP: "logos:google-cloud", Docker: "logos:docker-icon", "GitHub Actions": "logos:github-actions", Linux: "logos:linux", "CI/CD": "carbon:continuous-deployment", "React.js": "logos:react", "Next.js": "logos:nextjs-icon", TypeScript: "logos:typescript", JavaScript: "logos:javascript", PyTest: "simple-icons:pytest", TDD: "carbon:test-tool", "Agile/Scrum": "carbon:group-objects", GitHub: "akar-icons:github-fill",
};

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));
  const [typedName, setTypedName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const text = "Satyam";
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(text.slice(0, index));
      if (index === text.length) window.clearInterval(timer);
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
      if (index >= 0) setVisibleSections(previous => new Set(previous).add(index));
      observer.unobserve(entry.target);
    }), { threshold: 0.05 });
    sectionRefs.current.forEach(section => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const sectionClass = (index: number) => `section-frame ${visibleSections.has(index) ? "is-visible" : ""}`;

  const closeMenu = () => setMenuOpen(false);

  return <div className="portfolio-shell"><SEO /><header className="site-header"><a className="brand" href="#top" onClick={closeMenu}><span>&gt;</span> Satyam_Lal</a><nav><a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer"><Icon icon="mdi:github" /></a><a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" /></a><a aria-label="Instagram" href={socialLinks.instagram} target="_blank" rel="noreferrer"><Icon icon="mdi:instagram" /></a><a className="contact-link" href="#contact">[ CONTACT ]</a></nav><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><span /><span /><span /></button>{menuOpen && <div className="mobile-menu"><MobileLink href={socialLinks.github} icon="mdi:github" label="GitHub" /><MobileLink href={socialLinks.linkedin} icon="mdi:linkedin" label="LinkedIn" /><MobileLink href={socialLinks.instagram} icon="mdi:instagram" label="Instagram" /><MobileLink href="#contact" icon="mdi:email-outline" label="Contact" onClick={closeMenu} /></div>}</header><main id="top">
    <section className="hero section-frame"><SectionLabel number="01" /><h1>HI ALL,<br />I&apos;M<br /><span>{typedName}</span><b>_</b></h1><p className="hero-copy">I turn complex product and data challenges into clean, dependable systems that scale from first release to high-volume production.</p><div className="action-row"><a className="button" href={resumeUrl} target="_blank" rel="noreferrer">[ SEE MY RESUME ]</a><SocialButtons /></div><div className="stats is-active"><Stat value={18} suffix="+" label="HAPPY CLIENTS" /><Stat value={9} suffix="+" label="PROJECTS DONE" /><Stat value={100} suffix="%" label="SATISFACTION" /></div></section>
    <section ref={element => { sectionRefs.current[1] = element; }} className={sectionClass(1)}><SectionLabel number="02" /><h2>WHAT I DO<span>.</span></h2><p className="section-intro">FULL STACK DEVELOPER BUILDING SCALABLE BACKEND SYSTEMS, HIGH-PERFORMANCE APIS, AND RELIABLE PRODUCTION SOFTWARE</p><div className="skills-list">{skills.map(skill => <article className="skill-row" key={skill.title}><div><h3><span>&gt;</span> {skill.title}</h3><p>{skill.description}</p>{skill.bullets.map(bullet => <p className="bullet" key={bullet}>{bullet}</p>)}</div><div className="tag-list">{skill.tags.map(tag => <span key={tag}><Icon icon={skillIcons[tag]} aria-hidden="true" /> {tag}</span>)}</div></article>)}</div></section>
    <section ref={element => { sectionRefs.current[2] = element; }} className={sectionClass(2)}><SectionLabel number="03" /><h2>PROFICIENCY<span>.</span></h2><p className="section-intro">Balanced across product-facing interfaces, backend systems, and core programming discipline.</p><div className="proficiency-grid">{proficiency.map(([label, value]) => <div className="meter" key={label}><div><span>{label}</span><b><Counter target={value} suffix="%" /></b></div><i><em style={{ width: `${value}%` }} /></i></div>)}</div></section>
    <section ref={element => { sectionRefs.current[3] = element; }} className={sectionClass(3)}><SectionLabel number="04" /><h2>EDUCATION<span>.</span></h2><div className="education-card"><strong>UNIVERSITY OF MANAGEMENT AND TECHNOLOGY</strong><span>Bachelor of Science in Computer Science</span></div></section>
    <section ref={element => { sectionRefs.current[4] = element; }} className={sectionClass(4)}><SectionLabel number="05" /><h2>EXPERIENCE<span>.</span></h2><div className="experience-grid">{experience.map(item => <article className="experience-card" key={item.company}><div className="experience-heading"><img src={companyLogo[item.company] || item.companyLogo} alt="" /><div><strong>{item.company}</strong><span>{item.role}</span><b>{item.date}</b></div></div><p>{item.desc}</p></article>)}</div></section>
    <section ref={element => { sectionRefs.current[5] = element; }} className={sectionClass(5)}><SectionLabel number="06" /><h2>PROJECTS<span>.</span></h2><div className="project-grid">{projects.map(project => <article className="project-card" key={project.name}><small>[{project.code}]</small><h3>{project.name}</h3><p>{project.description}</p><div>{project.showGithub && project.github && <a href={project.github}><img src="/img/icons/common/github.svg" alt="" /> GITHUB</a>}{project.showLiveDemo && project.link && project.link !== "#" && <a href={project.link}>↗ LIVE DEMO</a>}</div></article>)}</div></section>
    <section ref={element => { sectionRefs.current[6] = element; }} className={`${sectionClass(6)} contact-section`} id="contact"><SectionLabel number="07" /><div><h2>REACH OUT TO<br />ME<span>!</span></h2><p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p><a className="email" href={socialLinks.email}>l.satyam@op.iitg.ac.in</a><div className="action-row"><SocialButtons /></div></div><img className="portrait" src="https://avatars.githubusercontent.com/u/59178380?v=4" alt="Satyam Lal" /></section>
  </main></div>;
}
function SectionLabel({ number }: { number: string }) { return <div className="section-label"><span>{"// SECTION_"}{number}</span><b>{number}</b></div>; }
function SocialButtons() { return <div className="social-buttons"><a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer"><Icon icon="mdi:github" /></a><a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" /></a><a aria-label="Instagram" href={socialLinks.instagram} target="_blank" rel="noreferrer"><Icon icon="mdi:instagram" /></a></div>; }
function MobileLink({ href, icon, label, onClick }: { href?: string; icon: string; label: string; onClick?: () => void }) {
  const safeHref = href || "#";
  const isExternal = safeHref.startsWith("http");
  return <a className="mobile-menu-link" href={safeHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} onClick={onClick}><span>{label}</span><Icon icon={icon} /></a>;
}
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = window.performance.now();
    const duration = 400;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [target]);
  return <>{value}{suffix}</>;
}
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) { return <div><strong><Counter target={value} suffix={suffix} /></strong><span>{label}</span></div>; }
