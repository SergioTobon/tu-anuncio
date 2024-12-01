import { User } from '../models/user.js';
import UserRepository from '../repositories/user-repository.js';
import MembresiaRepository from '../repositories/membresia-repository.js';
import { free } from '../utilis/constants.js';

class UserService{    
    constructor(){
        this.userRepository = new UserRepository();
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

        this.userRepository.createUser(user)

    }

    
    

}

export default UserService;