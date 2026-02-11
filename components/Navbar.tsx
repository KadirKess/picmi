"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-picmi-cream border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              className="text-xl md:text-2xl font-extrabold tracking-tight border-2 border-black bg-picmi-primary px-3 py-1 md:px-4 md:py-2 rounded-full shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"
              href="/"
            >
              Pic&apos;mi
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center h-full">
            <Link
              className="text-black font-bold hover:bg-picmi-mint px-4 py-2 rounded-full border-2 border-transparent hover:border-black transition-all"
              href="/particuliers"
            >
              Particuliers
            </Link>
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <Link
              className="text-black font-bold hover:bg-picmi-accent px-4 py-2 rounded-full border-2 border-transparent hover:border-black transition-all"
              href="/professionnels"
            >
              Professionnels
            </Link>
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <a
              className="bg-black text-white px-6 py-2 rounded-full font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-hard-sm hover:shadow-hard transition-all"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-picmi-primary border-2 border-black p-2 rounded-lg shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
            >
              <span className="material-icons font-bold text-2xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-picmi-cream border-b-2 border-black p-4 flex flex-col space-y-4 shadow-hard">
          <Link
            className="text-black font-bold hover:bg-picmi-mint px-4 py-2 rounded-xl border-2 border-transparent hover:border-black transition-all text-center"
            href="/particuliers"
            onClick={() => setIsOpen(false)}
          >
            Particuliers
          </Link>
          <Link
            className="text-black font-bold hover:bg-picmi-accent px-4 py-2 rounded-xl border-2 border-transparent hover:border-black transition-all text-center"
            href="/professionnels"
            onClick={() => setIsOpen(false)}
          >
            Professionnels
          </Link>
          <a
            className="bg-black text-white px-6 py-2 rounded-xl font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-hard-sm hover:shadow-hard transition-all text-center"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Réserver
          </a>
        </div>
      )}
    </nav>
  );
}
