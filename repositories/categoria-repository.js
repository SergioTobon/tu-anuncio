import Database from "../db/connection.js";  // Importamos la conexión a la base de datos

class CategoriaRepository {
    constructor() {
        this.database = new Database();  // Inicializamos la conexión
    }

    // Método para obtener todas las categorías
    async getAllCategories() {
        let connection;
        try {
            connection = await this.database.connect();  // Conectamos a la base de datos
            const [rows] = await connection.query("SELECT * FROM categoria");  // Obtenemos todas las categorías
            return rows;  // Retornamos las categorías obtenidas
        } catch (error) {
            console.error("Error al obtener categorías:", error.message);  // Manejo de errores
            throw error;
        } finally {
            await this.database.close();  // Cerramos la conexión
        }
    }

    // Método para obtener una categoría por ID
    async obtenerCategoriaPorId(id) {
        let connection;
        try {
            connection = await this.database.connect(); // Conectamos a la base de datos
            const [rows] = await connection.query("SELECT * FROM categoria WHERE id = ?", [id]);
            return rows; // Retornamos el resultado de la consulta
        } catch (error) {
            console.error("Error al consultar la categoría:", error.message);
            throw error;
        } finally {
            if (connection) {
                await this.database.close(); // Cerramos la conexión
            }
        }
    }
    

}

export default CategoriaRepository;
