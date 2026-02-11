import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSimulator from "@/components/PricingSimulator";

export const metadata: Metadata = {
  title: "Pic'mi - Particuliers | Borne Photo pour vos Événements",
  description:
    "Louez une borne photo fun et stylée pour vos mariages, anniversaires et fêtes. Formules flexibles, impression instantanée et souvenirs inoubliables.",
};

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

export default function ParticuliersPage() {
  return (
    <main>
      <Navbar />

      {/* Section Accroche */}
      <section className="relative overflow-hidden border-b-2 border-black bg-picmi-bg">
        <div className="absolute top-16 left-8 w-20 h-20 bg-picmi-mint rounded-full border-2 border-black hidden lg:block animate-[bounce_3s_infinite] shadow-hard opacity-80"></div>
        <div className="absolute bottom-20 right-24 w-16 h-16 bg-picmi-accent rounded-xl border-2 border-black rotate-12 hidden lg:block shadow-hard opacity-80"></div>
        <div className="absolute top-32 right-8 w-10 h-10 bg-picmi-primary rounded-full border-2 border-black hidden lg:block shadow-hard-sm"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight tracking-snug mb-6 md:mb-8">
            Louez votre Photobooth: L'Animation Star de votre Événement
          </h1>
          <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-black font-medium bg-picmi-cream inline-block px-4 py-2 md:px-6 md:py-3 border-2 border-black shadow-hard rounded-xl transform -rotate-1">
            Mariage, Anniversaire, Soirée privée: Offrez des souvenirs
            instantanés à vos invités avec une flexibilité totale.
          </p>
          <div className="mt-8 md:mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
              Plus qu'une photo, un moment de partage. Fini les photos floues sur
              les téléphones que l'on ne regarde jamais. Avec notre Photobooth,
              vous offrez une animation ludique qui rassemble toutes les
              générations. De la grand-mère aux enfants, tout le monde se prête
              au jeu ! Vos invités repartent avec leur tirage papier, et vous,
              vous gardez une copie numérique de tous les sourires de la soirée.
            </p>
          </div>
          <div className="mt-8 md:mt-12 flex justify-center">
            <a
              className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 border-2 border-black text-lg md:text-2xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              RÉSERVER MAINTENANT
              <span className="material-icons ml-2 md:ml-3">chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Formules Flexibles */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            FORMULES FLEXIBLES :{" "}
            <span className="bg-picmi-primary px-4 py-1 border-2 border-black shadow-hard transform inline-block -rotate-1 rounded-xl">
              MAÎTRISEZ VOTRE BUDGET
            </span>
          </h2>
          <PricingSimulator />
        </div>
      </section>

      {/* Section La Borne : Design & Technologie */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-bg border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            LA BORNE :{" "}
            <span className="bg-picmi-accent px-4 py-1 border-2 border-black shadow-hard transform inline-block rotate-1 rounded-xl">
              DESIGN & TECHNOLOGIE
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Design */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-4xl mb-4 bg-picmi-mint border-2 border-black rounded-full p-3 shadow-hard-sm inline-block">
                palette
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 uppercase">
                Look Épuré
              </h3>
              <p className="font-medium text-gray-800">
                Un design élégant et minimaliste qui s&apos;intègre dans tous
                les décors. La borne Pic&apos;mi se fond dans votre événement
                tout en attirant les regards.
              </p>
            </div>

            {/* Qualité Studio */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-4xl mb-4 bg-picmi-primary border-2 border-black rounded-full p-3 shadow-hard-sm inline-block">
                camera_alt
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 uppercase">
                Qualité Studio
              </h3>
              <p className="font-medium text-gray-800">
                Appareil DSLR Canon et éclairage Ring Light professionnel. Vos
                photos ont une qualité digne d&apos;un studio, même en pleine
                fête.
              </p>
            </div>

            {/* Rapidité */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-4xl mb-4 bg-picmi-accent border-2 border-black rounded-full p-3 shadow-hard-sm inline-block">
                bolt
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 uppercase">
                Impression Rapide
              </h3>
              <p className="font-medium text-gray-800">
                Impression thermique haute qualité en seulement 8 secondes. Vos
                invités repartent avec leur photo en main, sans attendre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vos Avantages - Blocs Rassurance */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            VOS{" "}
            <span className="bg-picmi-mint px-4 py-1 border-2 border-black shadow-hard transform inline-block rotate-1 rounded-xl">
              AVANTAGES
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Souvenirs immédiats */}
            <div className="bg-picmi-primary border-2 border-black rounded-2xl shadow-hard p-8 md:p-10 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-white border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">photo_library</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                Souvenirs Immédiats
              </h3>
              <p className="font-medium text-gray-800">
                Chaque invité repart avec sa photo imprimée en quelques
                secondes. Un souvenir tangible de votre événement, à garder
                précieusement.
              </p>
            </div>

            {/* Personnalisation des cadres */}
            <div className="bg-picmi-accent border-2 border-black rounded-2xl shadow-hard p-8 md:p-10 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-white border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">brush</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                Cadres Personnalisés
              </h3>
              <p className="font-medium text-gray-800">
                Notre graphiste crée un cadre sur-mesure pour vos photos :
                prénoms, date, thème, couleurs... Chaque tirage est unique et à
                votre image.
              </p>
            </div>

            {/* Aucun stress */}
            <div className="bg-picmi-mint border-2 border-black rounded-2xl shadow-hard p-8 md:p-10 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-white border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">
                  sentiment_satisfied
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                Installation Clé en Main
              </h3>
              <p className="font-medium text-gray-800">
                Nous gérons tout de A à Z : livraison, installation, assistance
                technique. Vous n&apos;avez qu&apos;à profiter de votre
                événement, sans aucun stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ Particuliers */}
      <section className="py-12 md:py-20 bg-picmi-bg border-b-2 border-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-center uppercase border-b-4 border-picmi-primary inline-block pb-2 px-8">
            Questions Fréquentes
          </h2>
          <div className="space-y-4 md:space-y-6">


            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-accent open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Que se passe-t-il si nous avons utilisé tous les tirages papiers prévus ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Deux options s&apos;offrent à vous : le relais 100% digital
                (gratuit) où les photos sont envoyées par e-mail, ou le relais
                paiement invité où vos convives paient directement sur la borne
                via QR Code. Dans les deux cas, la fête continue !
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-primary open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Comment fonctionne le paiement par QR Code pour les invités ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                C&apos;est très simple. Si un invité veut payer sa photo, un QR Code s&apos;affiche sur l&apos;écran tactile. Il le scanne avec son téléphone, valide le paiement sécurisé (via sa carte ou Apple/Google Pay), et la photo s&apos;imprime instantanément. Pas besoin d&apos;application!
              </div>
            </details>


            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-mint open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Puis-je personnaliser le cadre des photos?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Absolument ! C'est inclus. Nous créons ensemble un contour photo
                sur-mesure avec vos prénoms, la date de l'événement et vos
                couleurs.
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-accent open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Et si je veux récupérer les photos en numérique ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                C'est prévu ! Quelques jours après l'événement, nous vous
                envoyons un lien vers une galerie privée où vous pourrez
                télécharger toutes les photos (y compris celles qui n'ont pas été
                imprimées).
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 md:py-28 px-4 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 tracking-tight">
            Réservez votre date dès maintenant !
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-800 max-w-2xl mx-auto mb-10">
            Les week-ends d'été et de fêtes sont très demandés. Contactez-nous
            pour vérifier la disponibilité et choisir votre pack.
          </p>
          <a
            className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 border-2 border-black text-xl md:text-3xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            RÉSERVER MAINTENANT
            <span className="material-icons ml-3">chat</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
