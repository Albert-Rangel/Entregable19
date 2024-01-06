
import usersManager from '../dao/Mongo/UserManager.js';
import { logger } from '../utils/logger.js';

const UsersManager = new usersManager()

function ManageAnswer(answer) {
  const arrayAnswer = []
  if (answer) {
    const splitString = answer.split("|");
    switch (splitString[0]) {
      case "E01":
        arrayAnswer.push(400)
        arrayAnswer.push(splitString[1])
        return arrayAnswer
        break;
      case "E02":
        arrayAnswer.push(404)
        arrayAnswer.push(splitString[1])
        return arrayAnswer
        break;
      case "SUC":
        arrayAnswer.push(200)
        arrayAnswer.push(splitString[1])
        return arrayAnswer
        break;
      case "ERR":
      default:
        arrayAnswer.push(500)
        arrayAnswer.push(splitString[1])
        return arrayAnswer
        break;
    }
  }
}

export const changeRol = async (req, res) => {

  try {
    console.log("entro en el controlador de user changeRol")
    var uid = req.params.uid
    console.log("uid" + uid)

    let carnew = await UsersManager.changeRol(uid)
    const arrayAnswer = ManageAnswer(carnew)

    return res.status(arrayAnswer[0]).send({
      status: arrayAnswer[0],
      message: arrayAnswer[1]
    })

  } catch (error) {
    logger.error("Error en userController/changeRol: " + error)
    return res.status(500).send({
      status: "500",
      message: `Error occured in userController in changeRol`
    })
  }
}
export const uploadFile = async (req, res) => {
 
  try {
    console.log("entro en el controlador de user uploadFile")
    var uid = req.params.uid
    console.log("uid" + uid)
    // if (!req.file) {
    //   return res.status(500).send({
    //     status: "500",
    //     message: `Error occured in UsertManager in uploadFile`
    //   })
    // }

    // var uid = req.params.uid

    // let answer = await UserService.changeuserStatus(uid)

    // const arrayAnswer = ManageAnswer(answer)

    // req.session.user.role = arrayAnswer[1]

    res.redirect("/UploaderView")

  } catch (error) {
    logger.error("Error en userController/uploadFile: " + error)
    return swWeb ? error : res.status(500).send({
      status: "500",
      message: `Se ha arrojado una exepcion: error`
    })
  }
}





