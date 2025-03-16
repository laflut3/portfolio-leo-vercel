import { MetadataRoute } from "next";
import { connectDB } from "@/../Lib/MongoLib/mongodb";
import SAE from "@/../Lib/SAELib/models/SAE";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        await connectDB();
        console.log("Connexion à la base de données réussie");

        const allSAE = await SAE.find();
        console.log(`Nombre de produits trouvés : ${allSAE.length}`);

        const SAEEntries: MetadataRoute.Sitemap = allSAE.map(({ _id }) => ({
            url: `${process.env.NEXTAUTH_URL}/SAE/${_id}`,
            lastModified: new Date(),
        }));

        return [
            {
                url: `${process.env.NEXTAUTH_URL}/`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/about`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/univ`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/sign`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/validation`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/profile`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/forgot`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/legal-mentions`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/privacy`,
                lastModified: new Date(),
            },
            {
                url: `${process.env.NEXTAUTH_URL}/terms-of-uses`,
                lastModified: new Date(),
            },
            ...SAEEntries,
        ];
    } catch (error) {
        console.error("Erreur lors de la génération du sitemap :", error);
        throw new Error("Erreur interne du serveur"); // Propager l'erreur pour Next.js
    }
}
