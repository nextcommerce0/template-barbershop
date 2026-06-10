export default function Location() {
  // Substitua a URL do src do iframe abaixo pelo link incorporado real do Google Maps da sua pizzaria
  const googleMapsIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1357144011613!2d-46.678466199999995!3d-23.5276207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fd1d715d45%3A0x864e5421d6195cb1!2sAllianz%20Parque!5e0!3m2!1spt-BR!2sar!4v1781107416120!5m2!1spt-BR!2sar";

  

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#2C4233]/5 rounded-3xl overflow-hidden border border-[#2C4233]/10">
        {/* Textos de Funcionamento e Endereço */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-wider text-[#D64527] uppercase">
            Onde Estamos
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-[#2C4233]">
            Venha nos visitar ou retire seu pedido
          </h3>

          <div className="mt-6 space-y-4 text-sm text-[#2C4233]/80">
            <p className="flex items-start gap-3">
              <span className="text-[#D64527] font-bold text-base">📍</span>
              <span>
                Rua das Pizzas Artesanais, 123 — Bairro Jardins
                <br />
                São Paulo - SP, 01234-567
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#D64527] font-bold text-base">⏰</span>
              <span>
                <strong>Terça a Quinta:</strong> 18h às 23h
                <br />
                <strong>Sexta a Domingo:</strong> 18h às 23h30
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#D64527] font-bold text-base">📞</span>
              <span>(11) 99999-9999 (WhatsApp)</span>
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://maps.app.goo.gl/sErxix61SfFffXAaA" // Substitua pelo link direto de rotas do Google Maps
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-[#2C4233] px-6 py-2.5 text-xs font-bold text-[#2C4233] transition-all duration-300 hover:bg-[#2C4233] hover:text-[#F5F0E6]"
            >
              Abrir no Google Maps ➔
            </a>
          </div>
        </div>

        {/* IFRAME MAPA DO GOOGLE */}
        <div className="relative h-75 w-full lg:h-full min-h-75">
          <iframe
            src={googleMapsIframeSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Pizzaria no Google Maps"
            className="w-full h-full grayscale-20 contrast-110"
          />
        </div>
      </div>
    </div>
  );
}
