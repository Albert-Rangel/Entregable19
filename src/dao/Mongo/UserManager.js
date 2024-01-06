
import { logger } from '../../utils/logger.js';
import userRepositories from '../../repositories/userRepositories.js';

const UserRepositories = new userRepositories()

class UserManager {
  async changeRol(uid) {
    console.log("entro en el manager")
    return await UserRepositories.changeRol(uid)
  }
  async uploadFile() {
    return await UserRepositories.uploadFile(uid);
  }
}

export default UserManager




