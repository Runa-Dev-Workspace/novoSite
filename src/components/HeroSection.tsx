const HeroSection = () => {
  const scrollToNumbers = () => {
    document.querySelector("#numbers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 lg:px-12 py-16 lg:pt-20 lg:pb-[120px]"
    >
      {/* Background otimizado */}
      <img
        src="/images/hero-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Overlay (mantido visual parecido, mas mais leve) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* REMOVIDO:
          - texture-lines
          - radial-gradient gigante
          - overflow-hidden
          - animação
      */}

      <div className="relative z-[1] max-w-[760px]">
        <p className="text-[11px] tracking-[4px] text-runa-gray-light font-medium uppercase mb-6">
          Desenvolvimento de software sob medida
        </p>

        <h1 className="font-head text-4xl md:text-5xl lg:text-[68px] font-extralight text-runa-white leading-[1.1] mb-5">
          Software que{" "}
          <strong className="font-extrabold text-runa-silver">
            evolui
          </strong>
          <br />
          com o seu negócio
        </h1>

        <p className="text-[15px] lg:text-base text-runa-white/[0.42] max-w-[480px] mx-auto mb-12 font-light leading-[1.8]">
          Transformamos desafios complexos em soluções digitais elegantes,
          escaláveis e centradas no resultado.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#services"
            className="bg-runa-accent text-runa-white font-body text-[11.5px] font-bold tracking-[1.8px] px-9 py-3.5 rounded-[28px]"
          >
            CONHEÇA NOSSAS SOLUÇÕES
          </a>

          <a
            href="#products"
            className="border border-runa-white/[0.22] text-runa-white/70 font-body text-[11.5px] font-medium tracking-[1.8px] px-9 py-3.5 rounded-[28px]"
          >
            VER PRODUTOS
          </a>
        </div>
      </div>

      {/* Scroll indicator SEM animação */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToNumbers}
      >
        <span className="text-[9px] tracking-[3px] text-runa-white/30 font-semibold">
          ROLAR
        </span>

        <div className="w-px h-11 bg-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;