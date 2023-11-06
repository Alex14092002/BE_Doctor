import { Router } from 'express';
import upload from '../utils/configMulter.mjs';
import doctorController from '../controllers/doctorController.mjs';



const router = Router()

router.post('/updateInfoDocandNur/:id' , upload.fields([
    { name: 'avt', maxCount : 1 },
    { name : 'Imgclinic' , maxCount : Infinity  }
]) ,  doctorController.updateInfoDoctorandNurse)
router.patch('/updateInfoPatient/:id' , upload.fields([
    { name: 'avt', maxCount : 1 }
]), doctorController.uploadInfoPatient)
export default router

