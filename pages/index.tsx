import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import NavbarDesktop from "../components/navigation/navbar_desktop";
import NavbarMobile from "../components/navigation/navbar_mobile";
import Section01 from "../components/sections/section_01";
import Section02 from "../components/sections/section_02";
import Section03 from "../components/sections/section_03";
import Section04 from "../components/sections/section_04";
import Section05 from "../components/sections/section_05";
import Section06 from "../components/sections/section_06";
import Section07 from "../components/sections/section_07";

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
  const sectionRef = (index: number) => (element: HTMLElement | null) => { sectionRefs.current[index] = element; };
  const closeMenu = () => setMenuOpen(false);

  return <div className="portfolio-shell"><SEO /><header className="site-header"><a className="brand" href="#top" onClick={closeMenu}><span>&gt;</span> Satyam_Lal</a><NavbarDesktop /><NavbarMobile isOpen={menuOpen} onToggle={() => setMenuOpen(open => !open)} onClose={closeMenu} /></header><main id="top">
    <Section01 sectionRef={sectionRef(0)} className={sectionClass(0)} typedName={typedName} />
    <Section02 sectionRef={sectionRef(1)} className={sectionClass(1)} />
    <Section03 sectionRef={sectionRef(2)} className={sectionClass(2)} />
    <Section04 sectionRef={sectionRef(3)} className={sectionClass(3)} />
    <Section05 sectionRef={sectionRef(4)} className={sectionClass(4)} />
    <Section06 sectionRef={sectionRef(5)} className={sectionClass(5)} />
    <Section07 sectionRef={sectionRef(6)} className={sectionClass(6)} />
  </main></div>;
}
