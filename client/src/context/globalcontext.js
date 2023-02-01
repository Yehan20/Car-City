import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import {Navigate } from "react-router-dom";


const Context = React.createContext();

const login= async(userName,password)=>{
  try{
    const formData = new FormData();
    formData.append('name',userName)
    formData.append('password',password)
    const user = await axios.post('https://carcityserver.cyclic.app/admin/login',formData)
    return user;
  }catch(e){
    return (e.response)
  }

}

const getLoggedUser = ()=>{
     const loggedUser = JSON.parse(localStorage.getItem('user'))
     
     if(loggedUser)return loggedUser;
     return {error:'not found'}
}

const logout = ()=>{
     localStorage.removeItem('user');
     Navigate('/')
    
}

const addData = async (formdata)=>{
  console.log("forn",formdata)
    const formData  = new FormData();
    formData.append("name",formdata.name)
    formData.append("price",formdata.price)
    formData.append("quantity",formdata.amount)
    formData.append("desc",formdata.desc)
    formData.append("file",formdata.file)

    console.log(formData)

   try{
      const  addCar  =  await axios.post('https://carcityserver.cyclic.app/admin/add',formData) //http://localhost:3001/admin/login
      return addCar.data
    //  console.log(formData);
   }catch(err){
     return err
   }
     
}

const getProducts = async()=>{
  const products = await axios.get('https://carcityserver.cyclic.app/admin/showcars')
  return products.data;
}






const GlobalContext = ({children}) => {
 
    const [loggedUser,setLoggedUser] = useState();  



  
    useEffect(()=>{
      console.log('use effect ran');
       setLoggedUser(getLoggedUser())
       
    },[])

    return (
       
       <Context.Provider value={ { login,loggedUser,setLoggedUser,logout,addData,getProducts}  }>
         {loggedUser && children}
       </Context.Provider>

      );
}

export  const useGlobalContext = ()=>{
    return useContext(Context)
}

export default GlobalContext;