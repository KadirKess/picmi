"use client";

import { useState } from "react";

const pricingTiers = [
  { prints: 50, price: 249 },
  { prints: 75, price: 299 },
  { prints: 100, price: 349 },
  { prints: 150, price: 429 },
  { prints: 200, price: 499 },
];

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

export default function PricingSimulator() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = pricingTiers[selectedIndex];

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Étape 1 */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg border-2 border-black">
            1
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold uppercase">
            Choisissez votre nombre de tirages
          </h3>
        </div>

        <div className="bg-white border-2 border-black rounded-2xl shadow-hard p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {pricingTiers.map((tier, index) => (
              <button
                key={tier.prints}
                onClick={() => setSelectedIndex(index)}
                className={`px-5 py-3 rounded-full border-2 border-black font-bold text-lg transition-all duration-200 ${
                  selectedIndex === index
                    ? "bg-picmi-primary shadow-none translate-x-[2px] translate-y-[2px]"
                    : "bg-picmi-cream shadow-hard-sm hover:bg-picmi-mint"
                }`}
              >
                {tier.prints} tirages
              </button>
            ))}
          </div>

          <div className="text-center bg-picmi-bg border-2 border-black rounded-xl p-6 shadow-hard-sm">
            <p className="text-lg font-bold mb-2">Votre formule</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-7xl font-extrabold">
                {selected.price}€
              </span>
            </div>
            <p className="text-base font-medium text-gray-700 mt-2">
              pour {selected.prints} tirages inclus
            </p>
          </div>
        </div>
      </div>

      {/* Étape 2 */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg border-2 border-black">
            2
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold uppercase">
            Et pour la suite de la soirée ?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option A */}
          <div className="bg-picmi-mint border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm">
                phone_android
              </span>
              <div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Option A
                </span>
              </div>
            </div>
            <h4 className="text-xl font-extrabold mb-3">
              Relais 100% Digital
            </h4>
            <p className="font-medium text-gray-800 flex-grow">
              Une fois vos tirages inclus utilisés, vos invités continuent de
              s&apos;amuser ! Les photos sont envoyées directement par e-mail ou
              accessibles via une galerie en ligne. Zéro impression, zéro frais
              supplémentaires.
            </p>
            <div className="mt-4 inline-block bg-white border-2 border-black rounded-full px-4 py-2 font-extrabold text-lg shadow-hard-sm self-start">
              Gratuit
            </div>
          </div>

          {/* Option B */}
          <div className="bg-picmi-accent border-2 border-black rounded-2xl shadow-hard p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons text-3xl bg-white border-2 border-black rounded-full p-2 shadow-hard-sm">
                qr_code_2
              </span>
              <div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Option B
                </span>
              </div>
            </div>
            <h4 className="text-xl font-extrabold mb-3">
              Relais Paiement Invité
            </h4>
            <p className="font-medium text-gray-800 flex-grow">
              Vos invités scannent un QR Code directement sur la borne et
              règlent leurs tirages supplémentaires en toute autonomie. Un
              système simple et transparent qui ne vous coûte rien.
            </p>
            <div className="mt-4 inline-block bg-white border-2 border-black rounded-full px-4 py-2 font-extrabold text-lg shadow-hard-sm self-start">
              Via QR Code sur la borne
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 border-2 border-black text-lg md:text-2xl font-bold rounded-full text-black bg-picmi-primary hover:bg-white transition-all duration-200 shadow-hard-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hard"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Réservez maintenant
          <span className="material-icons ml-3">chat</span>
        </a>
      </div>
    </div>
  );
}
