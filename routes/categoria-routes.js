import express from 'express';
import { getAllCategories, getCategoryByNombre} from '../controllers/categoria-controller.js';  // Importamos los controladores

const router = express.Router();

// Ruta para obtener todas las categorías
router.get('/', getAllCategories);

// Ruta para obtener una categoría por su nombre
router.get('/:nombre', getCategoryByNombre);


export default router;
