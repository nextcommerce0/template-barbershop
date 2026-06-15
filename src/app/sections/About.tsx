"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Agendamento Prático",
    desc: "Escolha seu profissional e horário em poucos cliques pelo site ou WhatsApp.",
  },
  {
    num: "02",
    title: "Consultoria de Estilo",
    desc: "Antes da tesoura, analisamos seu visagismo e formato de rosto para o melhor caimento.",
  },
  {
    num: "03",
    title: "Execução Premium",
    desc: "Corte cirúrgico combinado com navalha, toalha quente e produtos importados.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[#1B2A47]/5 bg-[#FAF9F6] py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BLOCO PRINCIPAL */}
        <div className="mb-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="group relative lg:col-span-6"
          >
            {/* MOLDURA DECORATIVA */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0 translate-x-4 translate-y-4
                rounded-xl border-2 border-[#1B2A47]
                transition-transform duration-300
                group-hover:translate-x-5
                group-hover:translate-y-5
              "
            />

            <div
              className="
                relative overflow-hidden rounded-xl
                border border-[#1B2A47]/10
                bg-[#1B2A47]/5
                shadow-xl
              "
            >
              <div className="relative aspect-4/5">
                <Image
                  src="/about.jpg"
                  alt="Barbeiro executando um corte clássico"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-6 lg:col-span-6"
          >
            <span className="block text-xs font-black uppercase tracking-widest text-[#9E1B1B] md:text-sm">
              Nossa Filosofia
            </span>

            <h2
              className="
                text-3xl font-black uppercase
                leading-tight tracking-tight
                text-[#1B2A47]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Não fazemos apenas o corte.
              <br />
              Mantemos o seu legado.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="h-1 bg-[#9E1B1B]"
            />

            <p className="text-base font-medium leading-relaxed text-[#4A5568] sm:text-lg">
              Acreditamos que a cadeira de um barbeiro é um local sagrado de
              renovação. Resgatamos o cuidado milenar da navalha e o conforto
              das toalhas quentes para oferecer uma pausa justa na sua rotina
              caótica.
            </p>

            <p className="text-sm leading-relaxed text-[#4A5568]/80 sm:text-base">
              Aqui, a técnica impecável encontra a cultura urbana. Cada traço é
              pensado individualmente para refletir a sua personalidade e
              presença onde quer que você vá.
            </p>
          </motion.div>
        </div>

        {/* EXPERIÊNCIA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#1B2A47]/10 pt-16"
        >
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:text-left"
          >
            <h3 className="text-xl font-bold uppercase tracking-wider text-[#1B2A47]">
              A Experiência no Salão
            </h3>
          </motion.header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <motion.article
                key={step.num}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group relative
                  border-l-2 border-[#1B2A47]/10
                  pl-6
                  transition-colors duration-300
                  hover:border-[#9E1B1B]
                  md:border-l-0
                  md:border-t-2
                  md:pl-0
                  md:pt-6
                "
              >
                <span
                  className="
                    absolute -left-3.5 top-0
                    block
                    text-3xl font-black
                    text-[#1B2A47]/20
                    transition-colors duration-300
                    group-hover:text-[#9E1B1B]
                    md:static
                  "
                >
                  {step.num}
                </span>

                <h4 className="mt-2 text-lg font-bold tracking-tight text-[#1B2A47] md:mt-3">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#4A5568] sm:text-base">
                  {step.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}