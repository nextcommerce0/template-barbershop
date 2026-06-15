"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  {
    src: "/hero.jpg",
    alt: "",
    className: "left-4 top-10 w-40 lg:left-8 lg:w-56 -rotate-6",
    delay: 0,
  },
  {
    src: "/hero2.jpg",
    alt: "",
    className: "left-24 top-72 w-36 lg:left-40 lg:w-44 rotate-3",
    delay: 0.1,
  },
  {
    src: "/hero3.jpg",
    alt: "",
    className: "right-10 top-16 w-40 lg:right-16 lg:w-56 rotate-6",
    delay: 0.2,
  },
  {
    src: "/hero4.jpg",
    alt: "",
    className: "right-32 bottom-16 w-36 lg:right-48 lg:w-44 -rotate-3",
    delay: 0.3,
  },
  {
    src: "/hero5.jpg",
    alt: "",
    className: "left-1/2 top-0 w-32 -translate-x-1/2 rotate-2",
    delay: 0.4,
  },
  {
    src: "/hero6.jpg",
    alt: "",
    className: "left-1/2 bottom-0 w-32 -translate-x-1/2 -rotate-2",
    delay: 0.5,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative flex min-h-[90svh]
        items-center justify-center
        overflow-hidden
        border-b border-[#1B2A47]/10
        bg-[#FAF9F6]
      "
    >
      {/* GRADIENTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,27,27,0.06),transparent_60%)]" />

      {/* IMAGENS FLUTUANTES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: image.delay,
            }}
            className={`
              absolute
              overflow-hidden
              rounded-2xl
              border border-[#1B2A47]/10
              bg-white
              shadow-2xl
              ${image.className}
            `}
          >
            <div className="relative aspect-3/4">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONTEÚDO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          mx-auto max-w-5xl
          px-4 py-16
          text-center
          sm:px-6
          md:py-24
          lg:px-8
        "
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full
            border border-[#1B2A47]/10
            bg-white/80
            px-4 py-2
            backdrop-blur-sm
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#9E1B1B] animate-pulse" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#1B2A47]">
            Agenda aberta para esta semana
          </span>
        </motion.div>

        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mb-6
            text-4xl font-black uppercase
            leading-[0.95]
            tracking-tight
            text-[#1B2A47]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          O CORTE IMPREVISTO.
          <br />
          <span className="mt-2 block text-[#9E1B1B]">A TRADIÇÃO EXIGIDA.</span>
        </motion.h1>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            mx-auto mb-10 max-w-2xl
            text-base font-medium
            leading-relaxed
            text-[#4A5568]
            sm:text-lg
            md:text-xl
          "
        >
          Elevamos a sua experiência de autocuidado através de técnicas
          refinadas de corte e barba. Um ambiente feito para o homem moderno que
          não abre mão do clássico.
        </motion.p>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#cta"
            className="
              inline-flex w-full items-center justify-center
              rounded-md bg-[#9E1B1B]
              px-10 py-5
              text-base font-black uppercase tracking-wider
              text-[#FAF9F6]
              shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#821414]
              sm:w-auto
            "
          >
            Agendar Experiência
          </Link>

          <Link
            href="#about"
            className="
              inline-flex w-full items-center justify-center
              rounded-md border border-[#1B2A47]
              px-10 py-5
              text-base font-bold uppercase tracking-wider
              text-[#1B2A47]
              transition-all duration-300
              hover:bg-[#1B2A47]
              hover:text-[#FAF9F6]
              sm:w-auto
            "
          >
            Descobrir Mais
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
