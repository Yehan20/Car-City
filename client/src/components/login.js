
import { LoginStyled as LoginBox, LoginMain } from "./styled/login.styled";
import StyleButton from "./styled/Buttons.styled";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

const Login = () => {



   const navigate = useNavigate()
   const [user,setUser] = useState({username:'',password:''})
   const [error,setError] = useState('')

   const handleChange=(target)=>{
     const feild=target.name;
     const value = target.value
     setUser({...user,[feild]:value})
   }

   const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!(user.password==='' || user.name==='')) {
         // 
      
         try{

            const formData = new FormData();
            formData.append('name',user.username)
            formData.append('password',user.password)
            const userL = await axios.post('http://localhost:3001/admin/login',formData)
      
            console.log(userL)
         }catch(e){
            console.log(e.message)
         }

               
      }
      setError('Fill All feilds')

      
   }
    return (
        <LoginMain>
            <LoginBox>
                <h2>Login</h2>
                <form  onSubmit={handleSubmit} >
                    <div>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id='username' name='username' onChange={(e)=>handleChange(e.target)} />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password'  onChange={(e)=>handleChange(e.target)}/>
                    </div>
                    <StyleButton  type="submit">Login</StyleButton>
                    {error &&<p>{error}</p>}
                </form>
            </LoginBox>
        </LoginMain>
    );
}

export default Login;