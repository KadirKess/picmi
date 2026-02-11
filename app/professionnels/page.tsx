import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pic'mi - Professionnels & Associations | Partenariat Photobooth",
  description:
    "Proposez une animation photobooth sans investissement. Revenus partagés, installation clé en main et marketing personnalisé pour vos événements professionnels.",
};

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

export default function ProfessionnelsPage() {
  return (
    <main>
      <Navbar />

      {/* Section Accroche */}
      <section className="relative overflow-hidden border-b-2 border-black bg-picmi-bg">
        <div className="absolute top-16 left-8 w-20 h-20 bg-picmi-primary rounded-full border-2 border-black hidden lg:block animate-[bounce_3s_infinite] shadow-hard opacity-80"></div>
        <div className="absolute bottom-20 right-24 w-16 h-16 bg-picmi-mint rounded-xl border-2 border-black rotate-12 hidden lg:block shadow-hard opacity-80"></div>
        <div className="absolute top-32 right-8 w-10 h-10 bg-picmi-accent rounded-full border-2 border-black hidden lg:block shadow-hard-sm"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-black leading-tight tracking-tight mb-6 md:mb-8">
            Devenez Partenaire: L'Animation Photo Rentable et Sans Risque
          </h1>
          <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-black font-medium bg-picmi-cream inline-block px-4 py-2 md:px-6 md:py-3 border-2 border-black shadow-hard rounded-xl transform -rotate-1">
            Transformez votre événement ou votre établissement avec notre borne photo en dépôt gratuit.
          </p>
          <div className="mt-8 md:mt-12 max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
              Le Photobooth: Le nouveau standard des soirées réussies.
              Aujourd'hui, un événement sans souvenirs photo est un événement
              oublié. Que ce soit pour une soirée en club, un gala étudiant, un
              festival ou une animation commerciale, vos clients veulent capturer
              l'instant et le partager immédiatement. Nous vous proposons
              d'intégrer gratuitement cette animation incontournable et de
              transformer chaque sourire en source de revenus pour vous.
            </p>
          </div>
          <div className="mt-8 md:mt-12 flex justify-center">
            <a
              className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 border-2 border-black text-lg md:text-2xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEVENIR PARTENAIRE
              <span className="material-icons ml-2 md:ml-3">handshake</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Le Concept Gagnant-Gagnant */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            LE CONCEPT{" "}
            <span className="bg-picmi-mint px-4 py-1 border-2 border-black shadow-hard transform inline-block -rotate-1 rounded-xl">
              GAGNANT-GAGNANT
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 0€ d'investissement */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-picmi-mint border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">
                  money_off
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                0€ d&apos;Investissement
              </h3>
              <p className="font-medium text-gray-800">
                Aucun frais d&apos;installation, aucun coût de location. Nous
                fournissons la borne, le matériel et les consommables.
                Vous n&apos;avancez rien.
              </p>
            </div>

            {/* Revenus partagés */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-picmi-primary border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">
                  payments
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                Revenus Partagés
              </h3>
              <p className="font-medium text-gray-800">
                Les visiteurs paient directement via un terminal de paiement sur
                la borne. Vous touchez votre part des revenus de manière
                transparente.
              </p>
            </div>

            {/* Zéro contrainte */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="bg-picmi-accent border-2 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-hard-sm">
                <span className="material-icons text-4xl">
                  thumb_up
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 uppercase">
                Zéro Contrainte
              </h3>
              <p className="font-medium text-gray-800">
                Pas de gestion technique, pas de logistique. Nous installons,
                nous gérons, vous profitez. C&apos;est aussi simple que ça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche ? */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-bg border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            COMMENT ÇA{" "}
            <span className="bg-picmi-primary px-4 py-1 border-2 border-black shadow-hard transform inline-block rotate-1 rounded-xl">
              MARCHE ?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Étape 1 - Réservation */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex gap-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="flex-shrink-0">
                <span className="bg-picmi-mint text-black w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl border-2 border-black shadow-hard-sm">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-2 uppercase">
                  Réservation
                </h3>
                <p className="font-medium text-gray-800">
                  Contactez-nous via WhatsApp. Nous discutons ensemble de votre
                  événement, du lieu et de la date. Aucun engagement financier
                  de votre part.
                </p>
              </div>
            </div>

            {/* Étape 2 - Installation */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex gap-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="flex-shrink-0">
                <span className="bg-picmi-primary text-black w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl border-2 border-black shadow-hard-sm">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-2 uppercase">
                  Installation
                </h3>
                <p className="font-medium text-gray-800">
                  Le jour J, notre équipe arrive en avance pour installer la
                  borne. Tout est pris en charge : montage, calibrage, test du
                  terminal de paiement.
                </p>
              </div>
            </div>

            {/* Étape 3 - Événement */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex gap-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="flex-shrink-0">
                <span className="bg-picmi-accent text-black w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl border-2 border-black shadow-hard-sm">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-2 uppercase">
                  Événement
                </h3>
                <p className="font-medium text-gray-800">
                  La borne tourne en autonomie. Vos visiteurs prennent des
                  photos, paient directement via le terminal et repartent avec
                  leurs tirages. Vous, vous profitez.
                </p>
              </div>
            </div>

            {/* Étape 4 - Bilan */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex gap-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <div className="flex-shrink-0">
                <span className="bg-picmi-mint text-black w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl border-2 border-black shadow-hard-sm">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-2 uppercase">
                  Bilan
                </h3>
                <p className="font-medium text-gray-800">
                  Après l&apos;événement, nous vous transmettons un bilan
                  complet : nombre de photos, revenus générés et votre part.
                  Transparence totale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section La Borne : Design & Technologie */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-cream border-b-2 border-black">
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
                Design Premium
              </h3>
              <p className="font-medium text-gray-800">
                Un design élégant et professionnel qui valorise votre marque et
                votre événement. La borne Pic&apos;mi attire les visiteurs et
                crée de l&apos;engagement.
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
                Appareil reflex Canon, éclairage Ring Light professionnel. Des
                photos de qualité studio qui reflètent le sérieux de votre
                organisation.
              </p>
            </div>

            {/* Rapidité */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-4xl mb-4 bg-picmi-accent border-2 border-black rounded-full p-3 shadow-hard-sm inline-block">
                bolt
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 uppercase">
                Impression Express
              </h3>
              <p className="font-medium text-gray-800">
                8 secondes par tirage. Un flux rapide qui évite les files
                d&apos;attente et maximise le nombre de photos — et donc vos
                revenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi devenir partenaire ? - Blocs Avantages */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-picmi-bg border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 md:mb-16 text-center">
            POURQUOI DEVENIR{" "}
            <span className="bg-picmi-primary px-4 py-1 border-2 border-black shadow-hard transform inline-block -rotate-1 rounded-xl">
              PARTENAIRE ?
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Aucun risque financier */}
            <div className="bg-picmi-mint border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm mb-4 inline-block">
                shield
              </span>
              <h3 className="text-lg font-extrabold mb-2 uppercase">
                Aucun Risque Financier
              </h3>
              <p className="font-medium text-gray-800">
                Zéro investissement, zéro avance de frais. Si la borne ne génère
                rien, vous ne payez rien. Le risque est entièrement de notre
                côté.
              </p>
            </div>

            {/* Marketing sur-mesure */}
            <div className="bg-picmi-primary border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm mb-4 inline-block">
                branding_watermark
              </span>
              <h3 className="text-lg font-extrabold mb-2 uppercase">
                Marketing Sur-Mesure
              </h3>
              <p className="font-medium text-gray-800">
                Votre logo et vos couleurs sur les cadres photo. Chaque tirage
                devient un support de communication que vos visiteurs emportent
                chez eux.
              </p>
            </div>

            {/* Revenus additionnels */}
            <div className="bg-picmi-accent border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm mb-4 inline-block">
                trending_up
              </span>
              <h3 className="text-lg font-extrabold mb-2 uppercase">
                Revenus Additionnels
              </h3>
              <p className="font-medium text-gray-800">
                Une source de revenus supplémentaire pour votre structure, sans
                effort de gestion. Les visiteurs paient directement via le
                terminal.
              </p>
            </div>

            {/* Ambiance garantie */}
            <div className="bg-picmi-cream border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm mb-4 inline-block">
                mood
              </span>
              <h3 className="text-lg font-extrabold mb-2 uppercase">
                Ambiance Garantie
              </h3>
              <p className="font-medium text-gray-800">
                Le photobooth crée naturellement de la convivialité et de
                l&apos;interaction. Vos visiteurs vivent un moment fun et
                repartent avec un souvenir.
              </p>
            </div>

            {/* Visibilité */}
            <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all duration-200 sm:col-span-2 lg:col-span-1">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm mb-4 inline-block">
                visibility
              </span>
              <h3 className="text-lg font-extrabold mb-2 uppercase">
                Visibilité Accrue
              </h3>
              <p className="font-medium text-gray-800">
                Les photos partagées sur les réseaux sociaux avec votre branding
                multiplient votre visibilité bien au-delà de l&apos;événement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 md:py-28 px-4 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 tracking-tight">
            PRÊT À DYNAMISER{" "}
            <span className="bg-picmi-mint px-4 py-1 border-2 border-black shadow-hard rounded-2xl transform inline-block -rotate-1 mt-2">
              VOTRE PROCHAIN ÉVÉNEMENT ?
            </span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-800 max-w-2xl mx-auto mb-10">
            Rejoignez les partenaires Pic&apos;mi et offrez une animation
            rentable à vos visiteurs. Aucun risque, que du positif.
          </p>
          <a
            className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 border-2 border-black text-xl md:text-3xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            DEVENIR PARTENAIRE
            <span className="material-icons ml-3">handshake</span>
          </a>
        </div>
      </section>

      {/* Section FAQ Professionnels */}
      <section className="py-12 md:py-20 bg-picmi-bg border-b-2 border-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-center uppercase border-b-4 border-picmi-primary inline-block pb-2 px-8">
            FAQ Professionnels
          </h2>
          <div className="space-y-4 md:space-y-6">
            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-primary open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Quel investissement est nécessaire de notre côté ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Aucun. Zéro euro. Nous fournissons la borne, les consommables et
                le support technique. Vous mettez à disposition l&apos;espace et
                l&apos;accès à une prise électrique, c&apos;est tout.
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-mint open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Comment fonctionne le partage de revenus ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Les visiteurs paient directement via le terminal de paiement
                intégré à la borne. À la fin de l&apos;événement, nous vous
                communiquons le bilan complet et vous recevez votre part des
                revenus selon les conditions convenues ensemble.
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-accent open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Comment se déroule l&apos;installation le jour J ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Notre équipe arrive environ 1h avant le début de
                l&apos;événement. Nous installons la borne, calibrons
                l&apos;éclairage, testons le terminal de paiement et vérifions
                que tout fonctionne parfaitement. Vous n&apos;avez rien à gérer.
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-primary open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Peut-on mettre en place une installation récurrente ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Bien sûr ! Nous proposons des partenariats récurrents pour les
                lieux qui souhaitent proposer le photobooth de manière régulière
                (chaque week-end, chaque mois, etc.). Les conditions sont
                adaptées à la fréquence. Pour en discuter,{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold hover:text-picmi-primary transition-colors"
                >
                  [Prenez rendez-vous ici]
                </a>
                .
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-mint open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Quel support marketing est fourni ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Notre graphiste conçoit un cadre photo personnalisé avec votre
                logo, vos couleurs et votre identité visuelle. Chaque tirage
                devient un support de communication que vos visiteurs partagent
                et conservent.
              </div>
            </details>
            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-accent open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                De quel espace avez-vous besoin?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Notre borne est conçue pour optimiser l'espace. Elle occupe
                moins de 1m2 au sol. Il suffit d'une prise électrique standard
                (220V) à proximité. Son design élégant lui permet de s'intégrer
                partout (hall, coin bar, entrée).
              </div>
            </details>

            <details className="bg-white border-2 border-black shadow-hard group open:bg-picmi-primary open:shadow-none open:translate-x-[4px] open:translate-y-[4px] transition-all duration-200 rounded-xl">
              <summary className="list-none flex justify-between items-center p-4 md:p-6 cursor-pointer font-bold text-lg md:text-xl">
                Que se passe-t-il en cas de panne ou de manque de papier ?
                <span className="material-icons transform group-open:rotate-180 transition-transform bg-black text-white rounded-full p-1 text-sm">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 font-medium text-base md:text-lg leading-relaxed">
                Nous surveillons l'état de la borne à distance. En cas de
                problème technique ou de besoin de consommables, notre équipe
                intervient rapidement. Tout est inclus dans le service, vous
                n'avez rien à gérer.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
