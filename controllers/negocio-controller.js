import NegocioService from "../services/negocio-service.js";

export const createNegocio = async (req, res) => {
    try {
        const negocio = req.body;
        const negocioService = new NegocioService();
    
        const result = await negocioService.createNegocio(negocio);
        if (result.success) {
            return res.status(201).json(result);
        } else {
            return res.status(401).json(result);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

export const validarNegocio = async (req, res) => {
    debugger
    try {
        const {id} = req.params;
        const negocioService = new NegocioService();

        const negocio = await negocioService.validarNegocio(id);
        if (negocio) {
            return res.status(200).json(negocio); 
        } else {
            return res.status(404).json({ success: false, message: "anuncio no encontrado" });  // Error 404 si no existe
        }
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

export const getNegocioByIdUsuario = async (req, res) => {
    // Instanciamos el servicio
    const negocioService = new NegocioService();
    const { idUsuario } = req.params;  // Obtenemos el ID desde los parámetros de la URL
    try {
        const negocio = await negocioService.getNegocioByIdUsuarioService(idUsuario);  // Llamamos al servicio
        if (negocio) {
            return res.status(200).json(negocio); 
        } else {
            return res.status(404).json({ success: false, message: "negocio no encontrada" });  // Error 404 si no existe
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });  // Error
    }
};