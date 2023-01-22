import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        validate:{
            validator:(v)=>v.length>4,
           
        },
        message:props=> `name must be more than ${props.value} `
    },
    password:{
       type:String,
       required:true,
       validate:{
        validator:function(v){
           let regex = /^(\d+)?([A-Za-z])[A-Za-z0-9]{0,}$/;
           return regex.test(v);
        },
       
       message:props=>`${props.value} should have a both letters and numbers `
      }
    }
})

const adminModel = mongoose.model('admin',AdminSchema);

export default adminModel