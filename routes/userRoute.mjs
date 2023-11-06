import { Router } from 'express';
import userController from '../controllers/userController.mjs';

const router = Router()

router.get('/' , userController.getAllusers)
router.delete('/delete' , userController.deleteUser)
router.get('/:id' , userController.getOneuser)
router.patch('/update/:id' , userController.updateUser)

export default router