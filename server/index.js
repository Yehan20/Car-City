import express from "express";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.route.js";
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/admin',cors(),adminRoutes)


app.listen(3001, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/CarCity', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connetect');
    })

})