/**
 * Convertit un Buffer en chaîne Base64 avec le préfixe MIME.
 * @param buffer - Le buffer contenant les données de l'image.
 * @returns Une chaîne Base64 prête à être utilisée comme source d'image.
 */
export const convertBufferToBase64 = (buffer: Buffer): string => {
    const binary = `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`
    return `data:image/jpeg;base64,${btoa(binary)}`;
};
