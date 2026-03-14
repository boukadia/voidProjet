import React from 'react';

const Footer = () => {
  return (
    <footer id="apropos" className="flex flex-col w-full items-center pt-8 bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-4 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="flex w-8 h-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)]">
                <img className="w-4 h-4" alt="Logo" src="/assets/component-1-48.svg" />
              </div>
              <span className="font-bold text-lg leading-7 tracking-tight">
                <span className="text-[#b01219]">You</span>
                <span className="text-slate-800">can</span>
                <span className="text-[#0b6b3a]">win</span>
              </span>
            </div>
            <p className="font-normal text-slate-600 text-sm leading-5">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>
            <div className="flex gap-3">
              {["/assets/component-1-50.svg", "/assets/component-1-39.svg", "/assets/component-1-37.svg", "/assets/component-1-53.svg"].map((src, i) => (
                <div key={i} className="flex w-8 h-8 items-center justify-center bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors">
                  <img src={src} className="w-4 h-4" alt="Social" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold text-slate-900 text-base">Liens rapides</h4>
            <ul className="space-y-2">
              {["Nos offres", "Nos jeux", "Album 2025", "À propos"].map(link => (
                <li key={link}><a href="#" className="text-slate-600 text-sm hover:text-slate-900">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold text-slate-900 text-base">Contact & Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 text-sm hover:text-slate-900">games@agency.africa</a></li>
              <li><a href="#" className="text-slate-600 text-sm hover:text-slate-900">Mentions légales</a></li>
              <li><a href="#" className="text-slate-600 text-sm hover:text-slate-900 inline-flex items-center gap-1">Protection des données (CNDP) <img src="/assets/component-1-58.svg" className="w-3 h-3" alt=""/></a></li>
              <li><a href="#" className="text-slate-600 text-sm hover:text-slate-900">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-[33px] pb-0 px-0 self-stretch w-full border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-center md:text-left">
            <p className="text-slate-600 text-sm sm:text-base">© 2025 Youcanwin. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm text-slate-600">
              <span>Un service de</span>
              <span className="font-semibold text-[#0b6b3a]">Agency.Africa</span>
              <span className="hidden sm:inline">—</span>
              <span className="font-medium">games.agency.africa</span>
            </div>
          </div>

          {/* CNDP compliance badge */}
          <div className="flex items-start justify-center self-stretch w-full">
            <div className="inline-flex items-center gap-2 px-[17px] py-[9px] bg-green-50 rounded-lg border border-solid border-green-200">
              <img
                className="w-5 h-5"
                alt="CNDP"
                src="/assets/component-1-45.svg"
              />
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0b6b3a] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Site conforme CNDP Maroc
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
