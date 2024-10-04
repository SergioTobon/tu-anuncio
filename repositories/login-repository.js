// repositories/user.repository.js
import Database from "../db/connection.js";

class LoginRepository {
    constructor() {
        this.database = new Database();
    }

    async validationUser(login) {
        let connection;
        try {
            connection = await this.database.connect();
            const [rows] = await connection.query(
                "SELECT * FROM usuario WHERE email = ? AND password = ?",
                [login.email, login.password]
            );
            return rows.length > 0 ? rows[0] : null; // Retorna el usuario si existe
        } catch (error) {
            console.error("Error al validar usuario:", error.message);
            throw error;
        } finally {
            await this.database.close();
        }
    }
}

export default LoginRepository;
