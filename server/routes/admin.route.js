import express from 'express'
import adminController from '../controller/admin.controller.js'
import multer from 'multer'
import path from 'path'

const adminRoutes = express.Router()
const useFormData = multer();


const storage = multer.diskStorage({
    destination:'./public/imgs/',
    filename:function(req,file,cb){
        // console.log('ram')
        // console.log(file)
          cb(null,file.fieldname +'.'+Date.now() + path.extname(file.originalname))
    }
})

const uploads = multer({
    storage:storage,
    limits:100000,
    fileFilter:function(req,file,cb){
       // run a function to check if the format is correct
       let checkExtnesions =/jpg|png|jpeg|gif/i
       if(checkExtnesions.test(file.originalname)){
        return  cb(null,true)
       }
       return cb(new Error('Format is not supported'))
    }
})


adminRoutes.post('/add',uploads.single('file'),adminController.addCar)

adminRoutes.get('/showcars',adminController.showCars)

adminRoutes.post('/login',useFormData.none(),adminController.login)

export default adminRoutes