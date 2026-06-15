"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  {
    src: "/hero.jpg",
    alt: "Barbeiro realizando corte",
    className: "left-4 top-16 w-44 xl:w-56 -rotate-6",
    delay: 0.1,
  },
  {
    src: "/hero2.jpg",
    alt: "Cliente em atendimento",
    className: "left-12 bottom-20 w-40 xl:w-52 rotate-3",
    delay: 0.2,
  },
  {
    src: "/hero3.jpg",
    alt: "Detalhes do corte",
    className:
      "left-40 top-1/2 hidden xl:block -translate-y-1/2 w-36 xl:w-44 -rotate-3",
    delay: 0.3,
  },
  {
    src: "/hero4.jpg",
    alt: "Ambiente da barbearia",
    className: "right-4 top-16 w-44 xl:w-56 rotate-6",
    delay: 0.4,
  },
  {
    src: "/hero5.jpg",
    alt: "Barba alinhada",
    className: "right-12 bottom-20 w-40 xl:w-52 -rotate-3",
    delay: 0.5,
  },
  {
    src: "/hero6.jpg",
    alt: "Equipamentos premium",
    className:
      "right-40 top-1/2 hidden xl:block -translate-y-1/2 w-36 xl:w-44 rotate-3",
    delay: 0.6,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[90svh]
        items-center
        justify-center
        overflow-hidden
        border-b
        border-[#1B2A47]/10
        bg-[#FAF9F6]
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(158,27,27,0.08),transparent_60%)]
        "
      />

      {/* IMAGENS DECORATIVAS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {images.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 80,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: image.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.04,
            }}
            className={`
              absolute
              overflow-hidden
              rounded-2xl
              border
              border-[#1B2A47]/10
              bg-white
              shadow-[0_25px_60px_rgba(27,42,71,0.12)]
              ${image.className}
            `}
          >
            <div className="relative aspect-3/4">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1280px) 180px, 240px"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONTEÚDO */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-4
          py-16
          text-center
          sm:px-6
          md:py-24
          lg:px-8
        "
      >
        

        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
            mb-5
            text-2xl
            font-black
            uppercase
            leading-[0.92]
            tracking-tight
            text-[#1B2A47]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          O CORTE IMPREVISTO.
          <br />
          <span className="mt-2 block text-[#9E1B1B]">
            A TRADIÇÃO EXIGIDA.
          </span>
        </motion.h1>

        {/* DESCRIÇÃO */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="
            mx-auto
            mb-8
            max-w-2xl
            text-sm
            font-medium
            leading-relaxed
            text-[#4A5568]
            sm:text-base
            md:text-lg
          "
        >
          Elevamos a sua experiência de autocuidado através de técnicas
          refinadas de corte e barba. Um ambiente feito para o homem moderno que
          não abre mão do clássico.
        </motion.p>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <Link
            href="#cta"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-md
              bg-[#9E1B1B]
              px-8
              py-4
              text-sm
              font-black
              uppercase
              tracking-wider
              text-[#FAF9F6]
              shadow-xl
              transition-all
              duration-300
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
              inline-flex
              w-full
              items-center
              justify-center
              rounded-md
              border
              border-[#1B2A47]
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-[#1B2A47]
              transition-all
              duration-300
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