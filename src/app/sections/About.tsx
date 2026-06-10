import Gallery from "./Gallery"; // Certifique-se de ajustar o caminho da importação de acordo com sua pasta

interface TopicItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function About() {
  const topics: TopicItem[] = [
    {
      id: 1,
      title: "Feita com Amor",
      description: "Cada disco de massa é aberto à mão com carinho, mantendo a tradição viva e garantindo um formato artesanal único.",
      icon: (
        <svg className="h-6 w-6 text-[#D64527]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Processo Lento e Natural",
      description: "Nossa massa descansa por até 48 horas. O resultado é uma digestão incrivelmente leve, com bordas aeradas e crocantes.",
      icon: (
        <svg className="h-6 w-6 text-[#D64527]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre" className="w-full bg-[#F5F0E6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          
          {/* IMPORTAÇÃO DO COMPONENTE FILHO DA GALERIA */}
          <Gallery />

          {/* CONTEÚDO INSTITUCIONAL */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-bold tracking-wider text-[#D64527] uppercase">
              Nossa Cozinha & Espaço
            </span>
            
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#2C4233] sm:text-4xl">
              Conheça a nossa <br />
              <span className="text-[#2C4233]/70 font-medium">casa e nossa paixão.</span>
            </h2>
            
            <p className="mt-4 text-base leading-relaxed text-[#2C4233]/80">
              Acreditamos que comer pizza é uma experiência visual e afetiva. Navegue pela nossa galeria ao lado para conhecer nosso forno, o cuidado no preparo e o ambiente acolhedor que preparamos para receber você e sua família.
            </p>

            {/* LISTA DE TÓPICOS */}
            <div className="mt-8 flex flex-col gap-4">
              {topics.map((topic) => (
                <div key={topic.id} className="flex gap-4 items-start rounded-2xl bg-white/40 p-4 backdrop-blur-sm border border-[#2C4233]/5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D64527]/10">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C4233] text-sm">
                      {topic.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#2C4233]/70">
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
