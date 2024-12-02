import express from 'express';
import { uploadImage } from '../controllers/imagen-controller.js';

const router = express.Router();

// Ruta para subir una imagen
router.post('/upload', uploadImage);

export default router;
