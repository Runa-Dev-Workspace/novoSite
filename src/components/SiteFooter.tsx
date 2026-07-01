const SiteFooter = () => (
  <footer className="bg-runa-gray-dark px-6 lg:px-12 pt-16 pb-8">
    {/* Top */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-runa-white/[0.08] mb-8">
      <div className="max-w-[280px]">
        <span className="font-head text-lg font-bold tracking-[3px] text-runa-white">
          RUNA DEV
        </span>
        <p className="text-[12.5px] text-runa-white/35 mt-3.5 leading-[1.75]">
          Software sob medida para negócios que não param de crescer.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 md:gap-14 flex-wrap">
        <div>
          <h5 className="text-[9.5px] tracking-[2.5px] text-runa-white/35 uppercase font-semibold mb-4 font-body">
            Empresa
          </h5>
          {["Sobre nós", "Processo", "Parceiros", "Blog"].map((l) => (
            <a key={l} href="#" className="block text-[13px] text-runa-white/60 mb-2.5 hover:text-runa-white transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <div>
          <h5 className="text-[9.5px] tracking-[2.5px] text-runa-white/35 uppercase font-semibold mb-4 font-body">
            Soluções
          </h5>
          {["Desenvolvimento", "Consultoria", "Produtos", "APIs"].map((l) => (
            <a key={l} href="#" className="block text-[13px] text-runa-white/60 mb-2.5 hover:text-runa-white transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <div>
          <h5 className="text-[9.5px] tracking-[2.5px] text-runa-white/35 uppercase font-semibold mb-4 font-body">
            Contato
          </h5>
          <a href="mailto:contato@runadev.com.br" className="block text-[13px] text-runa-white/60 mb-2.5 hover:text-runa-white transition-colors duration-200">
            contato@runadev.com.br
          </a>
          {["WhatsApp", "LinkedIn", "Área do cliente"].map((l) => (
            <a key={l} href="#" className="block text-[13px] text-runa-white/60 mb-2.5 hover:text-runa-white transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <span className="text-xs text-runa-white/[0.28]">
        © 2024 – 2026 <strong className="text-runa-white/[0.45]">RunaDev</strong>. Todos os direitos reservados. · Política de Privacidade · Cookies
      </span>
      <div className="flex gap-2.5">
        {["bi-instagram", "bi-whatsapp"].map((icon) => (
          <a
            key={icon}
            href="#"
            className="w-[38px] h-[38px] bg-runa-white/[0.06] rounded-lg flex items-center justify-center text-[15px] text-runa-white/50 hover:bg-runa-white/15 hover:text-runa-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <i className={`bi ${icon}`} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default SiteFooter;
