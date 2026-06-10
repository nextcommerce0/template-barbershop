"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Qual é o tempo médio de entrega?",
      answer:
        "Nosso tempo médio de entrega varia entre 35 e 45 minutos, dependendo da sua região e do dia da semana. No momento do fechamento do pedido pelo WhatsApp, nossa equipe informa o tempo exato estimado.",
    },
    {
      id: 2,
      question:
        "Vocês cobram taxa de entrega? Como ela é calculada?",
      answer:
        "Sim. A taxa é calculada com base na distância entre a pizzaria e o endereço de entrega. Para bairros vizinhos, frequentemente oferecemos taxa reduzida ou promoções especiais.",
    },
    {
      id: 3,
      question:
        "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos Pix, cartões de crédito e débito das principais bandeiras e vale-refeição (Alelo, Sodexo e Ticket). Consulte disponibilidade no atendimento.",
    },
    {
      id: 4,
      question:
        "Como funciona a massa de fermentação natural de 48 horas?",
      answer:
        "Nossa massa passa por um processo de maturação lenta de até 48 horas sob temperatura controlada. Isso garante uma pizza mais leve, bordas aeradas e sabor muito mais intenso.",
    },
    {
      id: 5,
      question: "Posso fazer um pedido agendado?",
      answer:
        "Sim! Pelo WhatsApp você pode agendar horário de entrega ou retirada, ideal para reuniões, festas e finais de semana.",
    },
  ];

  const toggleFAQ = (id: number): void => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F5F0E6] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#D64527]">
            Dúvidas Frequentes
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#2C4233] sm:text-4xl">
            Ficou com alguma{" "}
            <span className="font-medium text-[#2C4233]/70">
              dúvida?
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#2C4233]/5 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-300 hover:bg-[#2C4233]/5 sm:p-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className="text-base font-bold text-[#2C4233] sm:text-lg">
                    {item.question}
                  </span>

                  {/* Ícone */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D64527]/10 text-[#D64527] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Resposta */}
                <div
                  id={`faq-content-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] border-t border-[#2C4233]/5 bg-[#F5F0E6]/10"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 text-sm leading-relaxed text-[#2C4233]/80 sm:p-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}