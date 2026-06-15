import Link from 'next/link';

export default function Cta() {
  return (
    <section
      id="cta"
      className="border-b border-[#1B2A47]/5 bg-[#FAF9F6] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-[#FAF9F6]/10
            bg-[#1B2A47]
            px-6 py-12
            shadow-2xl
            md:p-12
            lg:p-16
            xl:p-20
          "
        >
          {/* PADRÃO DE FUNDO */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 opacity-5
              bg-[radial-gradient(#FAF9F6_1px,transparent_1px)]
              bg-size[16px_16px]
            "
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* CONTEÚDO */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <span
                className="
                  inline-block rounded-md
                  bg-[#FAF9F6]/10
                  px-3 py-1.5
                  text-xs font-bold uppercase tracking-widest
                  text-[#FAF9F6]
                  md:text-sm
                "
              >
                Praticidade no seu dia
              </span>

              <h2
                className="
                  mt-4 text-3xl font-extrabold leading-tight tracking-tight
                  text-[#FAF9F6]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Não perca tempo em filas.
                <br />
                <span className="text-[#9E1B1B]">
                  Agende seu horário online.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-5 max-w-xl
                  text-base leading-relaxed
                  text-[#FAF9F6]/80
                  md:text-lg
                  lg:mx-0
                "
              >
                Escolha o seu barbeiro de preferência, selecione os serviços e
                reserve o melhor momento para o seu cuidado em menos de 1
                minuto.
              </p>
            </div>

            {/* AÇÕES */}
            <div
              className="
                mx-auto flex w-full max-w-md flex-col gap-4
                lg:col-span-5
                lg:ml-auto
                lg:max-w-sm
              "
            >
              {/* WHATSAPP */}
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar horário via WhatsApp"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-md
                  bg-[#9E1B1B]
                  px-8 py-4
                  text-center text-base font-bold
                  text-[#FAF9F6]
                  shadow-lg
                  transition-colors duration-200
                  hover:bg-[#821414]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FAF9F6]
                  focus:ring-offset-2
                  focus:ring-offset-[#1B2A47]
                "
              >
                <svg
                  className="mr-2 h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.22 17.5c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.63.07a8.94 8.94 0 01-3.3-2.04 9.87 9.87 0 01-2.28-2.84c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.5.07-.77.37A2.94 2.94 0 009 10.7c0 1.94.7 3.82 2.16 5.28s3.34 2.16 5.28 2.16a2.94 2.94 0 002.5-1.42c.3-.27.37-.57.37-.77 0-.2-.02-.4-.17-.67z" />
                  <path d="M12 2A10 10 0 002 12a9.9 9.9 0 001.37 5L2 22l5.13-1.35A9.9 9.9 0 0012 22a10 10 0 0010-10A10 10 0 0012 2zm0 18a7.95 7.95 0 01-4.06-1.12l-.29-.17-3 .79.8-2.93-.19-.3A7.93 7.93 0 014 12a8 8 0 118 8z" />
                </svg>

                Agendar via WhatsApp
              </Link>

              {/* TELEFONE */}
              <a
                href="tel:+5511999999999"
                aria-label="Ligar para a barbearia"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-md
                  border-2 border-[#FAF9F6]/20
                  px-8 py-4
                  text-center text-base font-bold
                  text-[#FAF9F6]
                  transition-all duration-200
                  hover:bg-[#FAF9F6]
                  hover:text-[#1B2A47]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FAF9F6]
                  focus:ring-offset-2
                  focus:ring-offset-[#1B2A47]
                "
              >
                Prefere ligar? (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}