
import { logger } from '../utils/logger.js';
import usersService from '../services/usersService.js';

const UserService = new usersService()

class usersRepositories {
  async changeRol(uid) {
    try {
      console.log("entro en el repositorio")

      let answer = await UserService.changeRol(uid)
      console.log("answer " + answer)
      return answer

    } catch (error) {
      logger.error("Error en userRepositories/changeRol: " + error)
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async uploadFile() {
    try {
      // if (!req.file) {
      //   return res.status(500).send({
      //     status: "500",
      //     message: `Error occured in UsertManager in uploadFile`
      //   })
      // }

      // var uid = req.params.uid

      let user = await UserService.obtainUser(uid)

      // const arrayAnswer = ManageAnswer(answer)

      // req.session.user.role = arrayAnswer[1]

      return `SUC|Carrito agregado con el id ${carnnew._id}`

    } catch (error) {
      logger.error("Error en userRepositories/uploadFile: " + error)
      return `ERR|Error generico. Descripcion :${error}`

    }
  }
}
export default usersRepositories




