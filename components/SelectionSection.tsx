import Link from "next/link";

export default function SelectionSection() {
    return (
        <section className="py-16 md:py-24 bg-picmi-cream border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 uppercase tracking-tight">
                        <span className="bg-picmi-primary px-4 py-1 border-2 border-black shadow-hard rounded-xl transform -rotate-2 inline-block">
                            VOTRE ÉVÉNEMENT
                        </span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        Sélectionnez votre profil pour découvrir nos offres sur-mesure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {/* Particuliers Card */}
                    <Link href="/particuliers" className="group relative block">
                        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl"></div>
                        <div className="relative bg-picmi-mint border-2 border-black rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-hard-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-black mb-3 uppercase">Particuliers</h3>
                                <p className="text-black font-medium text-lg leading-relaxed">
                                    Mariages, anniversaires, fêtes privées... Capturez ces moments uniques avec style.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center font-bold text-black group-hover:underline decoration-2 underline-offset-4">
                                Découvrir l'offre
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Professionnels Card */}
                    <Link href="/professionnels" className="group relative block">
                        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl"></div>
                        <div className="relative bg-picmi-accent border-2 border-black rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-hard-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-black mb-3 uppercase">Professionnels</h3>
                                <p className="text-black font-medium text-lg leading-relaxed">
                                    Séminaires, soirées d'entreprise, lancements... Marquez les esprits de vos collaborateurs.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center font-bold text-black group-hover:underline decoration-2 underline-offset-4">
                                Découvrir l'offre
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
