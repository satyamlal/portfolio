import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { socialLinks } from "../../portfolio";

export type SectionProps = {
  sectionRef: (element: HTMLElement | null) => void;
  className: string;
};

export function SectionLabel({ number }: { number: string }) {
  return <div className="section-label"><span>{"// SECTION_"}{number}</span><b>{number}</b></div>;
}

export function SocialButtons() {
  return <div className="social-buttons"><a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer"><Icon icon="mdi:github" /></a><a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" /></a><a aria-label="Instagram" href={socialLinks.instagram} target="_blank" rel="noreferrer"><Icon icon="mdi:instagram" /></a></div>;
}

export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

export function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return <div><strong><Counter target={value} suffix={suffix} /></strong><span>{label}</span></div>;
}
