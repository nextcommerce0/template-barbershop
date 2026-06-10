import Image from "next/image";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: 1,
      name: "Rodrigo Silva",
      role: "Guia Local Google",
      comment:
        "A massa de fermentação natural deles é surreal de leve! Pedi a Margherita Premium e dá para sentir o frescor dos ingredientes.",
      rating: 5,
      avatar: "/avatar-1.png",
      date: "Há 1 semana",
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Cliente do Google",
      comment:
        "Estávamos procurando uma pizzaria artesanal de verdade e achamos. O processo de 48h realmente faz diferença.",
      rating: 5,
      avatar: "/avatar-2.png",
      date: "Há 3 dias",
    },
  ];

  return (
    <section className="w-full bg-[#F5F0E6] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-[#2C4233]/10 pb-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#D64527]">
              Depoimentos reais
            </span>

            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-[#2C4233] sm:text-4xl">
              Quem prova,{" "}
              <span className="font-medium text-[#2C4233]/70">recomenda.</span>
            </h2>
          </div>

          {/* Google rating */}
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-right">
              <div className="flex items-center gap-1 text-[#DFB15B]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-1 text-xs font-bold text-[#2C4233]">
                4.9 / 5 no Google Avaliações
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center border-l border-[#2C4233]/10 pl-3">
              <span className="text-xl font-black text-[#2C4233]">G</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-3xl border border-[#2C4233]/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Topo */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#2C4233]/10">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#2C4233]">
                      {review.name}
                    </h3>

                    <p className="text-xs text-[#2C4233]/50">{review.role}</p>
                  </div>
                </div>

                <span className="text-xs text-[#2C4233]/40">{review.date}</span>
              </div>

              {/* Estrelas */}
              <div className="mt-4 flex gap-0.5 text-[#DFB15B]">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comentário */}
              <p className="mt-3 text-sm italic leading-relaxed text-[#2C4233]/80">
                &quot;{review.comment}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
