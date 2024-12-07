import express from 'express';
import {createNegocio} from '../controllers/negocio-controller.js';
import {validarNegocio} from '../controllers/negocio-controller.js';
import { getNegocioByIdUsuario } from '../controllers/negocio-controller.js';

const router = express.Router();

router.post('/create-negocio', createNegocio);
router.get('/negocioId/:id', validarNegocio);
router.get('/:idUsuario', getNegocioByIdUsuario);

export default router;