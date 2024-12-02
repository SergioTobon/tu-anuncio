import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loginRoutes from "./routes/login-routes.js";
import userRoutes from './routes/user-routes.js'; // Importar las rutas de usuarios
import categoriaRoutes from './routes/categoria-routes.js';  // Importamos las rutas de las categorías
import negocioRoutes from './routes/negocio-routes.js';
import anuncioRoutes from './routes/anuncio-routes.js';

const app = express();
const PORT = 3000;

// Aplicar CORS antes de las rutas
app.use(cors());

// Configuraciones adicionales
app.use(bodyParser.json());

// Definir las rutas
app.use('/api/usuarios', userRoutes); // Base URL para las rutas de usuarios
app.use("/api", loginRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/negocio', negocioRoutes);
app.use('/api/anuncio', anuncioRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

