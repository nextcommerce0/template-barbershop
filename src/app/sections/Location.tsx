const hours = [
  {
    days: 'Segunda a Sexta',
    time: '09h às 20h',
  },
  {
    days: 'Sábado',
    time: '08h às 18h',
  },
  {
    days: 'Domingo e Feriados',
    time: 'Fechado',
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="border-b border-[#1B2A47]/5 bg-[#FAF9F6] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* INFORMAÇÕES */}
          <div className="space-y-8 lg:col-span-5">
            <header className="space-y-3 text-center lg:text-left">
              <span className="block text-xs font-black uppercase tracking-widest text-[#9E1B1B] md:text-sm">
                Onde Estamos
              </span>

              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#1B2A47] sm:text-4xl">
                Venha nos visitar
              </h2>

              <p className="mx-auto max-w-md text-base leading-relaxed text-[#4A5568] lg:mx-0">
                Estamos localizados em uma área de fácil acesso, com
                estacionamento conveniado para sua total comodidade.
              </p>
            </header>

            {/* CONTATOS */}
            <div className="space-y-6 border-t border-[#1B2A47]/10 pt-6">
              {/* ENDEREÇO */}
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#9E1B1B]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1B2A47]">
                    Endereço
                  </h3>

                  <address className="mt-1 not-italic text-sm leading-relaxed text-[#4A5568] sm:text-base">
                    Av. Principal da Cidade, 1234 — Centro
                    <br />
                    São Paulo - SP, 01000-000
                  </address>
                </div>
              </div>

              {/* TELEFONE */}
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#9E1B1B]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1B2A47]">
                    Telefone / WhatsApp
                  </h3>

                  <a
                    href="tel:+5511999999999"
                    className="mt-1 block text-sm text-[#4A5568] transition-colors hover:text-[#9E1B1B] sm:text-base"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </div>

            {/* HORÁRIOS */}
            <div className="rounded-xl border border-[#1B2A47]/10 bg-[#1B2A47]/5 p-6">
              <h3 className="border-b border-[#1B2A47]/10 pb-2 text-lg font-bold tracking-tight text-[#1B2A47]">
                Horários de Atendimento
              </h3>

              <div className="mt-4 space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.days}
                    className="flex items-center justify-between gap-4 text-sm sm:text-base"
                  >
                    <span className="font-medium text-[#4A5568]">
                      {item.days}
                    </span>

                    <span
                      className={`font-bold ${
                        item.time === 'Fechado'
                          ? 'text-[#9E1B1B]'
                          : 'text-[#1B2A47]'
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="lg:col-span-7">
            <div
              className="
                relative overflow-hidden rounded-xl
                border border-[#1B2A47]/10
                shadow-xl
              "
            >
              <div className="aspect-16/10 min-h-80 w-full lg:min-h-125">
                <iframe
                  title="Localização da Barbearia"
                  src="https://www.google.com/maps/embed?pb="
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              {/* BORDA DECORATIVA */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl border border-[#1B2A47]/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}