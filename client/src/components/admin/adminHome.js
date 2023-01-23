import { Container, StyledAdminHome, StyledAdminNav } from "../styled/Common.styled";
import StyleButton from '../styled/Buttons.styled'
import { useNavigate } from "react-router-dom";


const AdminHome = () => {
    return (< StyledAdminHome>
        <Container>
             <h2>Your Products</h2>
        </Container>
    </StyledAdminHome>);
}

export const AdminNav = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('user');
        navigate('/')
    }
    return <StyledAdminNav>
        <ul>
            <li><StyleButton>Add Car</StyleButton></li>
            <li><StyleButton>Orders</StyleButton></li>
            <li><StyleButton onClick={logout}>Logout</StyleButton></li>
        </ul>
    </StyledAdminNav>
}

export default AdminHome;