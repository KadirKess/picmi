import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/33699083532";

interface FooterProps {
  showMainCta?: boolean;
}

export default function Footer({ showMainCta = false }: FooterProps) {
  return (
    <footer
      className="bg-picmi-cream text-black border-t-2 border-black pt-20 pb-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {showMainCta && (
          <>
            <h2 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter drop-shadow-sm">
              PRÊT À{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                FLASHER ?
              </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 md:mb-16">
              <Link
                className="text-xl md:text-5xl font-bold bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-black hover:bg-white hover:text-black shadow-hard-lg hover:shadow-hard transform duration-200"
                href="/contact"
              >
                Nous contacter
              </Link>
            </div>
          </>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-10 text-left ${showMainCta ? "border-t-2" : ""} border-black pt-12`}>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
            <h4 className="text-xl font-bold text-black mb-4 uppercase bg-picmi-primary inline-block px-2 border-2 border-black">
              Pages
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="/particuliers"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
                  Particuliers &amp; Entreprises
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="/professionnels"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
                  Professionnels &amp; Associations
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="/contact"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
            <h4 className="text-xl font-bold text-black mb-4 uppercase bg-picmi-mint inline-block px-2 border-2 border-black">
              Réseaux
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span> Instagram
                  ↗
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span> TikTok ↗
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span> Facebook ↗
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span> WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
            <h4 className="text-xl font-bold text-black mb-4 uppercase bg-picmi-accent inline-block px-2 border-2 border-black">
              Légal
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              <li>
                <Link
                  className="hover:text-picmi-primary transition-colors flex items-center gap-2"
                  href="/mentions-legales"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span> Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-lg font-bold">© 2026 Pic&apos;mi.</p>
            <p className="text-sm font-medium mt-1">
              Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
