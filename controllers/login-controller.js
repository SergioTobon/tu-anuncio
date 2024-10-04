// controllers/login-controller.js
import LoginService from "../services/login-service.js";

const loginService = new LoginService();

export const loginUser = async (req, res) => {
    const login = req.body;

    try {
        const result = await loginService.authenticateUser(login);

        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(401).json(result);
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
