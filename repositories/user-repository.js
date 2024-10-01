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
        "INSERT INTO usuario (username, email, password, tipo, membresia) VALUES (?, ?, ?, ?, ?)",
        [user.username, user.email, user.password, user.tipo, user.membresia]
      );
      return result;
    } catch (error) {
      console.error("Error al agregar usuario:", error.message);
      throw error;
    } finally {
      await this.database.close();
    }
  }
}

export default UserRepository;