"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    id: "github",
    icon: FaGithub,
    href: "https://github.com/FelypeDantas",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/felype-dantas-dos-santos",
    label: "LinkedIn",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCnJ4rJGj0wxeDm2aGSYsxQA",
    label: "YouTube",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://instagram.com/felype_dantas_santos",
    label: "Instagram",
  },
];

const Social = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ id, icon: Icon, href, label }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={iconStyles}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Social;
