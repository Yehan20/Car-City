import express from "express";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.route.js";
import cors from 'cors'
import  dotenv from 'dotenv'


const KEY =function(){
    if( process.env.CONNECTION_URL===undefined){
        console.log('wrong')
        return dotenv.config().parsed.CONNECTION_URL
    }
    console.log('run')
   return  process.env.CONNECTION_URL
}()

console.log()
const app = express();
//const url = 'mongodb+srv://yehan:yehan1234@carcitycluster.dodfqtz.mongodb.net/CarCity?retryWrites=true&w=majority'


app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))


app.use('/admin',adminRoutes)



app.listen(3001, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(KEY, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connetect');
    })

})