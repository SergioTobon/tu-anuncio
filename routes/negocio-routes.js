import express from 'express';
import {createNegocio} from '../controllers/negocio-controller.js';
import {validarNegocio} from '../controllers/negocio-controller.js';


const router = express.Router();

router.post('/create-negocio', createNegocio);
router.get('/:id', validarNegocio);

export default router;