const CtaSection = () => (
  <section id="contact" className="bg-runa-black py-16 lg:py-[100px] px-6 lg:px-12 text-center relative overflow-hidden">
    <div className="absolute inset-0 texture-lines-cta pointer-events-none" />
    <div className="relative z-[1]">
     <h2 className="font-head text-4xl lg:text-[52px] font-extralight text-runa-white leading-[1.2] mb-4">
        Pronto para construir{" "}
        <strong className="font-extrabold text-runa-silver">
          algo real?
        </strong>
      </h2>
      <p className="text-base text-runa-white/[0.42] mb-10 font-light">
        Fale com a RunaDev e descubra o que podemos criar juntos.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="mailto:contato@runadev.com.br"
          className="bg-runa-accent text-runa-white font-body text-[11.5px] font-bold tracking-[1.8px] px-10 py-[15px] rounded-[28px] hover:bg-runa-silver hover:-translate-y-0.5 transition-all duration-200"
        >
          INICIAR PROJETO
        </a>
        <a
          href="#products"
          className="border border-runa-white/25 text-runa-white/70 font-body text-[11.5px] font-medium tracking-[1.8px] px-10 py-[15px] rounded-[28px] hover:border-runa-white/60 hover:text-runa-white transition-all duration-200"
        >
          VER PORTFÓLIO
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
