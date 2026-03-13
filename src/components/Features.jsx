import React from 'react';

const engagementCards = [
  {
    icon: "/assets/component-1-69.svg",
    title: "Engagement immédiat",
    description: "Chaque produit devient une opportunité\nde jeu",
  },
  {
    icon: "/assets/component-1-78.svg",
    title: "Fidélisation naturelle",
    description: "Les clients reviennent pour compléter leur\ncollection",
  },
  {
    icon: "/assets/component-1-1.svg",
    title: "Viralité organique",
    description: "Les fans partagent et échangent entre\neux",
  },
];

const backofficeFeatures = [
  { icon: "/assets/component-1-21.svg", title: "Générateur QR Codes", description: "Créez et téléchargez vos QR codes uniques en masse" },
  { icon: "/assets/component-1-24.svg", title: "CRM Participants", description: "Collectez et gérez vos participants avec segmentation avancée" },
  { icon: "/assets/component-1-73.svg", title: "Configuration jeux", description: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels" },
  { icon: "/assets/component-1-3.svg", title: "Analytics temps réel", description: "Suivez vos KPIs : scans, conversions, engagement, ROI" },
  { icon: "/assets/component-1.svg", title: "Gestion des lots", description: "Définissez vos récompenses et gérez les tirages au sort" },
  { icon: "/assets/component-1-2.svg", title: "Notifications", description: "Envoyez des push, emails et SMS à vos participants" },
  { icon: "/assets/component-1-4.svg", title: "Export données", description: "Téléchargez vos données en CSV, Excel ou via API" },
  { icon: "/assets/component-1-12.svg", title: "Multi-campagnes", description: "Gérez plusieurs campagnes simultanément" },
];

const miniFeatures = [
  { icon: "/assets/component-1-24.svg", title: "Utilisateurs", desc: "De 1K à illimité" },
  { icon: "/assets/component-1-21.svg", title: "QR Codes", desc: "Volume adapté" },
  { icon: "/assets/component-1-17.svg", title: "Couverture", desc: "Local à mondial" },
  { icon: "/assets/component-1-12.svg", title: "Albums", desc: "Standard ou custom" },
  { icon: "/assets/component-1-25.svg", title: "Infrastructure", desc: "Cloud ou On-Premise" },
];

const Features = () => {
  return (
    <>
      {/* Brand Engagement Section (Section verte) */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 lg:py-20 bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)] flex flex-col items-center w-full">
        <div className="flex flex-col max-w-screen-xl items-center gap-6 w-full mx-auto">
          <h2 className="font-bold text-white text-3xl sm:text-4xl text-center leading-tight sm:leading-10 w-full mb-2">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="font-normal text-green-50 text-base sm:text-lg text-center leading-7 max-w-screen-md px-4">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive<br className="hidden sm:block" />
            complète autour du football
          </p>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 pt-6 w-full">
            {engagementCards.map((card, index) => (
              <div key={index} className="flex-1 w-full lg:max-w-[400px] bg-[#ffffff1a] rounded-2xl backdrop-blur-sm px-6 py-8 flex flex-col items-center gap-4 hover:bg-[#ffffff26] transition-colors">
                <div className="flex w-16 h-16 items-center justify-center bg-[#ffffff33] rounded-xl flex-shrink-0">
                  <img className="w-8 h-8" alt={card.title} src={card.icon} />
                </div>
                <h3 className="font-semibold text-white text-lg sm:text-xl text-center leading-7">
                  {card.title}
                </h3>
                <p className="font-normal text-green-50 text-sm sm:text-base text-center leading-6 whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backoffice Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-16 lg:py-20 border border-t-0 border-[#0000001a] bg-slate-50 flex flex-col items-center w-full">
        <div className="flex flex-col max-w-screen-xl items-center gap-10 w-full mx-auto">
          <div className="flex flex-col items-center gap-4 w-full px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full mb-2">
              <img className="w-4 h-4" alt="Icon" src="/assets/component-1-76.svg" />
              <span className="font-medium text-[#0b6b3a] text-sm leading-5">Backoffice tout-en-un</span>
            </div>

            <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl text-center leading-tight sm:leading-10">
              Gérez tout depuis une interface unique
            </h2>

            <p className="font-normal text-slate-600 text-base sm:text-lg text-center leading-7 max-w-2xl">
              Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {backofficeFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col hover:shadow-md hover:border-green-200 transition-all">
                <div className="flex w-12 items-center justify-center py-3 bg-green-50 rounded-lg mb-4">
                  <img className="w-6 h-6" alt={feature.title} src={feature.icon} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{feature.title}</h3>
                <p className="font-normal text-slate-600 text-sm leading-5">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center w-full mt-6">
            <button className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors cursor-pointer w-full sm:w-auto shadow-md">
              <span className="whitespace-nowrap">Demander un accès au backoffice</span>
              <img className="w-4 h-4 ml-1" alt="Arrow" src="/assets/component-1-16.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* Mini features */}
      <section className="py-12 lg:py-16 px-6 sm:px-12 lg:px-24 bg-white border-t border-slate-200 flex flex-col items-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 w-full max-w-screen-xl mx-auto">
          {miniFeatures.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex w-12 h-12 items-center justify-center bg-green-50 rounded-lg mb-3">
                <img className="w-6 h-6" alt={item.title} src={item.icon} />
              </div>
              <span className="font-semibold text-slate-900 text-sm sm:text-base leading-6 mb-1">{item.title}</span>
              <span className="font-normal text-slate-600 text-[11px] sm:text-xs leading-tight sm:leading-4">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
