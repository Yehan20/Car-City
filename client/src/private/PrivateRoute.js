import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalcontext";
import AdminHome from '../components/admin/adminHome';
const PrivateRoute = () => {
  
    const {loggedUser} = useGlobalContext()
    console.log('logged user',loggedUser.error);
    if(loggedUser.error){
     return  <Navigate to={'/'}/>
    }
    return ( 
       <AdminHome />
     );
}
 
export default PrivateRoute;