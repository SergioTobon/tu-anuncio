// repositories/user.repository.js
import Database from '../db/connection.js';


class UserRepository {
  constructor() {
    this.database = new Database();
  }

  async createUser(user) {
    let connection;
    try {
      connection = await this.database.connect();
      const result = await connection.query(
        "INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)",
        [user.username, user.email, user.password]
      );
      return result;
    } catch (error) {
      console.error("Error al agregar usuario:", error.message);
      throw error;
    } 
  }
  async obtenerUsuarioPorId(id) {
    let connection;
    try {
        connection = await this.database.connect(); // Conectamos a la base de datos
        const [rows] = await connection.query("SELECT * FROM usuario WHERE id = ?", [id]);
        return rows; // Retornamos el resultado de la consulta
    } catch (error) {
        console.error("Error al consultar el usuario:", error.message);
        throw error;
    } 
}


}

export default UserRepository;