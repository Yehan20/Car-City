
import { StyledHeader } from '../styled/Common.styled';
import {AiFillCar} from 'react-icons/ai'
// import CartHeader from '../cartHeader';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Header = () => {
    // const place = useLocation();

    let {pathname} = useLocation();
    console.log(pathname);
    useEffect(()=>{
        Aos.init()
    })
 
    return ( <StyledHeader >
          <h1 data-aos={"fade-right"} data-aos-duration={"2000"}><AiFillCar/> Car City</h1>
          {/* {pathname.includes('admin')?'': <CartHeader/>} */}
          {/* {pathname.includes('/admin/home')?<AdminNav/>:'' } */}
    </StyledHeader> );
}


export default Header;