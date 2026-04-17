const ProductsSection = () => (
  <section id="products" className="bg-runa-silver-light py-16 lg:py-[100px] px-6 lg:px-12">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-[10.5px] tracking-[3.5px] text-runa-accent uppercase font-semibold mb-5 block">
          Produtos próprios
        </span>
        <h2 className="font-head text-3xl lg:text-[44px] font-extralight text-runa-black leading-[1.25] mt-3">
          Feito pela RunaDev,<br />
          <strong className="font-extrabold">para o mercado</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 auto-rows-auto">
        {/* Featured card */}
        <a
          href="https://site-blue-sigma-72.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-runa-accent rounded-xl border border-runa-black/[0.07] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-1 md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[380px] relative overflow-hidden group block"
        >
          {/* Imagem */}
          <img
            src="/images/dashub.webp"
            alt="DashHub"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Texture opcional */}
          <div className="absolute inset-0 texture-lines-sm opacity-30" />

          {/* Conteúdo (rodapé) */}
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <span className="inline-block text-[9px] tracking-[2px] uppercase font-bold py-1 px-3 rounded-2xl mb-3 bg-white/10 text-white/70 w-fit">
              EM BREVE
            </span>

            <h3 className="font-head text-[22px] font-bold text-white mb-2">
              DashHub
            </h3>

            <p className="text-[13px] text-white/60 leading-[1.6] mb-4 max-w-[260px]">
              Um CRM que aproxima relacionamentos, organiza sua operação e transforma cada contato em uma oportunidade real de crescimento.
            </p>

            {/* Botão */}
            <a 
              href="https://dashhub.runadev.com.br/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold tracking-[1.5px] px-5 py-2.5 rounded-full bg-runa-accent text-white w-fit transition-all duration-300 group-hover:bg-white group-hover:text-black"
            >
              SAIBA MAIS
            </a>
          </div>
        </a>

        {/* RunaBase */}
        <div className="bg-runa-white rounded-xl p-10 border border-runa-black/[0.07] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-0.5">
          <span className="inline-block text-[9px] tracking-[2px] uppercase font-bold py-1 px-3 rounded-2xl mb-5 bg-runa-black/[0.07] text-runa-gray">
            NOVO
          </span>
          <h3 className="font-head text-[22px] font-bold text-runa-black mb-2.5">
            RunaBase
          </h3>
          <p className="text-[13px] text-runa-gray leading-[1.75]">
            Gestão inteligente de dados para pequenas e médias empresas.
          </p>
        </div>

        {/* RunaPanel */}
        <div className="bg-runa-white rounded-xl p-10 border border-runa-black/[0.07] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-0.5">
          <span className="inline-block text-[9px] tracking-[2px] uppercase font-bold py-1 px-3 rounded-2xl mb-5 bg-runa-black/[0.05] text-runa-gray-light">
            BREVE
          </span>
          <h3 className="font-head text-[22px] font-bold text-runa-black mb-2.5">
            RunaPanel
          </h3>
          <p className="text-[13px] text-runa-gray leading-[1.75]">
            Dashboard analítico com relatórios em tempo real.
          </p>
        </div>

        {/* RunaAuth */}
        <div className="bg-runa-white rounded-xl p-10 border border-runa-black/[0.07] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-0.5">
          <h3 className="font-head text-[22px] font-bold text-runa-black mb-2.5">
            RunaAuth
          </h3>
          <p className="text-[13px] text-runa-gray leading-[1.75]">
            Sistema de autenticação e controle de acesso modular e seguro.
          </p>
        </div>

        {/* More products */}
        <div className="bg-runa-black/[0.03] rounded-xl p-10 border-[1.5px] border-dashed border-runa-black/[0.12] flex flex-col items-center justify-center text-center">
          <div className="text-[32px] text-runa-silver mb-3 font-light">+</div>
          <p className="text-xs text-runa-gray-light">
            Mais produtos em desenvolvimento
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
