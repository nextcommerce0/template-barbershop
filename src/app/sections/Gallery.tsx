"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "cortes", label: "Cabelo" },
  { id: "barba", label: "Barba" },
  { id: "ambiente", label: "O Espaço" },
];

const photos = [
  {
    id: 1,
    category: "cortes",
    url: "/degrade.jpg",
    alt: "Corte Degradê Navalhado",
  },
  {
    id: 2,
    category: "barba",
    url: "/barba.jpg",
    alt: "Terapia de Barba Clássica",
  },
  {
    id: 3,
    category: "ambiente",
    url: "/cadeira.jpg",
    alt: "Cadeiras de Couro Vintage",
  },
  {
    id: 4,
    category: "cortes",
    url: "/classico.jpg",
    alt: "Corte Clássico Executivo",
  },
  {
    id: 5,
    category: "barba",
    url: "/quente.jpg",
    alt: "Alinhamento com Toalha Quente",
  },
  {
    id: 6,
    category: "ambiente",
    url: "/produtos.jpg",
    alt: "Produtos de Cuidado Masculino",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "todos") return photos;

    return photos.filter((photo) => photo.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      className="border-b border-[#1B2A47]/5 bg-[#FAF9F6] py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#9E1B1B] md:text-sm">
            Galeria de Estilos
          </span>

          <h2 className="mt-2 mb-4 text-3xl font-extrabold tracking-tight text-[#1B2A47] sm:text-4xl">
            Nosso trabalho fala por nós
          </h2>

          <p className="text-base leading-relaxed text-[#4A5568]">
            Dê uma olhada no padrão de acabamento e na atmosfera que esperam por
            você no nosso espaço.
          </p>
        </motion.div>

        {/* FILTROS */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-[#1B2A47] text-[#FAF9F6] shadow-sm"
                  : "bg-[#1B2A47]/5 text-[#4A5568] hover:bg-[#1B2A47]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid min-h-125 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#1B2A47]/10
                  bg-[#1B2A47]/5
                  shadow-sm
                  hover:shadow-xl
                "
              >
                <div className="relative aspect-4/5">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className="
                    absolute inset-0
                    flex flex-col justify-end
                    bg-[#1B2A47]/80
                    p-6
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                >
                  <span className="mb-1 text-xs font-bold uppercase tracking-wider text-[#9E1B1B]">
                    {photo.category === "cortes"
                      ? "Corte"
                      : photo.category === "barba"
                        ? "Barba"
                        : "Ambiente"}
                  </span>

                  <h3 className="text-lg font-bold text-[#FAF9F6]">
                    {photo.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
