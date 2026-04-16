const services = [
  { icon: "bi-code-slash", title: "Desenvolvimento de Software", desc: "Sistemas sob medida, escaláveis e focados em resolver problemas reais. Do backend robusto ao frontend refinado." },
  { icon: "bi-sliders", title: "Soluções Personalizadas", desc: "Soluções únicas moldadas ao seu fluxo de trabalho. Integrações, automações e ferramentas internas." },
  { icon: "bi-box-seam", title: "Produtos Digitais", desc: "Plataformas prontas para escalar. Da concepção ao lançamento, com arquitetura pensada para crescer." },
  { icon: "bi-arrow-repeat", title: "Manutenção & Suporte", desc: "Acompanhamento contínuo, monitoramento e evolução constante dos sistemas que entregamos." },
  { icon: "bi-lightbulb", title: "Consultoria Técnica", desc: "Diagnóstico e estratégia para times que precisam de direção técnica sólida antes de construir." },
  { icon: "bi-diagram-3", title: "APIs & Integrações", desc: "Conectamos sistemas legados e plataformas modernas com APIs robustas e bem documentadas." },
];

const ServicesSection = () => (
  <section id="services" className="bg-runa-dark py-16 lg:py-[100px] px-6 lg:px-12">
    <div className="max-w-[1100px] mx-auto">
      <div className="mb-14">
        <span className="text-[10.5px] tracking-[3.5px] text-runa-gray-light uppercase font-semibold mb-5 block">
          O que fazemos
        </span>
        <h2 className="font-head text-3xl lg:text-[44px] font-extralight text-runa-white leading-[1.2]">
          Nossas <strong className="font-extrabold">soluções</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-runa-white/[0.04] border border-runa-white/[0.06] p-9 lg:p-12 transition-all duration-300 hover:bg-runa-white/[0.08] hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-runa-accent text-runa-white rounded-lg flex items-center justify-center mb-7 text-xl">
              <i className={`bi ${s.icon}`} />
            </div>
            <h3 className="font-head text-xl font-bold text-runa-white mb-3">
              {s.title}
            </h3>
            <p className="text-[13px] text-runa-white/[0.42] leading-[1.75]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
