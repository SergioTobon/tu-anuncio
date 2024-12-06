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
                "INSERT INTO anuncio (nombre ,precio, idNegocio, urlImagenes) VALUES (?, ?, ?, ? )",
                [anuncio.nombre,anuncio.precio, anuncio.idNegocio, anuncio.urlImagenes]
            );
            return result;
        } catch (error) {
            console.error("Error al agregar anuncio:", error.message);
            throw error;
        } 
    }

        //valida si el negocio existe
        async obtenerAnuncioPorId(id) {
            let connection;
            try {
                connection = await this.database.connect(); // Conectamos a la base de datos
                const [rows] = await connection.query("SELECT * FROM anuncio WHERE id = ?", [id]);
                return rows; // Retornamos el resultado de la consulta
            } catch (error) {
                console.error("Error al consultar el negocio:", error.message);
                throw error;
            } 
        }

        async updateUrlImagenAnuncio(id, urlImagenes){
            let connection;
            try{
                connection = await this.database.connect();
                const result = await connection.query(
                    "UPDATE anuncio SET urlImagenes = ? WHERE id = ? ",
                    [urlImagenes , id]
                );
                return result;
            }catch(error){
                console.error("Error al actualizar la URL del anuncio", error.message);
                throw error;
                
            }
        }

        async getAnuncioByIdNegocio(idNegocio) {
            console.log("ID Negocio recibido:", idNegocio);

            let connection;
            try {
                connection = await this.database.connect(); // Conectamos a la base de datos
                const [rows] = await connection.query("SELECT * FROM anuncio WHERE idNegocio = ?", [idNegocio]);
                return rows; // Retornamos el resultado de la consulta
            } catch (error) {
                console.error("Error al consultar el negocio:", error.message);
                throw error;
            } 
        }
}
export default AnuncioRepository;