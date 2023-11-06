import { Router } from 'express';
import medicineController from '../controllers/medicineController.mjs'

const router = Router();

router.post('/add' , medicineController.addMedicine)
router.get('/' , medicineController.getAllmedicine)
router.get('/:id' , medicineController.getOneMedicine)
router.patch('/update' , medicineController.updateMedicine)
router.delete('/delete/:id' , medicineController.deleteMedicine)

export default router

