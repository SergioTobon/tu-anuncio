import multer from 'multer';
import path from 'path';

// Configurar almacenamiento para las imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`); // Nombre único para evitar conflictos
    }
});

// Filtrar archivos (por ejemplo, solo imágenes)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de archivo no permitido. Solo se aceptan imágenes.'));
    }
};

// Configuración final del middleware multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export default upload;
