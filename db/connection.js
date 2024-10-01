// db/connection.js
import mysql from "mysql2/promise";
import dbConfig from './config/db-config.js';

class Database {
  constructor() {
    this.connection = null;
  }

  // Método para inicializar la conexión
  async connect() {
    console.log("Connecting");
 
    if (!this.connection) {
      try {
        this.connection = await mysql.createConnection(dbConfig);
        console.log("Conexión a MySQL establecida.");
      } catch (error) {
        console.error("Error conectando a la base de datos:", error.message);
        throw error;
      }
    }
    return this.connection;
  }

  // Método para cerrar la conexión
  async close() {
    if (this.connection) {
      try {
        await this.connection.end();
        console.log("Conexión a MySQL cerrada.");
      } catch (error) {
        console.error("Error cerrando la conexión:", error.message);
        throw error;
      }
    }
  }
}

export default Database;
