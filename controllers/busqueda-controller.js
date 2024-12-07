import BusquedaService from "../services/busqueda-service.js";

export const Buscar = async (req, res)=> {
    try {
        const { categoria, palabraClave } = req.body;
        const busquedaService = new BusquedaService();
        
        const resultado = await busquedaService.Busqueda(categoria ,palabraClave);
        if (resultado.success) {
            return res.status(201).json(resultado);
        } else {
            return res.status(401).json(resultado);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};
