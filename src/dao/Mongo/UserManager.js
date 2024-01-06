
import { logger } from '../../utils/logger.js';
import userRepositories from '../../repositories/userRepositories.js';

const UserRepositories = new userRepositories()

class UserManager {
  async changeRol(uid) {
    return await UserRepositories.changeRol(uid)
  }
  async uploadFile() {
    return await UserRepositories.uploadFile();
  }
}

export default UserManager




