import Router from "express"
import {
  changeRol,
  uploadFile,
} from "../controller/userController.js";
import { uploader } from "../middlewares/multer.js";

const UserRouter = Router();

UserRouter.get('/premium/:uid', changeRol)
UserRouter.post('/:uid/profileFile/documents', uploader.single('profileFile') , uploadFile)
UserRouter.post('/:uid/IDFile/documents', uploader.single('IDFile') , uploadFile)
UserRouter.post('/:uid/BankFile/documents', uploader.single('BankFile') , uploadFile)
UserRouter.post('/:uid/addressFile/documents', uploader.single('addressFile') , uploadFile)
UserRouter.post('/:uid/productsFile/documents', uploader.single('productsFile') , uploadFile)

export default UserRouter;