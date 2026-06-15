"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Sobre Nós", href: "#about" },
  { name: "Galeria", href: "#gallery" },
  { name: "Localização", href: "#location" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1B2A47]/10 bg-[#FAF9F6]/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-wider text-[#1B2A47]"
          >
            <Image
              src="/logo.png"
              alt="Logo da Barbearia"
              width={64}
              height={64}
              className="inline-block mr-2 -mt-1"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#4A5568] transition-colors duration-200 hover:text-[#1B2A47]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-[#9E1B1B] px-5 py-2.5 text-sm font-bold text-[#FAF9F6] shadow-md transition-all duration-200 hover:bg-[#821414]"
            >
              Agendar Horário
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1B2A47] transition-colors hover:text-[#9E1B1B] md:hidden"
          >
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`
          md:hidden
          overflow-hidden
          border-b border-[#1B2A47]/10
          bg-[#FAF9F6]
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-1 px-3 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-md px-3 py-3 text-base font-medium text-[#4A5568] transition-colors hover:bg-[#1B2A47]/5 hover:text-[#1B2A47]"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3">
            <Link
              href="#cta"
              onClick={closeMenu}
              className="block w-full rounded-md bg-[#9E1B1B] px-4 py-3 text-center text-base font-bold text-[#FAF9F6] shadow-md transition-colors hover:bg-[#821414]"
            >
              Agendar Horário
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
