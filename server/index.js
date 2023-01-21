import express from "express";
import mongoose from "mongoose";
import { carModel, orderModel } from './model/Data.js'

const app = express();

app.get('/', middleweare, (req, res) => {

      carModel.create({
        name:"Porschse",
        description:"WOw",
        price:4000,
        quantity:333,
        
    }).then(data=>res.json(data)).catch(err=>console.log(err))


    // res.write("Home")
    // res.end()
})

function middleweare(req, res, next) {
    console.log(req.url);
    next()
}

app.listen(3001, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/CarCity', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connetect');
    })

})