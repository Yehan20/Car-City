
import { StyledHeader } from './styled/Common.styled';
import {AiFillCar} from 'react-icons/ai'
import CartHeader from './cartHeader';
import { useLocation } from 'react-router-dom';
import {AdminNav} from './admin/adminHome'

const Header = () => {
    // const place = useLocation();

    let {pathname} = useLocation();
    console.log(pathname);
 
    return ( <StyledHeader>
          <h1><AiFillCar/> Car City</h1>
          {pathname.includes('admin')?'': <CartHeader/>}
          {pathname.includes('/admin/home')?<AdminNav/>:'' }
    </StyledHeader> );
}


export default Header;