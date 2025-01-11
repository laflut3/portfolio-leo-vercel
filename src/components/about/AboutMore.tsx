export default function AboutMore() {
    return (
        <section className="py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">En savoir plus sur moi</h2>
            <p className="text-lg mb-6">
                Explorez mon parcours professionnel, mes compétences et mes réalisations.
            </p>
            <div>

            </div>
            <a
                href="/cv.pdf" // Le fichier doit être dans le dossier public
                target="_blank" // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Améliore la sécurité
                className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
                voir mon CV
            </a>
        </section>
    );
}
