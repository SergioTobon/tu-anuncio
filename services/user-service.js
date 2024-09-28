import UserRepository from '../repositories/user-repository.js';

class UserService{
    constructor(userRepository){
        this.userRepository = new UserRepository();
    }
}

export default UserService;