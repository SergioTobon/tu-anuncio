import Database from "../db/connection.js";  // Importamos la conexión a la base de datos

class NegocioRepository {
    constructor() {
        this.database = new Database();  // Inicializamos la conexión
    }

    async createNegocio(negocio) {
        let connection;
        try {
            connection = await this.database.connect();// Conectamos a la base de datos
            const result = await connection.query(
                "INSERT INTO negocio (nombre, descripcion, contacto, ubicacion, idCategoria, idUsuario, urlImagen) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [negocio.nombre, negocio.descripcion, negocio.contacto, negocio.ubicacion, negocio.idCategoria, negocio.idUsuario, negocio.urlImagen]
            );
            return result;
        } catch (error) {
            console.error("Error al agregar negocio:", error.message);
            throw error;
        } finally {
            await this.database.close();
        }
    }
}
export default NegocioRepository;