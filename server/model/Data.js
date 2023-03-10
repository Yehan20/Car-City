import mongoose from "mongoose";

const CarSchema =  new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
      type:Number,
      required:true,

    },
    path:{
        type:String,
        required:true
    },

    amount:{
      type:Number,
      required:true,
      validate:{
           validator:function(v){ 
            let regex=/^[0-9]{1,3}$/;
            return regex.test(v)
        },
        message:props=> `This ${props.value} is not valid`
      }
    },
    selectedAmount:{
      type:Number,
      required:true,
      default:1,
    },
    dateOfCreation:{
        type:Date,
        imutable:true,
        default:()=>Date.now()
    }
})

// const OrderSchema = new mongoose.Schema({
//     items:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     }
//     ,
//     customerName:{
//         firstName:{
//             type:String,
//             required:true
//         },
//         lastname:{
//             type:String,
//             required:true
//         }
//     },
//     address:{
//         street:String,
//         city:String,
//         province:String
//     }
// })

// Test Virtual
CarSchema.virtual("id").get(function(){
    return `${this._id}`
})

const carModel= mongoose.model('car',CarSchema);



export {
    carModel,
  
}
