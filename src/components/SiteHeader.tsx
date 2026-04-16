import { useState, useEffect } from "react";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "A RUNA DEV" },
    { href: "#services", label: "SOLUÇÕES" },
    { href: "#products", label: "PRODUTOS" },
    { href: "#contact", label: "CONTATO" },
  ];

  return (
    <header
      className={`sticky top-0 z-[200] bg-[#f5f6f7]/90 backdrop-blur-[10px] border-b border-runa-black/[0.08] transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""
        }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-[18px] max-w-[1400px] mx-auto">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Runa Dev"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:block">
          <ul className="flex list-none gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[11.5px] font-medium tracking-[1.5px] text-runa-black relative pb-0.5 hover:text-runa-gray-light after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-runa-gray-light after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-runa-black text-runa-white font-body text-[10px] lg:text-[11px] font-semibold tracking-[1.8px] px-4 lg:px-6 py-2 lg:py-2.5 rounded-3xl hover:bg-runa-gray-dark hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
          >
            ÁREA DO CLIENTE
          </a>

          {/* Mobile toggle */}
          <button
            className="xl:hidden text-[26px] text-runa-black"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <i className={`bi ${mobileNavOpen ? "bi-x" : "bi-list"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-runa-white z-[9998] flex flex-col pt-20 px-8 gap-2 xl:hidden">
          <button
            className="fixed top-[18px] right-5 z-[9999] text-[28px] text-runa-black"
            onClick={() => setMobileNavOpen(false)}
          >
            <i className="bi bi-x" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileNavOpen(false)}
              className="text-xl font-semibold tracking-[2px] py-3 text-runa-black font-body"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
