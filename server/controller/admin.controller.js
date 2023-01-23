import { carModel} from '../model/Data.js'
import adminModel from '../model/Admin.js'
import formidable from "formidable";

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

const login =async  (req,res)=>{
   
    const {name,password} = req.body
    try{
        const user = await adminModel.findOne({name,password})
        if(user){
            return res.status(200).json({success:true,error:'',name:user.name})
        }
        throw new Error('wrong login')
    }catch(e){
    //   console.log(e)
    }  
    res.status(404).json({sucess:false,error:'invalid login'})
}

const adminController = {
    addCar,
    showCars,
    login
}
export default adminController
