import express from 'express';
import {createAnuncio} from '../controllers/anuncio-controller.js';

const router = express.Router();

router.post('/create-anuncio', createAnuncio);

export default router;