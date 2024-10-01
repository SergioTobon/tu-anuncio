// controllers/user-controller.js

import UserService from "../services/user-service.js";

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const userService = new UserService();
    
        await userService.createUser(user);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

// Exporta otras funciones del controlador aquí si es necesario
