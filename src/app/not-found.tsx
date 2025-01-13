// src/app/not-found.tsx

export default function NotFound() {
    return (
        <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">404 - Produit non trouvé</h1>
                <p className="text-gray-300">
                    404 page introuvable
                </p>
                <a
                    href="/"
                    className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
                >
                    Retour à l'accueil
                </a>
            </div>
        </section>
    );
}
