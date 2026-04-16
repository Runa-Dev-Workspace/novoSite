const AboutSection = () => (
  <section id="about" className="bg-runa-off-white py-16 lg:py-[100px] px-6 lg:px-12">
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Text */}
      <div>
        <span className="text-[10.5px] tracking-[3.5px] text-runa-accent uppercase font-semibold mb-5 block">
          Sobre nós
        </span>
        <h2 className="font-head text-3xl lg:text-[44px] font-extralight text-runa-black leading-[1.2] mb-7">
          Código com<br />
          <strong className="font-extrabold">propósito e alma</strong>
        </h2>
        <p className="text-[15px] text-runa-gray leading-[1.85] mb-4">
          A RunaDev nasceu da crença de que software bem construído é mais do que
          linhas de código — é a espinha dorsal do crescimento de um negócio.
        </p>
        <p className="text-[15px] text-runa-gray leading-[1.85] mb-4">
          Trabalhamos lado a lado com nossos clientes, entendendo fundo cada
          processo antes de escrever a primeira linha, garantindo que cada solução
          seja precisa, durável e estratégica.
        </p>
        <p className="italic text-runa-gray-light text-sm border-l-2 border-runa-silver pl-4 mt-6">
          "A arte ancestral de escrever o amanhã."
        </p>
      </div>

      {/* Visual */}
      <div className="bg-runa-accent rounded-2xl aspect-[4/3] relative overflow-hidden">
        {/* Imagem */}
        <img
          src="/images/about-bg.webp"
          alt="Runa Dev"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (opcional, mas recomendado) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Texture opcional */}
        <div className="absolute inset-0 texture-lines-sm opacity-40" />
      </div>
    </div>

    {/* Process */}
    <div id="process" className="max-w-[1100px] mx-auto mt-16 lg:mt-[100px]">
      <div className="text-center mb-12 lg:mb-[72px]">
        <span className="text-[10.5px] tracking-[3.5px] text-runa-accent uppercase font-semibold mb-5 block">
          Como trabalhamos
        </span>
        <h2 className="font-head text-3xl lg:text-[44px] font-extralight text-runa-black leading-[1.2] mt-3">
          Nosso <strong className="font-extrabold">processo</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
        {/* Connector line - desktop only */}
        <div className="hidden lg:block absolute top-[27px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-runa-silver" />

        {[
          { num: "01", title: "Diagnóstico", desc: "Entendemos fundo o seu negócio e mapeamos os desafios antes de qualquer proposta." },
          { num: "02", title: "Arquitetura", desc: "Desenhamos a solução ideal, escolhendo as tecnologias certas para cada cenário." },
          { num: "03", title: "Construção", desc: "Desenvolvimento ágil com entregas contínuas e comunicação transparente." },
          { num: "04", title: "Evolução", desc: "Suporte ativo e melhoria contínua após o lançamento, sempre." },
        ].map((step) => (
          <div key={step.num} className="text-center px-6 relative z-[1] group">
            <div className="w-14 h-14 bg-runa-accent rounded-full flex items-center justify-center mx-auto mb-6 font-head text-lg font-bold text-runa-white transition-colors duration-300 group-hover:bg-runa-gray-dark">
              {step.num}
            </div>
            <h4 className="font-head text-[17px] font-bold text-runa-black mb-3">
              {step.title}
            </h4>
            <p className="text-[13px] text-runa-gray leading-[1.75]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
