import { Icon } from "@iconify/react/dist/iconify.js";
import { socialLinks } from "../../portfolio";

type NavbarMobileProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

function MobileLink({ href, icon, label, onClick }: { href: string; icon: string; label: string; onClick?: () => void }) {
  const isExternal = href.startsWith("http");
  return <a className="mobile-menu-link" href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} onClick={onClick}><span>{label}</span><Icon icon={icon} /></a>;
}

export default function NavbarMobile({ isOpen, onToggle, onClose }: NavbarMobileProps) {
  return <><button className={`menu-toggle ${isOpen ? "is-open" : ""}`} type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={onToggle}><span /><span /><span /></button>{isOpen && <div className="mobile-menu"><MobileLink href={socialLinks.github} icon="mdi:github" label="GitHub" /><MobileLink href={socialLinks.linkedin} icon="mdi:linkedin" label="LinkedIn" /><MobileLink href="#contact" icon="mdi:email-outline" label="Contact" onClick={onClose} /></div>}</>;
}
