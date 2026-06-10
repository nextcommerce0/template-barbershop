import Link from "next/link";
import Image from "next/image"
import Location from "../sections/Location";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C4233] pt-16 pb-8 text-[#F5F0E6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Localização */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-white text-slate-900">
          <Location />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#F5F0E6]/10 pt-8 md:flex-row">
          
          {/* Branding */}
          <div className="text-center md:text-left">
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

            <p className="mt-1 text-xs text-[#F5F0E6]/50">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* Navegação */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#F5F0EE]/70">
            <Link
              href="#cardapio"
              className="transition-colors hover:text-[#DFB15B]"
            >
              Cardápio
            </Link>

            <Link
              href="#sobre"
              className="transition-colors hover:text-[#DFB15B]"
            >
              Sobre Nós
            </Link>

            <Link
              href="https://google.com"
              target="_blank"
              className="transition-colors hover:text-[#DFB15B]"
            >
              Avaliar no Google
            </Link>
          </nav>

          {/* Crédito */}
          <div className="text-center md:text-right">
            <p className="text-[11px] tracking-wider text-[#F5F0E6]/40">
              Desenvolvido por{" "}
              <Link
                href="https://google.com"
                target="_blank"
                className="transition-colors hover:text-[#DFB15B]"
              >
                Next Commerce
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}