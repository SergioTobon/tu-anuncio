import mysql from "mysql2/promise";
import dbConfig from './config/db-config.js';

class Database {
  constructor() {
    this.pool = null; // Usaremos un pool de conexiones en lugar de una sola conexión
  }

  async connect() {
    console.log("Connecting");
    if (!this.pool) {
      try {
        this.pool = mysql.createPool(dbConfig); // Crear un pool de conexiones
        console.log("Pool de conexiones a MySQL establecido.");
      } catch (error) {
        console.error("Error conectando al pool de la base de datos:", error.message);
        throw error;
      }
    }
    return this.pool; // Devolvemos el pool de conexiones
  }

  async close() {
    if (this.pool) {
      try {
        await this.pool.end(); // Cierra el pool de conexiones
        console.log("Pool de conexiones cerrado.");
      } catch (error) {
        console.error("Error cerrando el pool de conexiones:", error.message);
        throw error;
      }
    }
  }
}

export default Database;
