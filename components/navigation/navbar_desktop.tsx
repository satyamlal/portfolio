import { Icon } from "@iconify/react/dist/iconify.js";
import { socialLinks } from "../../portfolio";

export default function NavbarDesktop() {
  return (
    <nav className="desktop-navbar">
      <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer">
        <Icon icon="mdi:github" /> Github
      </a>

      <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
        <Icon icon="mdi:linkedin" /> LinkedIn
      </a>

      <a className="contact-link" href="#contact">[ CONTACT ]</a>
    </nav>);
}
