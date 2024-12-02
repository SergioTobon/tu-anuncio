import AnuncioService from "../services/anuncio-service.js";

export const createAnuncio = async (req, res)=> {
    try {
        const anuncio = req.body;
        const anuncioService = new AnuncioService();
    
        await anuncioService.createAnuncio(anuncio);
        res.status(201).json({ message: "Anuncio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
    
};