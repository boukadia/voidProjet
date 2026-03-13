import React from 'react';

const gameCards = [
  {
    id: 1,
    image: "/assets/album-de-collection-digitale.png",
    title: "Album Digital 2025",
    description: "Collection de cartes avec\néchanges et défis.",
    badge: { label: "STAR", bg: "bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(11,107,58,1)_100%)]" },
    discover: true,
  },
  {
    id: 2,
    image: "/assets/quiz-football.png",
    title: "Quiz Football",
    description: "Questions sur l'actualité et\nl'histoire du foot.",
    badge: { label: "BIENTÔT", bg: "bg-slate-600" },
    discover: false,
  },
  {
    id: 3,
    image: "/assets/tombola-digitale.png",
    title: "Tombola digitale",
    description: "Tirages au sort avec lots\nsponsorisés.",
    badge: null,
    discover: false,
  },
  {
    id: 4,
    image: "/assets/pronostics.png",
    title: "Pronostics",
    description: "Prédictions de matchs et\nclassements.",
    badge: null,
    discover: false,
  },
];

const Games = () => {
  return (
    <section id="jeux" className="px-6 md:px-12 lg:px-20 py-16 lg:py-20 bg-slate-50 flex flex-col items-center w-full">
      <div className="flex flex-col max-w-screen-xl items-center gap-10 lg:gap-12 px-4 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl text-center leading-tight sm:leading-10">
            Catalogue de jeux
          </h2>
          <p className="font-normal text-slate-600 text-base sm:text-lg text-center leading-7 px-4">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full place-items-center sm:place-items-stretch">
          {gameCards.map((card) => (
            <div key={card.id} className="flex flex-col w-full max-w-[320px] lg:max-w-[294px] mx-auto bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative hover:shadow-lg transition-shadow">
              {card.badge && (
                <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl z-10 ${card.badge.bg}`}>
                  <span className="font-semibold text-white text-xs">{card.badge.label}</span>
                </div>
              )}

              <div className="w-full bg-slate-100 flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-[219px] object-cover" />
              </div>

              <div className="flex flex-col p-6 gap-2">
                <h3 className="font-semibold text-slate-900 text-base">{card.title}</h3>
                <p className="font-normal text-slate-600 text-sm whitespace-pre-line leading-5">{card.description}</p>
                
                {card.discover && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-medium text-green-600 text-sm cursor-pointer hover:underline">Découvrir</span>
                    <img className="w-4 h-4" alt="Arrow" src="/assets/component-1-16.svg" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
