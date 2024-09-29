import { User } from '../models/user.js';
import UserRepository from '../repositories/user-repository.js';

class UserService{
    constructor(userRepository){
        this.userRepository = new UserRepository();
    }

    async createUser(user){
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
        


        



    }

}

export default UserService;