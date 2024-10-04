// services/login-service.js
import LoginRepository from "../repositories/login-repository.js";

class LoginService {
    constructor() {
        this.loginRepository = new LoginRepository();
    }

    async authenticateUser(login) {
        if (!login.email || !login.password) {
            throw new Error("Email y contraseña son requeridos");
        }

        const user = await this.loginRepository.validationUser(login);

        if (user) {
            return { success: true, message: "Login exitoso", user };
        } else {
            return { success: false, message: "Email o contraseña incorrectos" };
        }
    }
}

export default LoginService;
