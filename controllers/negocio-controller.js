import NegocioService from "../services/negocio-service.js";

export const createNegocio = async (req, res) => {
    try {
        const negocio = req.body;
        const negocioService = new NegocioService();

        await negocioService.createNegocio(negocio);
        res.status(201).json({ message: "Negocio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

export const validarNegocio = async (req, res) => {
    try {
        const id = req.body;
        const negocioService = new NegocioService();

        await negocioService.validarNegocio(id);
        res.status(200).json({ message: "Negocio si existe" });
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