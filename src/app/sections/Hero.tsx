import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-125 flex items-center overflow-hidden">
      
      {/* 1. IMAGEM DE FUNDO (OTIMIZADA PELO NEXT.JS) */}
      <Image
        src="/pizzahero.jpg" // Substitua por uma foto da pizza em alta resolução
        alt="Fundo da pizzaria com forno a lenha ou ingredientes"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* 2. OVERLAY ESCURO (Garante o contraste do texto com o Verde Oliva) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2C4233]/90 via-[#2C4233]/70 to-transparent" />

      {/* 3. CONTEÚDO POR CIMA DO FUNDO */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center md:max-w-xl md:items-start md:text-left">
          
          {/* Tag de destaque */}
          <span className="mb-4 rounded-full bg-[#F5F0E6]/20 border border-[#F5F0E6]/30 px-4 py-1.5 text-xs font-bold tracking-wider text-[#F5F0E6] uppercase backdrop-blur-sm">
            🍕 Fermentação Natural de 48h
          </span>
          
          {/* O texto agora muda para Farina (#F5F0E6) para contrastar com o fundo escuro */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F0E6] sm:text-5xl lg:text-6xl lg:leading-tight">
            A verdadeira pizza <br />
            <span className="text-[#DFB15B]">artesanal moderna.</span>
          </h1>
          
          <p className="mt-6 text-base leading-relaxed text-[#F5F0E6]/80 md:text-lg">
            Massa leve, bordas aeradas e ingredientes rigorosamente selecionados. Descubra o sabor da tradição italiana com um toque contemporâneo.
          </p>
          
          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="#cardapio" 
              className="w-full sm:w-auto rounded-full bg-[#D64527] px-8 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b8351a] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Ver Cardápio
            </Link>
            
            <Link 
              href="#sobre" 
              className="w-full sm:w-auto rounded-full border-2 border-[#F5F0E6] px-8 py-3.5 text-center font-bold text-[#F5F0E6] transition-all hover:-translate-y-0.5 active:translate-y-0 duration-300 hover:bg-[#F5F0E6] hover:text-[#2C4233] active:scale-95"
            >
              Nossa História
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
