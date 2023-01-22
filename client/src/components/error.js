import { StyledError } from "./styled/Common.styled";
import {HiEmojiSad} from 'react-icons/hi'

const Error = () => {
    return ( 
      <StyledError>
        <h3>404 Not Found</h3>
        <HiEmojiSad size={"150px"} color={'red'}/>
      </StyledError>

     );
}
 
export default Error;
     
