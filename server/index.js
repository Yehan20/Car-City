import express from "express";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.route.js";
import cors from 'cors'

import multer from "multer";


const app = express();

const useFormData = multer()

// const storage = multer.diskStorage({
//     destination:'test/'
// })

// const uploads = multer({
//     storage:storage
// })

app.use(cors())
app.use(express.json())
app.use(useFormData.none())


app.use('/admin',adminRoutes)



app.listen(3001, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/CarCity', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connetect');
    })

})