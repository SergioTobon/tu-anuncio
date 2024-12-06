import express from 'express';
import {createAnuncio} from '../controllers/anuncio-controller.js';
import {getAnuncioByIdNegocioController} from '../controllers/anuncio-controller.js';

const router = express.Router();

router.post('/create-anuncio', createAnuncio);
router.get('/:idNegocio', getAnuncioByIdNegocioController);

export default router;