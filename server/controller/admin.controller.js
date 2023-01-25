import { carModel} from '../model/Data.js'
import adminModel from '../model/Admin.js'


const addCar = async (req, res,err) => {
      let host = req.get('host');
    //   console.log(req)
 
        console.log("files",req.file)
        if(!err){
            console.log("req",req.file)
      
        }
        else{
            console.log(err)
        }
        console.log(req.body)
  
  
    // console.log("req",req.file)
    // try {
    //     // const car = await carModel.create({

    //     //     name: "Dugati",
    //     //     description: "WOw",
    //     //     price: 4000,
    //     //     quantity: 333
    //     // })
    //     // console.log('car', car)
    //     // res.json(car)
    //     res.send(req.body)

    // } catch (error) {
    //     res(error.message);
    // }
    

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
