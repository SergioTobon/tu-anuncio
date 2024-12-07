import Database from "../db/connection.js";

class BusquedaRepository {
    constructor() {
        this.database = new Database();  // Inicializamos la conexión
    }
    async buscarNegocios(categoriaId, palabraClave) {
        let connection;
        try {
            connection = await this.database.connect(); // Conectamos a la base de datos

            // Consulta SQL con filtro de categoría y palabras clave
            const query = `
            SELECT 
                negocio.nombre,
                negocio.urlImagenes
            FROM 
                negocio
            WHERE 
                negocio.idCategoria = ? OR 
                (negocio.nombre LIKE ? OR negocio.descripcion LIKE ?);
        `;

            // Preparar el valor para la búsqueda de palabras clave con comodines %
            const palabraClaveFormato = `%${palabraClave}%`;

            const [rows] = await connection.query(query, [categoriaId, palabraClaveFormato, palabraClaveFormato]);
            return rows; // Retornamos el resultado de la consulta
        } catch (error) {
            console.error("Error al buscar negocios:", error.message);
            throw error;
        }
    }
}

export default BusquedaRepository;