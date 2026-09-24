import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { socialLinks } from "../../portfolio";

export type SectionProps = {
  sectionRef: (element: HTMLElement | null) => void;
  className: string;
};

export function SectionLabel({ number }: { number: string }) {
  return (
    <div className="section-label">
      <span>{"// SECTION_"}{number}</span>
      <b>{number}</b>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="social-buttons">
      <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer">
        <Icon icon="mdi:github" />
      </a>

      <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
        <Icon icon="mdi:linkedin" />
      </a>
    </div>);
}

type StatTextStyle = Pick<CSSProperties, "fontSize" | "color" | "fontStyle" | "fontWeight">;

export function Counter({
  target,
  suffix = "",
  numberStyle,
  suffixStyle,
}: {
  target: number;
  suffix?: string;
  numberStyle?: StatTextStyle;
  suffixStyle?: StatTextStyle;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = window.performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [target]);

  return <><span className="stat-number" style={numberStyle}>{value}</span><span className="stat-suffix" style={suffixStyle}>{suffix}</span></>;
}

export function Stat({
  value,
  suffix,
  label,
  numberStyle,
  suffixStyle,
  labelStyle,
}: {
  value: number;
  suffix: string;
  label: string;
  numberStyle?: StatTextStyle;
  suffixStyle?: StatTextStyle;
  labelStyle?: StatTextStyle;
}) {
  return <div><strong><Counter target={value} suffix={suffix} numberStyle={numberStyle} suffixStyle={suffixStyle} /></strong><span style={labelStyle}>{label}</span></div>;
}
