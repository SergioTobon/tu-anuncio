// controllers/categoria-controller.js
import upload from '../utilis/multer-config.js';

// Controlador para subir una imagen
export const uploadImage = (req, res) => {
    // Usar multer para manejar la subida del archivo
    upload.single('imagen')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No se subió ninguna imagen" });
        }

        const filePath = req.file.path; // Ruta del archivo guardado
        return res.status(200).json({
            success: true,
            message: "Imagen subida con éxito",
            filePath: filePath
        });
    });
};