
import { StyledHeader } from './styled/Common.styled';
import {AiFillCar} from 'react-icons/ai'
import CartHeader from './cartHeader';
import { useLocation } from 'react-router-dom';


const Header = () => {
    // const place = useLocation();

    let {pathname} = useLocation();
 
    return ( <StyledHeader>
          <h1><AiFillCar/> Car City</h1>
          {pathname.includes('admin')?'': <CartHeader/>}
    </StyledHeader> );
}


export default Header;