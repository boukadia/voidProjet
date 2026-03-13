import React from 'react';

const plans = [
  {
    id: "starter",
    iconSrc: "/assets/component-1-22.svg",
    iconBg: "bg-green-50",
    title: "Starter",
    subtitle: "Campagne locale",
    description: "Idéal pour tester sur un marché",
    pricingNote: "Tarification sur mesure selon vos volumes",
    features: ["Jusqu'à 1 000 utilisateurs", "Jusqu'à 10K QR codes", "1 pays / région", "Album standard", "Hébergement Cloud", "Backoffice simplifié"],
    ctaLabel: "Demander un devis",
    ctaVariant: "outline",
    isPopular: false,
    cardClass: "border-slate-200",
  },
  {
    id: "scale",
    iconSrc: "/assets/component-1-15.svg",
    iconBg: "",
    title: "Scale",
    subtitle: "Expansion nationale",
    description: "Pour des campagnes d'envergure",
    pricingNote: "Tarification sur mesure selon vos volumes",
    features: ["Jusqu'à 50 000 utilisateurs", "QR codes illimités", "Multi-pays (jusqu'à 5)", "Album complet", "Cloud ou On-Premise", "Backoffice avancé avec analytics", "Support prioritaire 24/7", "API REST"],
    ctaLabel: "Planifier une démo",
    ctaVariant: "solid",
    isPopular: true,
    cardClass: "border-red-200 shadow-xl",
  },
  {
    id: "enterprise",
    iconSrc: "/assets/component-1-17.svg",
    iconBg: "bg-green-50",
    title: "Enterprise",
    subtitle: "Solution globale",
    description: "Pour les groupes internationaux",
    pricingNote: "Tarification sur mesure selon vos volumes",
    features: ["Utilisateurs illimités", "QR codes illimités", "Déploiement mondial", "Albums personnalisés", "Infrastructure dédiée", "Développements sur-mesure", "SLA garanti 99.9%"],
    ctaLabel: "Contactez-nous",
    ctaVariant: "outline",
    isPopular: false,
    cardClass: "border-slate-200",
  },
];

const Pricing = () => {
  return (
    <section id="offres" className="px-6 sm:px-12 lg:px-20 py-12 lg:py-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] w-full flex justify-center">
      <div className="flex flex-col max-w-screen-xl items-center gap-10 lg:gap-12 px-4 py-16 lg:py-20 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl text-center leading-tight sm:leading-10">
            Des formules adaptées à votre échelle
          </h2>
          <p className="font-normal text-slate-600 text-base sm:text-lg text-center leading-7 px-4">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full pt-4">
          {plans.map((plan) => (
            <div key={plan.id} className="relative flex-1 flex">
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 w-full flex justify-center z-10">
                  <div className="px-4 py-1.5 rounded-full bg-[linear-gradient(90deg,rgba(220,38,38,1)_0%,rgba(176,18,25,1)_100%)] shadow-md">
                    <span className="font-semibold text-white text-sm">POPULAIRE</span>
                  </div>
                </div>
              )}

              <div className={`flex flex-col bg-white rounded-2xl border ${plan.cardClass} p-8 w-full relative`}>
                <div className={`flex w-12 h-12 items-center justify-center ${plan.iconBg || 'bg-slate-50'} rounded-xl mb-4`}>
                  <img className="w-6 h-6" alt="Icon" src={plan.iconSrc} />
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-slate-900 text-xl">{plan.title}</h3>
                  <p className="font-medium text-green-600 text-sm">{plan.subtitle}</p>
                </div>

                <p className="text-slate-600 text-base mb-4">{plan.description}</p>
                <div className="border-t border-slate-100 py-4 mb-2">
                  <p className="text-slate-500 text-sm">{plan.pricingNote}</p>
                </div>

                <div className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <img className="w-5 h-5 flex-shrink-0" alt="Check" src="/assets/component-1-5.svg" />
                      <span className="font-normal text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium text-base transition-colors ${
                    plan.ctaVariant === 'solid' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {plan.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
