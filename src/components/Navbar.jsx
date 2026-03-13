import React, { useState } from 'react';

const navLinks = [
  { label: "Nos offres", href: "#offres" },
  { label: "Nos jeux", href: "#jeux" },
  { label: "Album 2025", href: "#album" },
  { label: "À propos", href: "#apropos" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-[#fffffff2] shadow-[0px_1px_2px_#0000000d] backdrop-blur-[6px] px-6 lg:px-20 py-0 h-[72px] sticky top-0 z-50">
      <div className="flex max-w-screen-xl items-center justify-between w-full mx-auto relative">
        <div className="inline-flex items-center gap-3">
          <div className="flex w-10 h-10 items-center justify-center rounded-xl overflow-hidden shadow-md bg-[linear-gradient(135deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)]">
            <img className="w-5 h-5" alt="Logo" src="/assets/component-1-48.svg" />
          </div>

          <div className="relative w-[174px] h-7">
            <img className="absolute top-0 left-0 w-[116px] h-7" alt="Youcanwin" src="/assets/youcanwin.svg" />
            <div className="pl-2 absolute top-2 left-[116px] inline-flex flex-col items-start">
              <span className="px-2 py-0.5 bg-green-100 text-[#0b6b3a] rounded-full font-semibold text-[10px] leading-[15px]">
                GAMES
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:inline-flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-md font-medium text-slate-700 text-sm leading-5 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <div className="pl-4">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg shadow-sm bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)] font-medium text-white text-sm hover:opacity-90 transition-opacity">
              Demander une démo
              <img className="w-4 h-4" alt="Arrow" src="/assets/component-1-16.svg" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg border border-slate-100 rounded-b-2xl flex flex-col items-center md:hidden py-4 gap-2 px-6 z-40">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-3 font-medium text-slate-700 text-base border-b border-slate-100 last:border-0 hover:text-[#0b6b3a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-sm bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)] font-medium text-white text-sm hover:opacity-90 transition-opacity">
              Demander une démo
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
