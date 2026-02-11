import Image from "next/image";

const testimonials = [
  {
    name: "Sophie M.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fgM7QMdMwCeG4I43Xt6mRhVGB3peJADQVn4VlmE9VfUtOCVy-dJ08QY6aRJ1PQbJ59lhBb7A7dKM_7q5PcvU04wcQmrotmHeXpioMeydmL9cPF54D_o7kXZlbD-cBzfrHyHsAw4K_qdzKE1loPRWt7yxh-pCQmhoDcBvtVN0eoDcwv8XPpOmaG5ulZj8n11jEnSjpFk_5KXGN-og0fOOcOQBR4bbSbYPAdkCf1q_N_sank1PF-JmOnMj4b9AXPMfdeRChUO-Lw7E",
    quote: "\"Génial ! Les invités ont adoré et la qualité des photos est top. Je recommande à 100%.\"",
    rating: 5,
    bgColor: "bg-white",
    rotate: "-rotate-2",
    zIndex: "",
  },
  {
    name: "Thomas L.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxKPm-Je9L3h4JCYQ20ojjmjJ5Ngg18UNh2LqEs2Irqu_TB4DDu0WSBm3RERCG6eG6FdaqlDfJjp6ZItJ0LOEEmnbRDXkH-_ytARiU7K_LkAlNpqKtzg2oB9S1ZfrPBrCsyUg054wxN7x4ZCX0e-b2QnFSzgWGbVjV9uCybgnx3GrKku3BJeSW6K04U2h7bFtgH6x0f_ZbBz26R9xj8D18Ew9V_DkpvqpGHPhGj4ptL6Ko1zB2Z0NkbQg6OGXmC-slGpvHFwZwcL4S",
    quote: "\"Installation super rapide et l'équipe est très sympa. Pic'mi a mis l'ambiance !\"",
    rating: 5,
    bgColor: "bg-picmi-primary",
    rotate: "rotate-3",
    zIndex: "z-10",
  },
  {
    name: "Agence K.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqlz8JW-V4h2a27JMZtd1VmtfVM9_ajauvJte5I_lDoPjaX6Dw5Pvz_7jr8pEtKV-U_iTSL2IJNW8siV8sfqb-wP_v1dW3XQQG4sez1Q2en-cvpG7gJe1AcquVwBybs6Qjuyr5xKSEhXDhlNp4wCo9D-qSdqrCTLU1M4OXRPCoMJvYMzDUL5lXlvYOJIl2PIXYrEGRAgUYndzxEg7LiqtF94MYIproIiNX500-jIK-JvGvNgGIcnPniBqd6Cm0zhzpB1OOW35Mp36z",
    quote: "\"Parfait pour notre soirée d'entreprise. La personnalisation du cadre photo était impeccable.\"",
    rating: 4.5,
    bgColor: "bg-picmi-mint",
    rotate: "-rotate-1",
    zIndex: "",
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
                <div className="w-14 h-14 bg-white rounded-full border-2 border-black overflow-hidden mr-4 relative">
                  <Image
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <div className="flex text-yellow-400 drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} className="material-icons text-base">
                        {starIndex + 0.5 === t.rating ? "star_half" : starIndex < t.rating ? "star" : "star_border"}
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
