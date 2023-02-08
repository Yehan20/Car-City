import Aos from 'aos';
import 'aos/dist/aos.css';
import { CartHeaderStyled,StyledMiniCart,MiniCartBody } from "./styled/Cart.Styles";
import StyleButton from "./styled/Buttons.styled";
import {ImSearch} from 'react-icons/im'
import {HiShoppingCart,HiX} from 'react-icons/hi'
import { Split } from "./styled/Common.styled";
import React, { useEffect, useState } from "react";
import EmptyCart from "./common/emptyCart";
import Success from './common/success';
import { useGlobalContext } from '../context/globalcontext';



const CartHeader=React.memo(({setBlock,showCart,setShowCart})=>{

    const [sucess,setSucess] = useState(false)
    const [animate,setAnimate] = useState(false)

  const {state,orderItems, searchItems} = useGlobalContext();

  const handleOrder = ()=>{
    setSucess(true)
    setBlock(true)
    orderItems()
  }

  
  const reset=()=>{
    setSucess(false)
    setBlock(false)
  }


    useEffect(()=>{
 
      setAnimate(true)
      setTimeout(()=>{
         setAnimate(false)
      },1000)
      
    
   },[state.miniCart])

   useEffect(()=>{
    Aos.init()
    setAnimate(false)
   },[])



  
    return (
     
     <CartHeaderStyled >
    
         <div onClick={()=>setShowCart(false)}>
            <h2><span>C</span>ar City</h2>
         </div>
         <Split onClick={()=>setShowCart(false)}>
            <input type="text" placeholder="Search"  onChange={(e)=>searchItems(e.target.value)} />
            <StyleButton width={'60px'}><ImSearch/></StyleButton>
         </Split>
         <Split>
            <div>
                <h3>Total Items : <span>{state.total}</span> </h3>
                <h3>Total amount: RS <span>{state.price}</span> </h3>
            </div>
            <button className={animate?'hvr-buzz-out':''}  onClick={()=>setShowCart(!showCart)}>
             <span>{state.total}</span>   
             <HiShoppingCart  size={'40px'} color={'red'} style={{display:'block',margin:'0 auto'}}/>
             </button>
             { showCart &&  <MiniCartBody   data-aos={"fade-up"}>
             {sucess && <Success/>} 
                       <aside>
                      

                       {state.miniCart.length===0 && !sucess?<EmptyCart/>:''}
                           
                       {state.miniCart.map((minCart)=>{
                        return  <MiniCart id={state.miniCart.length===0?'empty':''} key={minCart._id} {...minCart} />
                       
                        
                       })}
                        </aside>
                        
                        <StyleButton onClick={handleOrder}  disabled={state.miniCart.length===0?true:false} width={"360px"} >Check Out</StyleButton>
                         {sucess && <StyleButton  width={"360px"} onClick={()=>reset()}>Order Again</StyleButton>}
                        
        
                       </MiniCartBody>
             }
        

         </Split>
    </CartHeaderStyled>
    )
})

const MiniCart =({_id,name,path,amount,price,selectedAmount})=>{
  const {deleteItem,updateFinalPrices} = useGlobalContext()
  const handleDelete = ()=>{
        deleteItem(_id)
        updateFinalPrices()
  }

   return <StyledMiniCart>
       <div>
         <img src={`${path}`} alt={name} />
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
         <button onClick={()=>handleDelete()}>
             <HiX/>
         </button>
       </div>
   </StyledMiniCart>
}
export default CartHeader;