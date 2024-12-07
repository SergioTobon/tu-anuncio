import upload from '../utilis/multer-config.js';
import { saveImagenNegocio,saveImagenAnuncio} from '../services/filemanager-service.js';
import NegocioService from '../services/negocio-service.js';
import AnuncioService from '../services/anuncio-service.js';

export const uploadImage = (req, res) => {
    upload.single('imagen')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No se subió ninguna imagen" });
        }

        const filePath = req.file.path; // Ruta del archivo guardado en uploads
        const fileName = req.file.filename; // Nombre del archivo
        const tipoImagen = req.body.tipoImagen; // Obtener el tipo de imagen
        const idNegocio = req.body.idNegocio;
        const idAnuncio = req.body.idAnuncio;

        if (!tipoImagen || (tipoImagen !== 'negocio' && tipoImagen !== 'anuncio')) {
            return res.status(400).json({
                success: false,
                message: "El campo 'tipoImagen' es obligatorio y debe ser 'negocio' o 'anuncio'"
            });
        }

        try {

            const negocioService = new NegocioService();
            await negocioService.validarNegocio(idNegocio);

                let finalPath;
            
            if (tipoImagen == "negocio") {
                const negocioService = new NegocioService();
                finalPath = await saveImagenNegocio(filePath,idNegocio);
                await negocioService.updateUrlImagenNeogocio(idNegocio,finalPath);
            }else if(tipoImagen == "anuncio"){
                const anuncioService = new AnuncioService()
                await anuncioService.validarAnuncio(idAnuncio);
                finalPath = await saveImagenAnuncio(filePath,idNegocio,idAnuncio);
                await anuncioService.updateUrlImagenAnuncio(idAnuncio,finalPath);
            }

            return res.status(200).json({
                success: true,
                message: "Imagen subida y guardada con éxito",
                filePath: finalPath,
                tipoImagen: tipoImagen
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    });
};
