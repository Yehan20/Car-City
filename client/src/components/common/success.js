import {FaTruck} from 'react-icons/fa'
import {GoThumbsup} from 'react-icons/go'
import { StyleSuccess } from '../styled/Common.styled';

const Success = () => {
    return ( <StyleSuccess>
        <h3>Order Completed <GoThumbsup/></h3>
        <FaTruck size={"100px"} color={"red"}/>
        <p>Items will be delivered by Tommarow</p> 
    </StyleSuccess> );
}
 
export default Success;