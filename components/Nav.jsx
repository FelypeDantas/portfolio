"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "home", path: "/" },
  { name: "servicos", path: "/services" },
  { name: "resumo", path: "/resume" },
  { name: "trabalho", path: "/work" },
  { name: "contato", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "capitalize font-medium transition-all hover:text-accent",
              isActive && "text-accent border-b-2 border-accent"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
