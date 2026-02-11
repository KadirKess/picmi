export default function FAQ() {
  return (
    <section className="py-12 md:py-20 bg-picmi-bg">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-center uppercase border-b-4 border-picmi-primary inline-block pb-2 px-8">
          Questions ?
        </h2>
        <div className="space-y-4 md:space-y-6">
          <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-primary open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
            <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
              Combien de temps dure l'installation ?
              <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                expand_more
              </span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
              L'installation prend environ 30 minutes. Nous arrivons 1h avant le
              début de votre événement pour tout tester et nous assurer que tout
              est parfait.
            </div>
          </details>
          <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-mint open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
            <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
              Les impressions sont-elles illimitées ?
              <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                expand_more
              </span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
              Oui ! Tirez autant de photos que vous voulez pendant la durée de
              la location. C'est fait pour être partagé sans modération.
            </div>
          </details>
          <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-accent open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
            <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
              Peut-on personnaliser le cadre photo ?
              <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                expand_more
              </span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
              Absolument. Notre graphiste crée un cadre sur-mesure selon votre
              thème, vos couleurs ou votre logo.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
