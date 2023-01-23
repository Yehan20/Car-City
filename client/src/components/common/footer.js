import { StyledFooter } from "../styled/Common.styled";
import {AiFillCopyrightCircle ,AiOutlineHeart} from 'react-icons/ai'

const Footer = () => {
    return (<StyledFooter>
        <p>Car City  | <AiFillCopyrightCircle/> {new Date().getFullYear()}  | All Rights Reserved  <br />
         Made with <AiOutlineHeart/> by <span> Yehan Nilanga</span> </p>
    </StyledFooter> );
}

export default Footer;