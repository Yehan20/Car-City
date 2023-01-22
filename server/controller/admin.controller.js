import { carModel} from '../model/Data.js'
import adminModel from '../model/Admin.js'

const addCar = async (req, res) => {
    try {
        const car = await carModel.create({

            name: "Dugati",
            description: "WOw",
            price: 4000,
            quantity: 333
        })
        console.log('car', car)
        res.json(car)

    } catch (error) {
        console.log(error);
    }

}

const showCars = async(req,res)=>{
    try{
        const cars = await carModel.find();
        res.json(cars)
    }catch(err){
       console.log(err);
    }


}

const login = async (req,res)=>{
    console.log(req.body)
//    const user = await adminModel.findOne({name:"yehan_nk",password:"abc123"})
//    res.json(user)
     res.send({name:'aex',pwd:'123'});
}

const adminController = {
    addCar,
    showCars,
    login
}
export default adminController
