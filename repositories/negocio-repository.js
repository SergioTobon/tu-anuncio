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
                "INSERT INTO negocio (nombre, descripcion, contacto, ubicacion, idCategoria, idUsuario, urlImagenes) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [negocio.nombre, negocio.descripcion, negocio.contacto, negocio.ubicacion, negocio.idCategoria, negocio.idUsuario, negocio.urlImagenes]
            );
            return result;
        } catch (error) {
            console.error("Error al agregar negocio:", error.message);
            throw error;
        } finally {
            await this.database.close();
        }
    }
    //valida si el negocio existe
    async obtenerNegocioPorId(id) {
        let connection;
        try {
            connection = await this.database.connect(); // Conectamos a la base de datos
            const [rows] = await connection.query("SELECT * FROM negocio WHERE id = ?", [id]);
            return rows; // Retornamos el resultado de la consulta
        } catch (error) {
            console.error("Error al consultar el negocio:", error.message);
            throw error;
        } finally {
            if (connection) {
                await this.database.close(); // Cerramos la conexión
            }
        }
    }
    
}
export default NegocioRepository;