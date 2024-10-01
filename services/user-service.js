import { User } from '../models/user.js';
import UserRepository from '../repositories/user-repository.js';
import MembresiaRepository from '../repositories/membresia-repository.js';
import { free } from '../utilis/constants.js';

class UserService{    
    constructor(){
        console.log("UserService constructor...");
        
        this.userRepository = new UserRepository();
        this.membresiaRepository = new MembresiaRepository();
    }

    async createUser(user){
        console.log("Create user...");
        
        if(!(user instanceof User)){
            throw new Error('Invalid user object');
        }

        if(user.username == null){
            throw new Error('Username is required');
        }
        if(user.password == null){
            throw new Error('Password is required');
        }
        if(user.email == null){
            throw new Error('Email is required');
        }
        if(user.tipo == null){
            throw new Error('Tipo is required');
        }

        console.log("Create user...");
        

        const membresia = await this.membresiaRepository.consultarMembresia(free)
        user.membresia = membresia.id;
        console.log(membresia);
        console.log(user);
        
        

        this.userRepository.createUser(user)

        console.log(membresia);
    }

    
    

}

const userService = new UserService();



const user = new User();
user.username = "Yoiner";
user.password = "awdawfawd";
user.email = "yoiner.@gmial.com";
user.tipo = "natural"
userService.createUser(user);

export default UserService;