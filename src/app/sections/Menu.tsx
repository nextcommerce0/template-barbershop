import Image from "next/image";

// Tipagem
interface PizzaItem {
  id: number;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  badge?: string;
  imageClassName?: string;
  hoverScale?: string;
}

export default function Menu() {
  const pizzas: PizzaItem[] = [
    {
      id: 1,
      title: "Margherita Premium",
      description:
        "Molho de tomate artesanal, mozzarella de búfala, manjericão fresco e azeite extra virgem.",
      price: "49,90",
      imageSrc: "/pizzaqueijo.png",
      badge: "Mais Vendida",
    },
    {
      id: 2,
      title: "Calabresa Especial",
      description:
        "Molho de tomate, mozzarella, calabresa defumada artesanal, cebola roxa e azeitonas pretas.",
      price: "54,90",
      imageSrc: "/pizzacalabresa.jpeg",
      imageClassName: "scale-105 object-[40%_center]",
      hoverScale: "group-hover:scale-110",
    },
    {
      id: 3,
      title: "Parma",
      description:
        "Molho de tomate, mozzarella, presunto de parma especial e lascas de parmesão.",
      price: "58,90",
      imageSrc: "/pizzapresunto.png",
    },
    {
      id: 4,
      title: "Championg",
      description:
        "Molho de tomate artesanal, muçarela derretida, cogumelos champignon fatiados selecionados e um toque de orégano.",
      price: "64,90",
      imageSrc: "/pizzachamps.png",
      badge: "Destaque",
    },
  ];

  // Link WhatsApp
  const getWhatsAppLink = (pizzaName: string): string => {
    const phoneNumber = "5511999999999";

    const message = encodeURIComponent(
      `Olá! Gostaria de pedir a pizza *${pizzaName}* do cardápio do site. 🍕`,
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="cardapio" className="w-full bg-[#F5F0E6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header da seção */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2C4233] sm:text-4xl">
            Nossas Pizzas <span className="text-[#D64527]">Artesanais</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#2C4233]/80">
            Escolha a sua favorita. Cada pedido é preparado na hora e enviado
            diretamente para o WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {pizzas.map((pizza) => (
            <article
              key={pizza.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Imagem */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F5F0E6]/50">
                  {pizza.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#D64527] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {pizza.badge}
                    </span>
                  )}

                  <Image
                    src={pizza.imageSrc}
                    alt={pizza.title}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           25vw"
                    className={`
  object-cover transition-transform duration-500
  ${pizza.hoverScale ?? "group-hover:scale-105"}
  ${pizza.imageClassName ?? ""}
`}
                  />
                </div>

                {/* Conteúdo */}
                <div className="mt-4 px-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#2C4233] transition-colors duration-300 group-hover:text-[#D64527]">
                      {pizza.title}
                    </h3>

                    <div className="text-right whitespace-nowrap">
                      <span className="text-xs text-[#2C4233]/60">R$</span>

                      <span className="ml-0.5 text-xl font-black text-[#2C4233]">
                        {pizza.price}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#2C4233]/70">
                    {pizza.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 px-2 pb-2">
                <a
                  href={getWhatsAppLink(pizza.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D64527] py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#b8351a] hover:shadow-lg active:scale-95"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                  </svg>
                  Pedir no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
