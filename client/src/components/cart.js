
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import StyleButton from './styled/Buttons.styled'
const Cart = ({  name,  price,  amount,  path,  _id , keyPairs,selectedAmount  }) => {

    return ( 

        <article key={_id}>
        <h3>{name}</h3>
        <img src={
                "http://" + path
            }
            alt={name}/>
        <h4>Amount:
            <span>{amount}</span>
        </h4>
        <p>RS : {price}</p>

        <div>
            <HiOutlinePlusCircle  size={"25px"}
                color={"green"}/>
                <h5>{selectedAmount}</h5>
            <HiOutlineMinusCircle size={"25px"}
                color={"red"}/>
        </div>
        <StyleButton width={'150px'}>Add to Cart</StyleButton>
    </article>

     );
}
 
export default Cart;