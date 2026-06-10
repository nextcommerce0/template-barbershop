"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const getGeneralWhatsAppLink = (): string => {
    const phoneNumber = "5511999999999";

    const message = encodeURIComponent(
      "Olá! Vi o site de vocês e gostaria de fazer um pedido. 🍕",
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2C4233] transition-all duration-300">
      {/* Container Principal */}
      <div className="flex h-16 w-full items-center justify-between px-6 md:h-20 lg:px-12">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo da pizzaria"
              width={280}
              height={120}
              priority
              className="h-14 w-auto object-contain md:h-16"
            />
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#cardapio"
            className="relative text-[#F5F0E6] transition-colors duration-300 hover:text-[#DFB15B] after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#DFB15B] after:transition-all after:duration-300 hover:after:w-full"
          >
            Cardápio
          </Link>

          <Link
            href="#sobre"
            className="relative text-[#F5F0E6] transition-colors duration-300 hover:text-[#DFB15B] after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#DFB15B] after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre Nós
          </Link>

          <Link
            href="#contato"
            className="relative text-[#F5F0E6] transition-colors duration-300 hover:text-[#DFB15B] after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#DFB15B] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contato
          </Link>
        </nav>

        {/* BOTÃO DESKTOP + HAMBÚRGUER */}
        <div className="flex items-center gap-4">
          <Link
            href={getGeneralWhatsAppLink()}
            className="hidden rounded-full bg-[#D64527] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#b8351a] hover:shadow-lg active:scale-95 md:block"
          >
            Pedir Agora
          </Link>

          {/* Botão Mobile */}
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#F5F0E6]/20 text-[#F5F0E6] transition-colors hover:bg-white/5 md:hidden"
            aria-label={isOpen ? "fechar menu" : "abrir menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`h-0.5 w-6 bg-[#F5F0E6] transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[#F5F0E6] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[#F5F0E6] transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-64 border-t border-[#F5F0E6]/10 bg-[#2C4233]"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6">
          <Link
            href="#cardapio"
            onClick={() => setIsOpen(false)}
            className="text-lg text-[#F5F0E6] hover:text-[#DFB15B]"
          >
            Cardápio
          </Link>

          <Link
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="text-lg text-[#F5F0E6] hover:text-[#DFB15B]"
          >
            Sobre Nós
          </Link>

          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="text-lg text-[#F5F0E6] hover:text-[#DFB15B]"
          >
            Contato
          </Link>

          <Link
            href="#pedir"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block rounded-full bg-[#D64527] py-3 text-center text-sm font-semibold text-white"
          >
            Pedir Agora
          </Link>
        </nav>
      </div>
    </header>
  );
}
