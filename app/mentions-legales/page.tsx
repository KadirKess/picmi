import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pic'mi - Mentions Légales & CGV",
  description:
    "Conditions Générales de Location et de Prestation, Mentions Légales et informations RGPD de Pic'mi / Jouzosesa.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 pb-3 border-b-2 border-black">
        {title}
      </h2>
      <div className="space-y-6 font-medium text-gray-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Article({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-3">
      <h3 className="font-extrabold uppercase text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
}

function SubArticle({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h4 className="font-extrabold text-base">{title}</h4>
      {children}
    </div>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

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
            CGV, Mentions Légales &amp; RGPD
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-picmi-cream">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* CGV */}
          <Section title="Conditions Générales de Location et de Prestation">
            <Article title="Préambule">
              <p>
                Les présentes Conditions Générales de Location et de Prestation (ci-après « CGL »)
                régissent les relations contractuelles entre :
              </p>
              <p>
                <strong>Jouzosesa</strong>, SASU au capital de 3 000 euros, immatriculée au RCS de Nanterre sous le
                numéro 101 148 906, dont le siège social est situé 88 rue Pierre Brossolette, 92250 La
                Garenne-Colombes, exerçant sous le nom commercial « Pic&apos;mi » (ci-après « Pic&apos;mi »),
              </p>
              <p>et</p>
              <p>
                Toute personne physique ou morale (ci-après le « Client ») souhaitant louer une borne photo
                proposée par Pic&apos;mi.
              </p>
              <p>Toute commande implique l&apos;acceptation sans réserve des présentes CGL.</p>
            </Article>

            <Article title="Article 1 — Objet">
              <p>Pic&apos;mi propose un service de location de borne photo comprenant notamment :</p>
              <Ul items={[
                "livraison et installation,",
                "personnalisation graphique,",
                "impression instantanée,",
                "mise à disposition numérique des photos.",
              ]} />
              <p>Les présentes CGL s&apos;appliquent aux Clients particuliers et professionnels.</p>
            </Article>

            <Article title="Article 2 — Formation du contrat">
              <p>Les réservations sont traitées par ordre d&apos;arrivée et sous réserve de disponibilité.</p>
              <p>Le contrat est définitivement formé à réception :</p>
              <Ul items={[
                "du devis signé,",
                "du versement d'un acompte indiqué sur le devis.",
              ]} />
              <p>
                Le versement d&apos;un acompte constitue un engagement ferme et définitif des deux parties.
                Il ne constitue pas des arrhes au sens de l&apos;article 1590 du Code civil.
              </p>
            </Article>

            <Article title="Article 3 — Tarifs et paiement">
              <SubArticle title="3.1 Tarifs">
                <p>
                  Les prix sont exprimés en euros TTC. La TVA applicable est celle en vigueur au jour de facturation.
                </p>
              </SubArticle>
              <SubArticle title="3.2 Modalités de paiement">
                <p>Le paiement s&apos;effectue par virement bancaire ou carte bancaire.</p>
                <p>Le solde est exigible au plus tard le jour de l&apos;installation sauf stipulation contraire au devis.</p>
              </SubArticle>
              <SubArticle title="3.3 Retard de paiement (professionnels)">
                <p>Conformément à l&apos;article L441-10 du Code de commerce :</p>
                <Ul items={[
                  "intérêts de retard au taux légal en vigueur,",
                  "indemnité forfaitaire de 40 € pour frais de recouvrement.",
                ]} />
              </SubArticle>
            </Article>

            <Article title="Article 4 — Livraison et installation">
              <SubArticle title="4.1 Zone d'intervention">
                <p>Livraison en Île-de-France et hors région sur devis spécifique.</p>
              </SubArticle>
              <SubArticle title="4.2 Conditions techniques">
                <p>Le Client s&apos;engage à fournir :</p>
                <Ul items={[
                  "un emplacement couvert et sécurisé,",
                  "une alimentation électrique 220V conforme,",
                  "une connexion Wi-Fi stable si nécessaire,",
                  "un accès adapté (porte, ascenseur, absence d'obstacles).",
                ]} />
                <p>En cas d&apos;impossibilité d&apos;installation du fait du Client, la prestation reste intégralement due.</p>
              </SubArticle>
            </Article>

            <Article title="Article 5 — Garde, responsabilité et dépôt de garantie">
              <SubArticle title="5.1 Transfert de garde">
                <p>
                  La garde juridique et matérielle est transférée au Client à la fin de l&apos;installation
                  et jusqu&apos;à la reprise du matériel.
                </p>
              </SubArticle>
              <SubArticle title="5.2 Responsabilité">
                <p>Le Client est responsable de toute perte, vol ou dégradation survenant pendant la location.</p>
              </SubArticle>
              <SubArticle title="5.3 Dépôt de garantie">
                <p>Un dépôt de garantie de 2 000 € est exigé avant installation.</p>
                <p>Il a pour objet de garantir les dégradations éventuelles.</p>
                <p>En cas de dommage constaté :</p>
                <Ul items={[
                  "la retenue sera limitée au coût réel des réparations ou du remplacement,",
                  "sur présentation de justificatifs.",
                ]} />
                <p>Si le montant dépasse 2 000 €, Pic&apos;mi pourra réclamer le complément.</p>
                <p>La restitution intervient dans un délai maximal de 7 jours après reprise.</p>
              </SubArticle>
            </Article>

            <Article title="Article 6 — Panne technique">
              <p>En cas de panne non imputable au Client :</p>
              <Ul items={[
                "information immédiate,",
                "tentative de dépannage.",
              ]} />
              <p>Si la borne est inutilisable, un remboursement prorata temporis sera effectué.</p>
              <p>Aucune autre indemnité ne pourra être exigée.</p>
            </Article>

            <Article title="Article 7 — Force majeure">
              <p>
                Conformément à l&apos;article 1218 du Code civil, Pic&apos;mi ne peut être tenue responsable
                en cas de force majeure.
              </p>
              <p>Sont notamment considérés :</p>
              <Ul items={[
                "catastrophes naturelles,",
                "incendies,",
                "coupures électriques,",
                "défaillance réseaux,",
                "décisions administratives,",
                "épidémies,",
                "interdiction d'événement.",
              ]} />
              <p>
                En cas d&apos;impossibilité définitive d&apos;exécution, les sommes versées seront remboursées
                sans indemnité complémentaire.
              </p>
            </Article>

            <Article title="Article 8 — Annulation">
              <SubArticle title="8.1 Annulation par le Client">
                <p>Le contrat étant ferme du fait du versement d&apos;un acompte :</p>
                <Ul items={[
                  "En cas d'annulation plus de 7 jours avant l'événement : l'acompte reste acquis à Pic'mi à titre d'indemnisation forfaitaire.",
                  "En cas d'annulation 7 jours ou moins avant l'événement : la totalité de la prestation reste due.",
                ]} />
                <p>Les sommes versées seront imputées sur le montant total dû.</p>
              </SubArticle>
              <SubArticle title="8.2 Annulation par Pic'mi">
                <p>Hors cas de force majeure :</p>
                <Ul items={[
                  "remboursement intégral de l'acompte,",
                  "sans préjudice d'éventuels dommages et intérêts en cas de faute prouvée.",
                ]} />
              </SubArticle>
            </Article>

            <Article title="Article 9 — Limitation de responsabilité">
              <p>La responsabilité de Pic&apos;mi est limitée aux dommages directs et prévisibles.</p>
              <p>Sont exclus :</p>
              <Ul items={[
                "pertes d'exploitation,",
                "pertes de chiffre d'affaires,",
                "préjudice d'image,",
                "tout dommage indirect.",
              ]} />
              <p>
                La responsabilité totale est plafonnée au montant de la prestation, sauf faute lourde ou
                dolosive.
              </p>
            </Article>

            <Article title="Article 10 — Assurance">
              <p>Le Client déclare être couvert par une assurance responsabilité civile couvrant l&apos;événement.</p>
              <p>Pic&apos;mi déclare disposer d&apos;une assurance responsabilité civile professionnelle.</p>
            </Article>

            <Article id="rgpd" title="Article 11 — Données personnelles">
              <p>Pic&apos;mi agit en qualité de responsable de traitement.</p>
              <p>Finalités :</p>
              <Ul items={[
                "fourniture des photos,",
                "envoi numérique,",
                "gestion commerciale.",
              ]} />
              <p>Durée de conservation :</p>
              <Ul items={[
                "photos : 3 mois maximum,",
                "données contractuelles : 10 ans.",
              ]} />
              <p>
                Conformément au RGPD, toute personne dispose d&apos;un droit d&apos;accès, rectification,
                effacement, opposition et limitation.
              </p>
              <p>
                Contact :{" "}
                <a href="mailto:contact.picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                  contact.picmi@gmail.com
                </a>
              </p>
              <p>Aucune photo n&apos;est utilisée à des fins promotionnelles sans autorisation écrite préalable.</p>
            </Article>

            <Article title="Article 12 — Droit de rétractation (particuliers)">
              <p>Applicable uniquement aux contrats conclus à distance ou hors établissement.</p>
              <p>
                Conformément aux articles L221-18 et suivants du Code de la consommation, le Client
                dispose d&apos;un délai de 14 jours.
              </p>
              <p>
                Si le Client demande l&apos;exécution avant la fin du délai, il renonce expressément à
                son droit de rétractation une fois la prestation exécutée.
              </p>
              <SubArticle title="Formulaire type">
                <p>
                  À adresser à :{" "}
                  <a href="mailto:contact.picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                    contact.picmi@gmail.com
                  </a>
                </p>
                <p className="bg-picmi-bg border-2 border-black rounded-xl p-4 text-sm font-mono leading-loose">
                  Je notifie ma rétractation du contrat portant sur la prestation suivante :<br />
                  Commandé le :<br />
                  Nom :<br />
                  Adresse :<br />
                  Date :<br />
                  Signature :
                </p>
              </SubArticle>
            </Article>

            {/* Article 13 — Médiation : à compléter avec les coordonnées du médiateur */}

            <Article title="Article 13 — Droit applicable et juridiction">
              <p>Les présentes CGL sont soumises au droit français.</p>
              <p>Pour les professionnels, compétence exclusive du Tribunal de Commerce de Nanterre.</p>
            </Article>
          </Section>

          {/* Mentions légales */}
          <Section title="Mentions Légales">
            <Article title="1. Éditeur du site — Jouzosesa">
              <p>Le présent site internet est édité par :</p>
              <ul className="space-y-1">
                <li><strong>Dénomination sociale :</strong> Jouzosesa</li>
                <li><strong>Nom commercial :</strong> Pic&apos;mi</li>
                <li><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
                <li><strong>Capital social :</strong> 3 000 euros</li>
                <li><strong>Siège social :</strong> 88 rue Pierre Brossolette, 92250 La Garenne-Colombes</li>
                <li><strong>Immatriculation :</strong> RCS de Nanterre sous le numéro 101 148 906</li>
                <li><strong>Numéro de TVA intracommunautaire :</strong> FR78101148906</li>
                <li>
                  <strong>Email de contact :</strong>{" "}
                  <a href="mailto:contact.picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                    contact.picmi@gmail.com
                  </a>
                </li>
                <li><strong>Téléphone :</strong> 06 99 08 35 32</li>
              </ul>
            </Article>

            <Article title="2. Directeur de la publication">
              <p>
                <strong>Directeur de la publication :</strong> Zohair DJIVANDJY, en qualité de Président
                de la SASU Jouzosesa.
              </p>
            </Article>

            <Article title="3. Hébergeur du site">
              <p>Le site internet est hébergé par :</p>
              <ul className="space-y-1">
                <li><strong>Nom de l&apos;hébergeur :</strong> Vercel</li>
                <li><strong>Raison sociale :</strong> Vercel Inc.</li>
                <li><strong>Adresse de l&apos;hébergeur :</strong> 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Téléphone de l&apos;hébergeur :</strong> +1 (951) 383-6898</li>
              </ul>
            </Article>

            <Article title="4. Propriété intellectuelle">
              <p>
                L&apos;ensemble de ce site relève de la législation française et internationale sur le
                droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques (notamment le logo et la marque &quot;Pic&apos;mi&quot;). La
                reproduction de tout ou partie de ce site sur un support électronique ou papier quel
                qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la
                publication.
              </p>
            </Article>

            <Article title="5. Données personnelles et Cookies (RGPD)">
              <p>
                Les informations recueillies via les formulaires ou le système de réservation du site
                sont destinées à Pic&apos;mi pour la gestion des commandes et la relation client.
                Conformément à la loi &quot;Informatique et Libertés&quot; et au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous
                concernant. Pour exercer ce droit, vous pouvez contacter :{" "}
                <a href="mailto:contact.picmi@gmail.com" className="underline font-bold hover:text-picmi-primary transition-colors">
                  contact.picmi@gmail.com
                </a>
                .
              </p>
            </Article>
          </Section>

        </div>
      </section>

      <Footer />
    </main>
  );
}
