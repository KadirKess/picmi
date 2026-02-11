import Image from "next/image";

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-8 bg-picmi-bg" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-black mb-10 md:mb-16 text-center md:text-left drop-shadow-sm">
          NOS{" "}
          <span className="bg-picmi-cream px-4 py-1 border-2 border-black shadow-hard transform inline-block -rotate-2 rounded-xl text-picmi-text">
            SERVICES
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto md:auto-rows-[320px]">
          {/* Mariages Card */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 min-h-[300px] relative group rounded-2xl border-2 border-black bg-picmi-cream shadow-hard overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
            <div className="absolute top-6 left-6 z-10 bg-picmi-mint px-4 py-2 border-2 border-black font-bold text-sm uppercase shadow-hard-sm rounded-full">
              Le jour J
            </div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKtifpUPUp2OY4vUVQfiZAeKVW4cMkJJFd8jGKw978Do8YGx0YnPowNTjkWomXpdsSLietYHJypJMpe8oleOWUH897rMN-dEpTSm8nBiafgyrcLUCdDkntc_a9YEctbhkh4E_AmRpAQWSogZD81qHehtSNsK9_T3TDR9NQly0PyMRSNOZuJYOv1ZNi7I_0GK9lJshQNuPGqC9scobnU4hx22BS-iw7v6WEH99G25LfyXfAXdeD7LMbcdKgFSCCkDaYHwrUxU0WPYr1"
              alt="Elegant wedding couple posing near flowers"
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-picmi-cream/95 backdrop-blur-sm border-t-2 border-black p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-2">Mariages</h3>
              <p className="font-medium text-base md:text-lg text-gray-800">
                Créez des souvenirs inoubliables pour vos invités. Impression
                personnalisée avec vos prénoms et la date dans un style épuré.
              </p>
            </div>
          </div>

          {/* Soirées Card */}
          <div className="relative group rounded-2xl border-2 border-black bg-picmi-accent shadow-hard overflow-hidden flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200 min-h-[300px]">
            <div className="p-6 md:p-8">
              <span className="material-icons text-4xl md:text-5xl mb-4 md:mb-6 border-2 border-black bg-white rounded-full p-3 shadow-hard-sm text-black">
                celebration
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase">Soirées</h3>
              <p className="font-medium mt-3 text-gray-800">
                Pour les anniversaires, EVJF/EVG ou juste pour le plaisir d'être
                ensemble.
              </p>
            </div>
            <div className="h-6 bg-white w-full border-t-2 border-black pattern-dots"></div>
          </div>

          {/* Pro Card */}
          <div className="relative group rounded-2xl border-2 border-black bg-picmi-primary shadow-hard overflow-hidden flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200 min-h-[300px]">
            <div className="p-6 md:p-8 flex-grow">
              <span className="material-icons text-4xl md:text-5xl mb-4 md:mb-6 border-2 border-black bg-white rounded-full p-3 shadow-hard-sm text-black">
                work_outline
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase">Pro</h3>
              <p className="font-medium mt-3 text-gray-800">
                Team building, lancements. Un branding 100% customisable et
                élégant.
              </p>
            </div>
            <div className="bg-black text-white p-3 text-center font-bold uppercase tracking-widest text-sm border-t-2 border-black">
              Corporate
            </div>
          </div>

          {/* Qualité Studio Card */}
          <div className="md:col-span-3 relative group rounded-2xl border-2 border-black bg-white shadow-hard overflow-hidden flex flex-col md:flex-row hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
            <div className="w-full md:w-1/2 bg-picmi-bg flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-10">
              <div className="relative w-full md:w-3/4 h-56 rounded-xl overflow-hidden border-2 border-black shadow-hard-sm">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcevf2DjMHHHzTsxwLfongt2aIIgCopYZgnVnketU_VATWWAqrDxVmmwfTEGeC94izBQ60us_NnbzVm-bo6Y0NKXT-7OBHgDug69uM2v0W4ZWZlKbAmIpQ1xaTyz-2q1X0KcqAJhQV9rL1JfpX2jz-t-gDHg-FyebNATsB3z43BS4l1ZME0EtoYJ51fWMRJjFlet0P7V-iD3pnF-JRhxx5GiaqIjWAX1ESxxzsQ7RLkGRb5BbouTfd4-AYYQiL_4OLR3a9lAqgFazo"
                  alt="Close up of a professional camera lens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-picmi-cream">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-4 md:mb-6">
                Qualité Studio
              </h3>
              <ul className="space-y-4 font-medium text-lg">
                {[
                  "Appareil photo DSLR Canon",
                  "Éclairage Ring Light pro",
                  "Impression thermique 8s",
                  "Galerie privée sécurisée",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-icons text-black bg-picmi-mint rounded-full p-1 border-2 border-black mr-3 text-sm font-bold">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
