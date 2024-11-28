import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loginRoutes from "./routes/login-routes.js";
import userRoutes from './routes/user-routes.js'; // Importar las rutas de usuarios

const app = express();
const PORT = 3000;

// Aplicar CORS antes de las rutas
app.use(cors());

// Configuraciones adicionales
app.use(bodyParser.json());

// Definir las rutas
app.use('/api/usuarios', userRoutes); // Base URL para las rutas de usuarios
app.use("/api", loginRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

