import express from 'express';
import {Buscar} from '../controllers/busqueda-controller.js';

const router = express.Router();

router.get('/buscar', Buscar);

export default router;