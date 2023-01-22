import React, { useContext } from "react";
import axios from 'axios'

const Context = React.createContext();

const login= async(userName,password)=>{
 const formData = new FormData();
 formData.append('name',userName)
 formData.append('passowrd',password)
 const user = await axios.post('http://localhost:3001/admin/login',formData)
 return user;
}

const helo =()=>{
  console.log('his')
}
const GlobalContext = ({children}) => {
  

   
    return (
       <Context.Provider value={
        {
          login,helo
        }
       }>
         {children}
       </Context.Provider>

      );
}

export  const useGlobalContext = ()=>{
    return useContext(Context)
}

export default GlobalContext;