"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Array preparado para as suas 4 fotos da galeria
  const galleryImages: ImageItem[] = [
    { src: "/forno.jpg", alt: "Nosso forno a lenha artesanal" },
    { src: "/massa.jpg", alt: "Mãos do chef abrindo a massa com amor" },
    { src: "/local.jpg", alt: "Ambiente interno aconchegante da pizzaria" },
    { src: "/horta.jpg", alt: "Ingredientes frescos selecionados da horta" },
  ];

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full lg:w-1/2 group">
      {/* Detalhe estético de moldura traseira */}
      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-[#2C4233]/20" />
      
      {/* Container de exibição das imagens */}
      <div className="relative h-87.5 w-full overflow-hidden rounded-3xl sm:h-112.5 shadow-lg bg-[#2C4233]/5">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={index === 0}
            />
            {/* Legenda da foto atual */}
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-12 text-white text-sm font-medium">
              {image.alt}
            </div>
          </div>
        ))}

        {/* Seta Esquerda */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-[#2C4233] shadow-md backdrop-blur-sm transition-all hover:bg-white md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
          aria-label="Foto anterior"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Seta Direita */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-[#2C4233] shadow-md backdrop-blur-sm transition-all hover:bg-white md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
          aria-label="Próxima foto"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores de bolinha (Dots) */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-1.5">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-[#D64527]" : "w-2 bg-white/50"
              }`}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
