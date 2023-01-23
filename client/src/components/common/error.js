import { StyledError } from "../styled/Common.styled";
import {HiEmojiSad} from 'react-icons/hi'
import { Link } from "react-router-dom";

const Error = () => {
    return ( 
      <StyledError>
        <h3>404 Not Found</h3>
        <HiEmojiSad size={"150px"} color={'red'}/>
        <p><Link to={'/'}>Back to Home</Link></p>
      </StyledError>

     );
}
 
export default Error;
     
