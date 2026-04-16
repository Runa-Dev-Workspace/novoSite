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
    <>
      <header
        className={`sticky top-0 z-[200] bg-[#f5f6f7]/90 border-b border-black/10 transition-all duration-300 ${scrolled ? "shadow-md" : ""
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
                    className="font-body text-[11.5px] font-medium tracking-[1.5px] text-black relative pb-0.5 hover:text-gray-500 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-black text-white text-[10px] lg:text-[11px] font-semibold tracking-[1.8px] px-4 lg:px-6 py-2 lg:py-2.5 rounded-3xl hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
            >
              ÁREA DO CLIENTE
            </a>

            {/* Mobile toggle */}
            <button
              className="xl:hidden text-[26px] text-black"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[9997] transition-opacity duration-300 ${mobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMobileNavOpen(false)}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[9998] transform transition-transform duration-300 ease-in-out ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header do menu */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <span className="font-semibold tracking-wide">Menu</span>

          <button
            onClick={() => setMobileNavOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileNavOpen(false)}
              className="text-[14px] font-medium tracking-[1.5px] text-black py-2 border-b border-black/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SiteHeader;