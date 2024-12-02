import Database from "../db/connection.js";  // Importamos la conexión a la base de datos

class AnuncioRepository {
    constructor() {
        this.database = new Database();  // Inicializamos la conexión
    }

    async createAnuncio(anuncio) {
        let connection;
        try {
            connection = await this.database.connect();// Conectamos a la base de datos
            const result = await connection.query(
                "INSERT INTO anuncio (nombre, descripcion, precio, idNegocio, urlImagenes) VALUES (?, ?, ?, ?, ?)",
                [anuncio.nombre, anuncio.descripcion, anuncio.precio, anuncio.idNegocio, anuncio.urlImagenes]
            );
            return result;
        } catch (error) {
            console.error("Error al agregar anuncio:", error.message);
            throw error;
        } finally {
            await this.database.close();
        }
    }
}
export default AnuncioRepository;