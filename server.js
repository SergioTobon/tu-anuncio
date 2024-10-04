// server.js
import express from 'express';
import bodyParser from 'body-parser';
import loginRoutes from "./routes/login-routes.js";
import userRoutes from './routes/user-routes.js'; // Importar las rutas de usuarios


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/usuarios', userRoutes); // Base URL para las rutas de usuarios
app.use("/api", loginRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});