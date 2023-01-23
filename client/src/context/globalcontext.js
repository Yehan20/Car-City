import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import {Navigate } from "react-router-dom";

const Context = React.createContext();

const login= async(userName,password)=>{
  try{
    const formData = new FormData();
    formData.append('name',userName)
    formData.append('password',password)
    const user = await axios.post('http://localhost:3001/admin/login',formData)
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

const GlobalContext = ({children}) => {
    const [loggedUser,setLoggedUser] = useState();  

    useEffect(()=>{
      console.log('use effect ran');
       setLoggedUser(getLoggedUser())
       
    },[])

    return (
       
       <Context.Provider value={ { login,loggedUser,setLoggedUser,logout}  }>
         {loggedUser && children}
       </Context.Provider>

      );
}

export  const useGlobalContext = ()=>{
    return useContext(Context)
}

export default GlobalContext;