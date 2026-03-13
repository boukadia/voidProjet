import React from 'react';

const stats = [
  { icon: "/assets/component-1-46.svg", value: "500K+", label: "Interactions mensuelles" },
  { icon: "/assets/component-1-44.svg", value: "50+", label: "Marques partenaires" },
  { icon: "/assets/component-1-41.svg", value: "98%", label: "Taux de satisfaction" },
  { icon: "/assets/component-1-35.svg", value: "24/7", label: "Support technique" },
];

const CTA = () => {
  return (
    <>
      {/* Les 4 statistiques */}
      <section className="px-6 sm:px-12 lg:px-24 py-12 lg:py-[65px] bg-white border-t border-b border-slate-200 flex flex-col items-center w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 self-stretch w-full max-w-screen-xl mx-auto place-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img className="w-8 h-8" alt="Icon" src={stat.icon} />
              <span className="font-bold text-slate-900 text-2xl sm:text-3xl text-center leading-9">
                {stat.value}
              </span>
              <span className="font-normal text-slate-600 text-xs sm:text-sm text-center leading-5 px-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Le bloc rouge (Call To Action) */}
      <section className="py-16 lg:py-20 px-6 sm:px-12 bg-[linear-gradient(90deg,rgba(220,38,38,1)_0%,rgba(176,18,25,1)_100%)] flex flex-col items-center w-full">
        <div className="flex flex-col max-w-screen-xl items-center gap-6 lg:gap-4 w-full">
          <h2 className="font-bold text-white text-3xl sm:text-4xl text-center leading-tight sm:leading-10 px-4">
            Prêt à transformer votre marketing ?
          </h2>
          <p className="font-normal text-red-50 text-base sm:text-lg text-center leading-7 px-4">
            Rejoignez les marques qui engagent leurs fans avec YouCanWin
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full px-4">
            <button className="h-[60px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
              <img className="w-5 h-5 flex-shrink-0" alt="Icon" src="/assets/component-1-51.svg" />
              <span className="font-medium text-[#b01219] text-sm sm:text-base whitespace-nowrap">Planifier une démo gratuite</span>
            </button>

            <button className="h-[60px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 bg-[#ffffff1a] rounded-lg border-2 border-[#ffffff4c] backdrop-blur-sm hover:bg-[#ffffff2a] transition-colors cursor-pointer">
              <img className="w-5 h-5 flex-shrink-0" alt="Icon" src="/assets/component-1-61.svg" />
              <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">Nous contacter</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
