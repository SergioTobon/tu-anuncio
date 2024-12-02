// repositories/user.repository.js
import { Membresia } from '../models/membresia.js';
import Database from '../db/connection.js';


class MembresiaRepository {
    constructor() {
    this.database = new Database();
    }

    async consultarMembresia(membresiaTipo) {
    let connection;
    try {
        connection = await this.database.connect();
        const [rows] = await connection.query(
          "SELECT * FROM `membresia` WHERE `tipo` = ?",
        [membresiaTipo]
        );
        console.log(rows);
        

        if (rows.length > 0) {
        const { id, tipo, costo, duracion } = rows[0];
          // Crear y retornar un objeto Membresia               
        const membresia = new Membresia(id, tipo, costo, duracion);
        console.log(membresia);        
        return membresia;

        } else {
        console.log(`No se encontró ninguna membresía con tipo: ${membresiaTipo}`);
          return null; // Retorna null si no hay resultados
        }

    } catch (error) {
        console.error("Error al consultar membresía:", error.message);
        throw error;
    } 
    
    }
}

export default MembresiaRepository;