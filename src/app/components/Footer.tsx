import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A47] text-[#FAF9F6] pt-12 pb-6 border-t border-[#FAF9F6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CORPO DO FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#FAF9F6]/10 text-center md:text-left">
          
          {/* COLUNA 1: BRANDING */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-black tracking-wider text-[#FAF9F6]">
               <Image
                            src="/logo.png"
                            alt="Logo da Barbearia"
                            width={64}
                            height={64}
                            className="inline-block mr-2 -mt-1"
                          />
            </Link>
            <p className="text-sm text-[#FAF9F6]/70 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Sua melhor versão com o respeito e a tradição que você merece. Agende seu horário e venha nos conhecer.
            </p>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#9E1B1B]">Navegação</h4>
            <ul className="space-y-2 text-sm text-[#FAF9F6]/80 font-medium">
              <li>
                <Link href="#hero" className="hover:text-[#FAF9F6] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FAF9F6] transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#FAF9F6] transition-colors">Galeria</Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-[#FAF9F6] transition-colors">Localização</Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: REDES SOCIAIS E CONTATO */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#9E1B1B]">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FAF9F6]/80 hover:text-[#FAF9F6] transition-colors p-2 bg-[#FAF9F6]/5 rounded-lg hover:bg-[#FAF9F6]/10"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FAF9F6]/80 hover:text-[#FAF9F6] transition-colors p-2 bg-[#FAF9F6]/5 rounded-lg hover:bg-[#FAF9F6]/10"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 pt-2">
              Dúvidas? <a href="mailto:contato@barbershop.com" className="underline hover:text-[#FAF9F6]">contato@barbershop.com</a>
            </p>
          </div>

        </div>

        {/* DIREITOS AUTORAIS */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF9F6]/50 gap-4 text-center sm:text-left">
          <p>© {currentYear} BARBERSHOP. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com foco em <span className="text-[#FAF9F6]/70 font-semibold">Responsividade & Performance</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
