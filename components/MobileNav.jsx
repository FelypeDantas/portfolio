"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "/services" },
  { name: "Resumo", path: "/resume" },
  { name: "Trabalho", path: "/work" },
  { name: "Contato", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <Sheet>
      <SheetTrigger
        className="flex items-center justify-center"
        aria-label="Abrir menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Felype<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`
                text-xl capitalize transition-all hover:text-accent
                ${
                  isActive(link.path)
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
