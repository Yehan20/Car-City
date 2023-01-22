import { CartHeaderStyled } from "./styled/Cart.Styles";
import {ImSearch} from 'react-icons/im'
import {HiShoppingCart} from 'react-icons/hi'
import { Split } from "./styled/Common.styled";
import StyleButton from "./styled/Buttons.styled";
const CartHeader= ()=>{
    return <CartHeaderStyled>
         <div>
            <h2><span>C</span>ar City</h2>
         </div>
         <Split>
            <input type="text" placeholder="Search" />
            <StyleButton width={'60px'}><ImSearch/></StyleButton>
         </Split>
         <Split>
            <div>
                <h3>Total Items : <span>1</span> </h3>
                <h3>Total amount: RS <span>4000</span> </h3>
            </div>
            <button> <HiShoppingCart size={'40px'} color={'red'} style={{display:'block',marginRight:'auto'}}/></button>
         </Split>
    </CartHeaderStyled>
}
export default CartHeader;