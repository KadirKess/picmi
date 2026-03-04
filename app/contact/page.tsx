import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pic'mi - Nous Contacter",
  description:
    "Contactez Pic'mi pour réserver votre photobooth ou en savoir plus sur nos offres. Disponible par WhatsApp ou par email.",
};

const WHATSAPP_LINK = "https://wa.me/33699083532";
const EMAIL = "contact.picmi@gmail.com";

export default function ContactPage() {
  return (
    <main className="page-transition">
      <Navbar />

      <section className="relative overflow-hidden border-b-2 border-black bg-picmi-bg min-h-[40vh] flex items-center">
        <div className="absolute top-16 left-8 w-20 h-20 bg-picmi-primary rounded-full border-2 border-black hidden lg:block animate-[bounce_3s_infinite] shadow-hard opacity-80"></div>
        <div className="absolute bottom-10 right-24 w-16 h-16 bg-picmi-mint rounded-xl border-2 border-black rotate-12 hidden lg:block shadow-hard opacity-80"></div>
        <div className="absolute top-20 right-8 w-10 h-10 bg-picmi-accent rounded-full border-2 border-black hidden lg:block shadow-hard-sm"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight tracking-tight mb-6">
            Parlons de{" "}
            <span className="bg-picmi-primary px-4 py-1 border-2 border-black shadow-hard rounded-xl inline-block transform -rotate-1 mt-2">
              votre événement
            </span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-800 max-w-2xl mx-auto">
            Une question ? Envie de réserver ? On vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-picmi-cream border-b-2 border-black">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-picmi-mint border-2 border-black rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 flex flex-col gap-5">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-hard-sm">
                  <span className="material-icons text-3xl text-black">chat</span>
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold uppercase mb-2">WhatsApp</h2>
                  <p className="font-medium text-gray-800 leading-relaxed">
                    La façon la plus rapide de nous joindre. Réponse en quelques heures,
                    disponible 7j/7.
                  </p>
                </div>
                <div className="flex items-center font-bold text-black group-hover:underline decoration-2 underline-offset-4 mt-auto">
                  Écrire un message
                  <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group relative block"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-picmi-accent border-2 border-black rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 flex flex-col gap-5">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-hard-sm">
                  <span className="material-icons text-3xl text-black">mail</span>
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold uppercase mb-2">Email</h2>
                  <p className="font-medium text-gray-800 leading-relaxed">
                    Pour vos demandes détaillées ou devis personnalisés.
                    On vous répond sous 24h.
                  </p>
                  <p className="font-bold mt-3 text-black">{EMAIL}</p>
                </div>
                <div className="flex items-center font-bold text-black group-hover:underline decoration-2 underline-offset-4 mt-auto">
                  Envoyer un email
                  <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-medium">
              Vous pouvez aussi nous retrouver sur nos réseaux sociaux ou consulter nos{" "}
              <a href="/mentions-legales" className="underline font-bold hover:text-picmi-primary transition-colors">
                mentions légales
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
