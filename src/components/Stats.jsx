import React from 'react';

const steps = [
  { number: 1, title: "Achat produit", desc: "Le client achète votre produit\nen magasin", icon: "/assets/component-1-67.svg", color: "green" },
  { number: 2, title: "Scan QR Code", desc: "Il scanne le code sur\nl'emballage", icon: "/assets/component-1-21.svg", color: "green" },
  { number: 3, title: "Déblocage carte", desc: "Une carte digitale est\ndébloquée", icon: "/assets/component-1-12.svg", color: "green" },
  { number: 4, title: "Collection", desc: "Il complète sa collection", icon: "/assets/component-1-74.svg", color: "red" },
  { number: 5, title: "Récompenses", desc: "Participe aux tirages", icon: "/assets/component-1.svg", color: "red" },
];

const Stats = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 lg:py-20 bg-white flex flex-col items-center w-full">
      <div className="flex flex-col max-w-screen-xl items-center gap-12 lg:gap-16 px-4 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl text-center leading-tight sm:leading-10 px-4">Un parcours client simple et engageant</h2>
          <p className="font-normal text-slate-600 text-base sm:text-lg text-center leading-7 px-4">De l'achat du produit à la récompense, en 5 étapes</p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8 w-full">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col w-56 items-center">
              <div className="relative flex flex-col items-center">
                <div className={`flex w-16 h-16 items-center justify-center bg-white rounded-2xl border-2 ${step.color === 'green' ? 'border-green-200' : 'border-red-200'} shadow-sm relative z-0`}>
                  <img className="w-6 h-6" alt={step.title} src={step.icon} />
                </div>
                <div className={`flex w-7 h-7 items-center justify-center rounded-full absolute -top-2 -right-3 z-10 ${step.color === 'green' ? 'bg-green-600' : 'bg-red-600'}`}>
                  <span className="font-bold text-white text-xs">{step.number}</span>
                </div>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <span className="font-semibold text-slate-900 text-base text-center">{step.title}</span>
                  <span className="font-normal text-slate-600 text-sm text-center whitespace-pre-line">{step.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
