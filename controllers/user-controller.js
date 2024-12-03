// controllers/user-controller.js

import UserService from "../services/user-service.js";

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const userService = new UserService();
    
        const resultado = await userService.createUser(user);
        if (resultado.success) {
            return res.status(201).json(resultado);
        } else {
            return res.status(401).json(resultado);
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Exporta otras funciones del controlador aquí si es necesario
