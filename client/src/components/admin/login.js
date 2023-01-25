
import { LoginStyled as LoginBox, LoginMain } from "../styled/login.styled";
import StyleButton from "../styled/Buttons.styled";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useGlobalContext } from "../../context/globalcontext";

const Login = () => {



   const navigate = useNavigate()
   const {login,setLoggedUser} = useGlobalContext()
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
          const {data} = await login(user.username,user.password);
          
          console.log(data)
          if(data.success){
            setLoggedUser(data) 
            localStorage.setItem('user',JSON.stringify(data)) 
            navigate('/admin/home')
          }
          else{
            setError('Invalid Login')
            return 
          }            
      }
      setError('Fill All feilds')
  
   }
    return (
        <LoginMain>
            <LoginBox>
                <h2>Login</h2>
                <form   onSubmit={handleSubmit}  >
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