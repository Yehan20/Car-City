import Aos from 'aos';
import 'aos/dist/aos.css';
import { CartHeaderStyled,StyledMiniCart,MiniCartBody } from "./styled/Cart.Styles";
import StyleButton from "./styled/Buttons.styled";
import {ImSearch} from 'react-icons/im'
import {HiShoppingCart,HiX} from 'react-icons/hi'
import { Split } from "./styled/Common.styled";
import React, { useEffect, useState } from "react";
import EmptyCart from "./common/emptyCart";
import { useCallback } from "react";
import Success from './common/success';



const CartHeader=React.memo(({cart,removeItem,search,setCart,setBlock,showCart,setShowCart})=>{
    const [finalValues,setFinalValues]=useState({totalItems:0,totalPrice:0})
    const [sucess,setSucess] = useState(false)
    const [animate,setAnimate] = useState(false)
    const updateFinalPrices= useCallback(()=>{
      const totals = cart.reduce((initialValue,cartItem)=>{
            initialValue.totalItems = initialValue.totalItems + cartItem.selectedAmount;
            initialValue.totalPrice = initialValue.totalPrice + cartItem.price;
            return initialValue
            

      },{
        totalItems:0,
        totalPrice:0
      })
      
     return totals

  },[cart])

  const orderItems = ()=>{
    setSucess(true)
    setBlock(true)
    setCart([]);
  }
  const reset=()=>{
    setSucess(false)
    setBlock(false)
  }




    useEffect(()=>{
      const final= updateFinalPrices();
      setAnimate(true)
      setTimeout(()=>{
         setAnimate(false)
      },1000)
      setFinalValues({...final})

      
    
   },[cart,updateFinalPrices])

   useEffect(()=>{
    Aos.init()
    setAnimate(false)
   },[])



  
    return (
     
     <CartHeaderStyled>
    
         <div>
            <h2><span>C</span>ar City</h2>
         </div>
         <Split>
            <input type="text" placeholder="Search"  onKeyUp={(e)=>search(e)} />
            <StyleButton width={'60px'}><ImSearch/></StyleButton>
         </Split>
         <Split>
            <div>
                <h3>Total Items : <span>{finalValues.totalItems}</span> </h3>
                <h3>Total amount: RS <span>{finalValues.totalPrice}</span> </h3>
            </div>
            <button className={animate?'hvr-buzz-out':''}  onClick={()=>setShowCart(!showCart)}>
             <span>{finalValues.totalItems}</span>   
             <HiShoppingCart  size={'40px'} color={'red'} style={{display:'block',margin:'0 auto'}}/>
             </button>
             { showCart &&  <MiniCartBody   data-aos={"fade-up"}>
             {sucess && <Success/>} 
                       <aside>
                      

                       {cart.length===0 && !sucess?<EmptyCart/>:''}
                           
                       {cart.map((minCart)=>{
                        return  <MiniCart removeItem={removeItem} id={cart.length===0?'empty':''} key={minCart._id} {...minCart} />
                       
                        
                       })}
                        </aside>
                        
                        <StyleButton onClick={()=>orderItems()}  disabled={cart.length===0?true:false} width={"360px"} >Check Out</StyleButton>
                         {sucess && <StyleButton  width={"360px"} onClick={()=>reset()}>Order Again</StyleButton>}
                        
        
                       </MiniCartBody>
             }
        

         </Split>
    </CartHeaderStyled>
    )
})

const MiniCart =({_id,name,path,amount,price,selectedAmount,removeItem})=>{

   return <StyledMiniCart>
       <div>
         <img src={`http://${path}`} alt={name} />
         </div>
       <div>
       <p>{name}</p>
       <p>Per-item Rs:{price/selectedAmount}</p>
       </div>
       <div>
        <p>{selectedAmount} Items</p>
        <p>RS:{price}</p>
       </div>
       <div>
         <button onClick={()=>removeItem(_id)}>
             <HiX/>
         </button>
       </div>
   </StyledMiniCart>
}
export default CartHeader;