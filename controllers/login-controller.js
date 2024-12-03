// controllers/login-controller.js
import LoginService from "../services/login-service.js";



export const loginUser = async (req, res) => {


    try {
        const login = req.body;
        const loginService = new LoginService();
        const result = await loginService.authenticateUser(login);
        console.log("============controler======");
        
        console.log(result);
        

        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(401).json(result);
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }z
};
