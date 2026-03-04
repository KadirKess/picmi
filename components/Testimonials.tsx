const testimonials = [
  {
    name: "Julien B.",
    initials: "JB",
    quote: "\"Une vraie bonne surprise ! Tout le monde s'est pris au jeu, même les plus timides. Les photos sont superbes et le souvenir reste.\"",
    rating: 5,
    bgColor: "bg-white",
    rotate: "-rotate-2",
    zIndex: "",
    initialsColor: "bg-picmi-mint",
  },
  {
    name: "Raphael M.",
    initials: "RM",
    quote: "\"Installation rapide, équipe au top et ambiance assurée. Le photobooth a été LE moment fort de notre soirée.\"",
    rating: 5,
    bgColor: "bg-picmi-primary",
    rotate: "rotate-3",
    zIndex: "z-10",
    initialsColor: "bg-picmi-accent",
  },
  {
    name: "Kadir K.",
    initials: "KK",
    quote: "\"Parfait pour notre événement d'entreprise. La personnalisation du cadre photo était impeccable, tout le monde a adoré.\"",
    rating: 5,
    bgColor: "bg-picmi-mint",
    rotate: "-rotate-1",
    zIndex: "",
    initialsColor: "bg-picmi-primary",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-picmi-cream border-y-2 border-black relative overflow-hidden"
      id="temoignages"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-12 md:mb-20 text-black">
          ILS ONT{" "}
          <span className="bg-picmi-accent px-4 py-1 border-2 border-black text-black shadow-hard inline-block transform rotate-1 rounded-xl">
            ADORÉ
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`w-full max-w-sm ${t.bgColor} p-6 md:p-8 border-2 border-black shadow-hard transform ${t.rotate} hover:rotate-0 hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer sticker-hover ${t.zIndex}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 ${t.initialsColor} rounded-full border-2 border-black flex items-center justify-center mr-4 shadow-hard-sm`}>
                  <span className="font-extrabold text-black text-lg tracking-tight">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <div className="flex text-yellow-400 drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} className="material-icons text-base">
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-medium italic text-gray-900">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
