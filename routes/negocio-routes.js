import express from 'express';
import {createNegocio} from '../controllers/negocio-controller.js';

const router = express.Router();

router.post('/create-negocio', createNegocio);

export default router;