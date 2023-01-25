import express from "express";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.route.js";
import cors from 'cors'



const app = express();



app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))






app.use('/admin',adminRoutes)



app.listen(3001, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/CarCity', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connetect');
    })

})