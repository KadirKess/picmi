import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIF0NRbFs_rjbbLEeE5ILln8vX7CxtsHwc9pBXJDIoukibEkqU4uZf2sVopyKnQAffJ7A4TG1-8LOJdXotxE0Kn6sYLCniL2x3fvsxdkJx1SqgK6xkD9SuUG_lc758-WsOY-OdDH2Z3LudtJ0LrR8jaiOasx2t9W8vqJW-wlb7NkTlo4ZXRNm-MG4FpWOptVBZHWVjijC1tl_IphyT-1iiYfBZFmdsVgEltN_U7UYu_DtYsJV8SFxh6MBMQwf-cALVO0_5-NL7Je8K",
    alt: "People laughing and partying at a night event",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQUu1gdfJeB9Zz73UFSILgldTLy8hvs2ZgFawqKeQa9x9ftsuSFOx3mkWfRFuu9l0qPYbhrhFFo_0HAA1lkpITOMvdqHbRlV4u83lghmVsPr5VE-AAM09TYlwBAU_lCW369L_J85DiviaEDwS2cMxj_JCeeGBNM9Mr7JdNyoZNHQkAOgRtcguJ375mcndG63GCxM7ii2xC2cO7_GyXA3QhMvq1l3VHROEQwJy3iW53xU9Ln3_Gmjop8R6l8CxVQELA2k_W0MrG6wUJ",
    alt: "Two friends making funny faces in a photobooth",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1UbR-Ua06en7V98aHrnjiioHxb77XSGqIQa1mvvvczLar3WYSsB8sOS23IMR1kxaJQl-Gfs3IiIE1YFm0D03n3oDpPgOhhk6eE78l4nb8civpoYM-11Jpkpok9xenbpVjdXiETmuhDol1gq6HayddA1MmGULD7Tl4-VVPDqzrFuS1KYYAJXxwZ5vzRtXg4TIv5bxpnZQdgQEccug9PwhXzfmEtnpM14FvqW1vR0IFL-Jq3rI9Mr5g0pksXja3k6hTFazQqeMKS7d",
    alt: "Wedding party guests smiling with props",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgwbIq7e9NSAn6P_KzUxT6pli5PZqMzDdXUNC53nsQ1uXfjZnGlschTuOaZjm0NDoNyfdeZzLSiRSZylZancd0TbPPhk873z6f1FFUvcHCILK4XZ9rsyeAyNs6fCvCzEytkwtDSoQ8_7vURGQrE-fuqR09rDTRq4TNQYREe081UL6aCDJDIeOQJfWuPR6w8zI-ip68ww-6FttH6etKSNOL2EAr6-0C83Lh1_tsmBY5nDo8SNjCW11DZRFxC3tdsPN7hXisBpKWQ2v",
    alt: "Corporate event networking with happy attendees",
  },
];

export default function Hero() {
  return (
    <>
      <header className="relative overflow-hidden border-b-2 border-black bg-picmi-bg">
        <div className="absolute top-20 left-10 w-24 h-24 bg-picmi-mint rounded-full border-2 border-black hidden lg:block animate-[bounce_3s_infinite] shadow-hard opacity-80"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-picmi-accent rounded-xl border-2 border-black rotate-12 hidden lg:block shadow-hard opacity-80"></div>
        <div className="absolute top-40 right-10 w-12 h-12 bg-picmi-primary rounded-full border-2 border-black hidden lg:block shadow-hard-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 text-center relative z-10">
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-extrabold text-black leading-tight tracking-tight mb-6 md:mb-8 drop-shadow-sm">
            CAPTUREZ <br className="hidden md:block" />
            <span className="text-black bg-picmi-mint px-4 py-1 md:px-6 border-2 border-black shadow-hard rounded-2xl transform rotate-2 inline-block mt-2">
              L'INSTANT
            </span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-lg md:text-2xl text-black font-medium bg-picmi-cream inline-block px-4 py-2 md:px-6 md:py-3 border-2 border-black shadow-hard rounded-xl transform -rotate-1">
            Pic'mi : La borne photo douce et stylée pour vos souvenirs.
          </p>
          <div className="mt-8 md:mt-12 flex justify-center gap-6">
            <Link
              className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 border-2 border-black text-lg md:text-2xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
              href="#contact"
            >
              RÉSERVER MAINTENANT
              <span className="material-icons ml-2 md:ml-3">photo_camera</span>
            </Link>
          </div>
        </div>

        <div className="relative h-auto md:h-80 w-full border-t-2 border-black grid grid-cols-2 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-40 md:h-full border-r-2 border-black relative group overflow-hidden ${index === 1 ? 'border-r-0 md:border-r-2' : ''
                } ${index === 3 ? 'border-r-0' : ''
                } ${index === 0
                  ? "bg-picmi-accent"
                  : index === 1
                    ? "bg-picmi-mint"
                    : index === 2
                      ? "bg-picmi-primary"
                      : "bg-picmi-cream"
                }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {index === 0 && (
                <div className="absolute inset-0 bg-picmi-accent/30 mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity"></div>
              )}
            </div>
          ))}
        </div>
      </header>
    </>
  );
}
