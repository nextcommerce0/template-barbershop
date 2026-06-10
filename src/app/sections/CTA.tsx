

export default function CTA() {
  // Link do WhatsApp
  const getGeneralWhatsAppLink = (): string => {
    const phoneNumber = "5511999999999";

    const message = encodeURIComponent(
      "Olá! Vi o site de vocês e gostaria de fazer um pedido. 🍕"
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="contato" className="w-full bg-[#2C4233] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        
        {/* Ícone */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F0E6]/10 text-[#DFB15B]">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Texto */}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F0E6] sm:text-4xl">
          Bateu a fome por aí? <br />
          <span className="text-[#DFB15B]">
            Peça agora direto pelo WhatsApp.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#F5F0E6]/80 md:text-lg">
          Não precisa criar conta nem preencher cadastros
          longos. É só clicar abaixo, falar com nossa equipe
          e montar seu pedido em poucos minutos.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-[#D64527] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#b8351a] hover:shadow-2xl active:scale-95 active:translate-y-0"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>

            Iniciar Pedido
          </a>
        </div>

        {/* Informação secundária */}
        <p className="mt-4 text-xs tracking-wide text-[#F5F0E6]/50">
          ⏱️ Tempo médio de entrega: 35 a 45 minutos
        </p>
      </div>
    </section>
  );
}