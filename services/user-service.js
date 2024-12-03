import UserRepository from '../repositories/user-repository.js';
import MembresiaRepository from '../repositories/membresia-repository.js';
import { free } from '../utilis/constants.js';

class UserService{    
    constructor(){
        this.UserRepository = new UserRepository();
        this.membresiaRepository = new MembresiaRepository();
    }

    async createUser(user){

        console.log(user);
        
        if(user.username == null){
            throw new Error('Username is required');
        }
        if(user.password == null){
            throw new Error('Password is required');
        }
        if(user.email == null){
            throw new Error('Email is required');
        }
        const membresia = await this.membresiaRepository.consultarMembresia(free)
        user.membresia = membresia.id;

        console.log("User para crear" + user);
        
        console.log(user);
        

        const result = await this.UserRepository.createUser(user)

        console.log(result);
        
        if (result) {
            console.log("entro por el if");
            
            return { success: true, message: "usuario creado", result};
        } else {
            console.log("entro por el else");
            return { success: false, message: "Email o contraseña incorrectos" };
        }

    }

    async validarUser(id) {
        try {
            // Validar que el ID no sea nulo ni vacío
            if (!id || isNaN(id) || id <= 0) {
                throw new Error("El ID de usuario debe ser un número válido mayor que cero.");
            }
    
            const usuarios = await this.UserRepository.obtenerUsuarioPorId(id)
    
            // Validar si se encontró el usuario
            if (usuarios.length === 0) {
                throw new Error(`No se encontró un usuario con el ID ${id}.`);
            }
    
            return usuarios[0]; // Retornamos el usuario encontrado
        } catch (error) {
            console.error("Error al validar el usuario:", error.message);
            throw error;
        }
    }
    
}

export default UserService;