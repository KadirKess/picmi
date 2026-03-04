import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pic'mi - Mentions Légales, CGV & RGPD",
  description:
    "Conditions Générales de Location, politique de confidentialité et informations RGPD de Pic'mi.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="page-transition">
      <Navbar />

      <section className="bg-picmi-bg border-b-2 border-black py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-4">
            MENTIONS{" "}
            <span className="bg-picmi-accent px-4 py-1 border-2 border-black shadow-hard rounded-xl inline-block -rotate-1 transform">
              LÉGALES
            </span>
          </h1>
          <p className="text-lg font-medium text-gray-700 mt-4">
            CGV, Confidentialité &amp; RGPD — Dernière mise à jour : janvier 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-picmi-cream">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* CGV */}
          <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 pb-3 border-b-2 border-black">
              Conditions Générales de Location
            </h2>

            <div className="space-y-6 font-medium text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">1. Objet</h3>
                <p>
                  Les présentes Conditions Générales de Location (CGL) régissent la mise à disposition
                  de bornes photobooth par Pic&apos;mi dans le cadre d&apos;événements privés ou professionnels.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">2. Réservation &amp; Acompte</h3>
                <p>
                  Toute réservation est confirmée à réception d&apos;un acompte de 30% du montant total.
                  La date est bloquée uniquement après réception de cet acompte.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">3. Annulation</h3>
                <p>
                  En cas d&apos;annulation plus de 30 jours avant l&apos;événement, l&apos;acompte est intégralement
                  remboursé. En deçà de 30 jours, l&apos;acompte reste acquis à Pic&apos;mi.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">4. Responsabilité</h3>
                <p>
                  Le client s&apos;engage à fournir un espace adéquat (minimum 2m²) et une alimentation
                  électrique standard (220V). Pic&apos;mi n&apos;est pas responsable des dommages causés par
                  une mauvaise utilisation de la borne.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">5. Partenariats Professionnels</h3>
                <p>
                  Pour les partenariats professionnels (bars, clubs, festivals, associations),
                  aucun investissement n&apos;est requis. Les revenus sont partagés selon les modalités
                  définies dans la convention de partenariat signée entre les parties.
                </p>
              </div>
            </div>
          </div>

          {/* Confidentialité */}
          <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 pb-3 border-b-2 border-black">
              Politique de Confidentialité
            </h2>

            <div className="space-y-6 font-medium text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Données collectées</h3>
                <p>
                  Pic&apos;mi collecte uniquement les données nécessaires au bon déroulement de la
                  prestation : nom, prénom, adresse email, numéro de téléphone et informations
                  relatives à l&apos;événement.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Utilisation</h3>
                <p>
                  Ces données sont utilisées exclusivement pour la gestion des réservations,
                  la personnalisation des cadres photo et la transmission de la galerie numérique
                  après l&apos;événement. Elles ne sont jamais vendues à des tiers.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Conservation</h3>
                <p>
                  Les données sont conservées pendant une durée maximale de 3 ans après la
                  prestation, puis supprimées. Les photos de l&apos;événement sont supprimées après
                  envoi de la galerie numérique, sauf accord contraire du client.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Vos droits</h3>
                <p>
                  Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
                  données. Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                    picmi@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* RGPD */}
          <div id="rgpd" className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 pb-3 border-b-2 border-black">
              RGPD
            </h2>

            <div className="space-y-6 font-medium text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Responsable du traitement</h3>
                <p>
                  Pic&apos;mi est responsable du traitement des données personnelles collectées
                  dans le cadre de ses activités de location de photobooth.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Base légale</h3>
                <p>
                  Le traitement des données repose sur l&apos;exécution du contrat (réservation)
                  et, le cas échéant, sur le consentement explicite de l&apos;utilisateur.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Photos des invités</h3>
                <p>
                  Les photos prises par la borne sont des données personnelles au sens du RGPD.
                  L&apos;organisateur de l&apos;événement est responsable d&apos;informer ses invités de
                  la présence d&apos;une borne photobooth et de la collecte de photos.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold uppercase text-lg mb-2">Contact DPO</h3>
                <p>
                  Pour toute question relative à la protection de vos données, écrivez-nous à{" "}
                  <a href="mailto:picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                    picmi@gmail.com
                  </a>
                  . Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
