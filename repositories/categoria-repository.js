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
    async getCategoryByNombre(nombre) {
        let connection;
        try {
            connection = await this.database.connect();  // Conectamos a la base de datos
            const [rows] = await connection.query("SELECT * FROM categoria WHERE nombre = ?", [nombre]);
            // Obtenemos la categoría por Nombre
            return rows.length > 0 ? rows[0] : null;  // Retornamos la categoría si existe
        } catch (error) {
            console.error("Error al obtener la categoría:", error.message);
            throw error;
        } finally {
            await this.database.close();  // Cerramos la conexión
        }
    }

}

export default CategoriaRepository;
