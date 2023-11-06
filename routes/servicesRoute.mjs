import { Router } from 'express';
import servicesController from '../controllers/servicesController.mjs'

const router = Router();

router.post('/add' , servicesController.addServices)
router.get('/' , servicesController.getAllServices)
router.get('/:id' , servicesController.getOneServices)
router.patch('/update' , servicesController.updateServicesr)
router.delete('/delete/:id' , servicesController.deleteServices)

export default router

