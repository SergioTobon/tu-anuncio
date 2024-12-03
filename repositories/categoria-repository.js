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
        } 
    }

    // Método para obtener una categoría por ID
    async obtenerCategoriaPorNombre(nombre) {
        let connection;
        try {
            connection = await this.database.connect(); // Conectamos a la base de datos
            const [rows] = await connection.query("SELECT * FROM categoria WHERE nombre = ?", [nombre]);
            return rows; // Retornamos el resultado de la consulta
        } catch (error) {
            console.error("Error al consultar la categoría:", error.message);
            throw error;
        } 
    }
    
}

export default CategoriaRepository;
