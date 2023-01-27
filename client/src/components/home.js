import {CartBody} from "./styled/Cart.Styles";
import {Container, Split} from "./styled/Common.styled";
import { useState } from "react";
import { useGlobalContext } from "../context/globalcontext";
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import StyleButton from './styled/Buttons.styled'
import { useEffect } from "react";
import { useCallback } from "react";
import CartHeader from "./cartHeader";
import { useRef } from "react";

const Home = () => {
    
    const [products,setProducts] = useState([]);
    const{getProducts} = useGlobalContext()
    const [cart,setCart] = useState([])
    const [added,isAdded] = useState(false)
    const buttonRef = useRef(null)

    const addtoCart= (e,_id)=>{
        const  specificItem = products.find((product)=>product._id===_id)
        console.log(buttonRef);
        e.target.disabled= true
        e.target.textContent = 'Added '
        buttonRef.current.style.display='none'
        setTimeout(()=>{
            e.target.disabled= false
            e.target.textContent = 'Add to Cart '
        },2000)
        setCart([...cart,specificItem])
    }
    
    const get = useCallback(async()=>{
        const data=  await  getProducts()
        setProducts(data)
        console.log('create functon')
    },[getProducts])

    useEffect(()=>{
       console.log('use effect run')
       get()
    },[get])
 
    const increaseItem = (products,_id)=>{
        const modifiedProducts = products.map((product)=>{
            if(product._id===_id){
                product.selectedAmount +=1;
                product.amount -=1;
                return product;     
            }
          return product
         })

         setProducts(modifiedProducts)
     }  
     
     const decreaseItem = (products,_id)=>{
        const modifiedProducts = products.map((product)=>{
            if(product._id===_id){
                product.selectedAmount -=1;
                product.amount +=1;
                return product;     
            }
          return product
         })

         setProducts(modifiedProducts)
     }  


    return (
        <>
        <CartHeader/> 
        <CartBody>
            <Container> {/* <h1>Products</h1> */}
                <Split> {
                    products && products.map((product) => {
                         const {  name,  price,  amount,  path,  _id, selectedAmount   } = product
                        return  <article key={_id}>
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
                            <button  disabled={amount===0?true:false}  onClick={()=>increaseItem(products,_id)}><HiOutlinePlusCircle   size={"25px"}
                                color={"green"}/> </button>
                                <h5>{selectedAmount}</h5>
                            <button disabled={selectedAmount<=1?true:false}  onClick={()=>decreaseItem(products,_id)} min={0}> <HiOutlineMinusCircle  size={"25px"}
                                color={"red"}/></button> 
                        </div>
                        <StyleButton  ref={buttonRef} onClick={(e)=>addtoCart(e,_id)} width={'150px'}>Add to Cart</StyleButton>
                    </article>
                })
                } </Split>
            </Container>
        </CartBody>
      </>
    );
}

export default Home;
