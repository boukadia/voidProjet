import React from 'react';

// === DATA FOR KEY METRICS SECTION ===
const metrics = [
  { value: "500K+", label: "Interactions/mois", color: "text-[#0b6b3a]" },
  { value: "50+", label: "Marques actives", color: "text-[#b01219]" },
  { value: "x3.5", label: "ROI moyen", color: "text-[#0b6b3a]" },
];

const trustedBrands = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"];

const appStats = [
  { value: "127", label: "Cartes" },
  { value: "76%", label: "Complet" },
  { value: "#12", label: "Rang" },
];

const navTabs = ["Collection", "Scanner", "Échanges", "Profil"];

const cardGridItems = [
  { topClass: "top-0", leftClass: "left-0" },
  { topClass: "top-0", leftClass: "left-[136px]" },
  { topClass: "top-0", leftClass: "left-[272px]" },
  { topClass: "top-[179px]", leftClass: "left-0" },
  { topClass: "top-[179px]", leftClass: "left-[136px]" },
  { topClass: "top-[179px]", leftClass: "left-[272px]" },
];

// === DATA FOR HERO SECTION ===
const features = [
  {
    icon: "/assets/component-1-63.svg",
    title: "Activation instantanée",
    description: "QR codes uniques sur chaque produit",
  },
  {
    icon: "/assets/component-1-65.svg",
    title: "Collection digitale",
    description: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: "/assets/component-1.svg",
    title: "Récompenses exclusives",
    description: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: "/assets/component-1-54.svg",
    title: "Analytics avancés",
    description: "Dashboard temps réel, insights consommateurs",
  },
];

const Hero = () => {
  return (
    <>
      <section id="album" className="flex min-h-[810px] items-center justify-center relative self-stretch w-full flex-[0_0_auto] bg-white overflow-hidden">
        {/* Background gradient layer */}
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(152deg,rgba(240,253,244,1)_0%,rgba(255,255,255,1)_50%,rgba(254,242,242,1)_100%)]">
          <div className="h-full bg-[linear-gradient(90deg,rgba(226,232,240,0.3)_2%,rgba(226,232,240,0)_2%),linear-gradient(180deg,rgba(226,232,240,0.3)_2%,rgba(226,232,240,0)_2%)]" />
        </div>

        {/* Main content container */}
        <div className="flex flex-col xl:flex-row max-w-screen-xl items-center xl:items-start px-4 py-8 xl:py-32 relative flex-[0_0_auto] w-full">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 relative flex-[0_0_auto] w-full justify-center">
            {/* LEFT COLUMN: Text content */}
            <div className="flex flex-col items-center xl:items-start gap-8 relative w-full xl:w-auto xl:mr-auto">
              {/* Hero heading */}
              <div className="relative self-stretch w-full h-auto xl:h-72 flex flex-col items-center xl:items-start text-center xl:text-left">
                <div className="xl:absolute xl:top-0 xl:left-0 font-bold text-slate-900 text-5xl sm:text-6xl xl:text-7xl tracking-[-1.80px] leading-[60px] sm:leading-[72px]">
                  Transformez<br className="xl:block hidden"/>chaque
                  <span className="relative inline-block mx-3 xl:absolute xl:top-[57px] xl:left-[272px] xl:mx-0">
                    <span className="bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)] bg-clip-text text-transparent">produit</span>
                    <img className="absolute w-[97.96%] h-auto bottom-[-10px] left-0 mt-1" alt="Vector" src="/assets/vector.svg" />
                  </span>
                  <br className="xl:hidden"/>
                  <span className="xl:absolute xl:top-36 xl:left-0 block mt-2 xl:mt-0">en expérience de jeu</span>
                </div>
              </div>

              {/* Description paragraph */}
              <div className="flex flex-col items-center xl:items-start relative self-stretch w-full flex-[0_0_auto] text-center xl:text-left px-4 xl:px-0 mt-8 xl:mt-0">
                <p className="relative w-fit mt-[-1.00px] font-normal text-lg sm:text-2xl tracking-[0] leading-8">
                  <span className="text-slate-600">
                    YouCanWin connecte vos marques aux fans de<br className="hidden sm:block"/>
                    football à travers des mécaniques de<br className="hidden sm:block"/>
                    gamification innovantes.
                  </span>
                  <span className="font-semibold text-slate-900">
                    {" "}Codes QR, cartes<br className="hidden sm:block"/>
                    digitales, défis et récompenses.
                  </span>
                </p>
              </div>

              {/* Key metrics row */}
              <div className="flex flex-wrap items-start justify-center xl:justify-start gap-8 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col w-[140px] sm:w-[181.33px] items-center xl:items-start gap-1 relative self-stretch">
                    <div className={`relative flex items-center self-stretch mt-[-1.00px] font-bold ${metric.color} text-3xl sm:text-4xl tracking-[0] leading-10 justify-center xl:justify-start`}>
                      {metric.value}
                    </div>
                    <div className="relative flex items-center self-stretch mt-[-1.00px] font-medium text-slate-600 text-xs sm:text-sm tracking-[0] leading-5 justify-center xl:justify-start">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] justify-center xl:justify-start">
                <button className="w-full sm:w-auto inline-flex h-[60px] items-center justify-center gap-2 px-8 rounded-xl overflow-hidden shadow-lg bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)] border-0 hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="font-medium text-white text-lg leading-7 whitespace-nowrap">Voir la démo</span>
                  <img className="w-4 h-4 ml-2" alt="Arrow" src="/assets/component-1-16.svg" />
                </button>
                <button className="w-full sm:w-auto inline-flex h-[60px] items-center justify-center gap-2 px-8 bg-white rounded-xl border-2 border-solid border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer">
                  <img className="w-5 h-5" alt="Component" src="/assets/component-1-55.svg" />
                  <span className="font-medium text-slate-700 text-lg leading-7 whitespace-nowrap">Comment ça marche</span>
                </button>
              </div>

              {/* Trusted brands section */}
              <div className="flex flex-col items-center xl:items-start gap-4 pt-[33px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t border-solid border-slate-200">
                <p className="relative flex items-center self-stretch mt-[-1.00px] font-medium text-slate-500 text-xs tracking-[0.30px] leading-4 justify-center xl:justify-start">
                  ILS NOUS FONT CONFIANCE
                </p>
                <div className="flex flex-wrap items-center justify-center xl:justify-start gap-[0px_32px] relative self-stretch w-full flex-[0_0_auto]">
                  {trustedBrands.map((brand) => (
                    <span key={brand} className="relative flex items-center w-fit mt-[-1.00px] font-medium text-slate-400 text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Mobile phone mockup */}
            <div className="flex flex-col items-center pt-8 xl:items-start xl:pt-0 xl:pl-8 xl:pr-0 relative flex-[0_0_auto] scale-[0.8] sm:scale-95 xl:scale-100 origin-top">
              <div className="inline-flex flex-col items-center xl:px-16 py-0 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col max-w-md items-start relative flex-[0_0_auto]">
                  {/* Phone frame */}
                  <div className="inline-flex flex-col items-start p-2 relative flex-[0_0_auto] bg-slate-900 rounded-[40px] overflow-hidden border-8 border-solid shadow-2xl">
                    {/* Phone screen content */}
                    <div className="inline-flex flex-col min-w-[390px] xl:min-w-[432px] items-center gap-4 pt-0 pb-[231.13px] px-0 relative flex-[0_0_auto] bg-white rounded-[32px] overflow-hidden">
                      {/* App header - green gradient */}
                      <div className="flex flex-col items-start gap-2 px-6 py-8 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)]">
                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] opacity-90">
                          <p className="relative flex items-center self-stretch mt-[-1.00px] font-medium text-white text-xs tracking-[0.30px] leading-4">
                            ALBUM DIGITAL 2025
                          </p>
                        </div>
                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <p className="relative flex items-center self-stretch mt-[-1.00px] font-bold text-white text-2xl tracking-[0] leading-8">
                            Ma Collection
                          </p>
                        </div>

                        {/* App stats row */}
                        <div className="flex items-center gap-4 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                          {appStats.map((stat) => (
                            <div key={stat.label} className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-bold text-white text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                                  {stat.value}
                                </span>
                              </div>
                              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] opacity-75">
                                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                                  {stat.label}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card grid */}
                      <div className="relative w-[380px] h-[349.31px]">
                        {cardGridItems.map((item, index) => (
                          <div
                            key={index}
                            className={`${item.topClass} ${item.leftClass} absolute w-[120px] h-[171px] rounded-lg bg-[linear-gradient(119deg,rgba(241,245,249,1)_0%,rgba(226,232,240,1)_100%)]`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation bar */}
                  <div className="inline-flex flex-col items-start pt-[13px] pb-3 absolute w-full left-0 bottom-0 bg-white border-t border-solid border-slate-200 rounded-b-[32px]">
                    <div className="flex items-start justify-end gap-10 sm:gap-14 w-full pr-6 py-0 relative flex-[0_0_auto]">
                      {navTabs.filter(tab => tab !== 'Collection').map((tab) => (
                        <div key={tab} className="inline-flex flex-col items-center gap-1 relative">
                          <div className="relative w-5 h-5 bg-slate-300 rounded" />
                          <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-slate-600 text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                              {tab}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating card: Scan QR Code (top-right) */}
                  <div className="inline-flex flex-col items-start p-[17px] absolute -top-4 right-[-17px] bg-white rounded-2xl overflow-hidden border border-solid border-slate-100 shadow-xl z-10">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <div className="flex w-10 h-10 items-center justify-center relative bg-green-100 rounded-lg">
                        <img className="relative w-5 h-5" alt="Component" src="/assets/component-1-39.svg" />
                      </div>
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <span className="relative flex items-center w-fit mt-[-1.00px] font-semibold text-slate-900 text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Scan QR Code
                        </span>
                        <span className="relative flex items-center w-fit mt-[-1.00px] font-normal text-slate-500 text-xs tracking-[0] leading-4 whitespace-nowrap">
                          Débloquer une carte
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating card: Récompense (bottom-left) */}
                  <div className="inline-flex flex-col items-start p-[17px] absolute -left-4 -bottom-4 bg-white rounded-2xl overflow-hidden border border-solid border-slate-100 shadow-xl z-10">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <div className="flex w-10 h-10 items-center justify-center relative bg-red-100 rounded-lg">
                        <img className="relative w-5 h-5" alt="Component" src="/assets/component-1-62.svg" />
                      </div>
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <span className="relative flex items-center w-fit mt-[-1.00px] font-semibold text-slate-900 text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Récompense
                        </span>
                        <span className="relative flex items-center w-fit mt-[-1.00px] font-normal text-slate-500 text-xs tracking-[0] leading-4 whitespace-nowrap">
                          Tirage hebdomadaire
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2) HERO SECTION (Terrain de jeu)
      ========================================= */}
      <section className="px-6 xl:px-24 py-12 xl:py-[81px] border-t border-b border-solid border-[#0000001a] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,245,245,1)_100%)] flex flex-col items-center xl:items-start self-stretch w-full">
        <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-12 xl:gap-16 self-stretch w-full max-w-screen-xl mx-auto">
          {/* Left: Image */}
          <div className="flex flex-col w-full xl:w-[592px] items-center xl:items-start px-0 xl:px-[72px] py-0">
            <div className="flex flex-col max-w-sm sm:max-w-md items-center xl:items-start relative w-full">
              <img 
                src="/assets/fans-de-football-avec-smartphones.png" 
                alt="Fans de football" 
                className="relative w-full xl:w-[447.98px] h-auto lg:h-[597.23px] rounded-2xl shadow-xl object-cover" 
              />
              {/* Inset border overlay */}
              <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-[inset_0px_0px_0px_1px_#0000001a,inset_0px_0px_0px_#ffffff] pointer-events-none" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col w-full xl:w-[592px] items-center xl:items-start text-center xl:text-left gap-0 px-4 xl:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full mb-3 mt-4">
              <img className="w-4 h-4" alt="Component" src="/assets/component-1-60.svg" />
              <span className="text-[#0b6b3a] whitespace-nowrap font-medium text-sm tracking-[0] leading-5">
                Solution complète
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl tracking-[0] leading-tight sm:leading-10 mb-4 mt-2">
              Le terrain de jeu digital de votre<br className="hidden xl:block" />
              marque
            </h2>

            {/* Description */}
            <p className="font-normal text-slate-600 text-base sm:text-lg tracking-[0] leading-7 mb-8 max-w-lg">
              YouCanWin transforme vos produits en expériences interactives.<br className="hidden xl:block" />
              Chaque achat devient une opportunité d'engagement avec vos<br className="hidden xl:block" />
              consommateurs.
            </p>

            {/* Feature list */}
            <div className="flex flex-col w-full items-center xl:items-start gap-4 mb-8 max-w-lg">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 self-stretch w-full text-left">
                  {/* Icon box */}
                  <div className="flex w-10 h-10 items-center justify-center bg-green-50 rounded-lg flex-shrink-0">
                    <img className="w-5 h-5" alt="Component" src={feature.icon} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-slate-900 text-base tracking-[0] leading-6">
                      {feature.title}
                    </span>
                    <span className="font-normal text-slate-600 text-sm tracking-[0] leading-5">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer w-full sm:w-auto">
              <span className="font-medium text-white text-base leading-6 whitespace-nowrap tracking-[0]">
                Planifier une démo
              </span>
              <img className="w-4 h-4" alt="Component" src="/assets/component-1-66.svg" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
