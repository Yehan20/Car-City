import AOS from 'aos';
import 'aos/dist/aos.css';
import {CartBody} from "./styled/Cart.Styles";
import {Container, Split} from "./styled/Common.styled";
import { useState } from "react";
import { useGlobalContext } from "../context/globalcontext";
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import StyleButton from './styled/Buttons.styled'
import { useEffect } from "react";
import { useCallback } from "react";
import CartHeader from "./cartHeader";
import {Modal} from 'react-bootstrap'
import NotFound from './common/notfound';


const Home = () => {

    const{getProducts} = useGlobalContext()
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    const [veiwProduct,setViewProduct] = useState('')
    
    const [match,setMatch]= useState(false)
    const [show, setShow] = useState(false);
    const [block,setBlock]= useState(false)
    const [showCart,setShowCart] = useState(false)

    const handleClose = () => setShow(false);
    
    const handleShow = (_id) => {
        const currentProduct = products.find((product)=>product._id===_id)
        setViewProduct(currentProduct)
        setShow(true)
    };


    const get = useCallback(async()=>{
        const data=  await  getProducts()
        localStorage.setItem("items",JSON.stringify(data));     
        setProducts(data)
  
        console.log('create functon')
    },[getProducts])

    useEffect(()=>{
       console.log('use effect run')
       get()
    },[get])

    useEffect(()=>{
        AOS.init();
    },[])
 
    
    const search = (param)=>{
       
        const text = param.target.value
        // setMatch(false)
        console.log(param.keyCode);
        const newCart = products.filter(item=>Object.values(item).some(val=>typeof val === "string" && val.includes(text)));
        //const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
         console.log(newCart);
         if(newCart.length===0){
            setMatch(true)
        }
        else{
         
            setMatch(false)
        }
        if(text.length<1 || text.endsWith(" ") || param.keyCode===8){
            console.log('works');
            setMatch(false)
            setProducts(JSON.parse(localStorage.getItem("items")))
            return
        }
     
        setProducts(newCart)

     
      
        
    }
    

 
    const addtoCart= (e,_id)=>{
      
        const  specificItem =products.find((product)=>product._id===_id)        

        e.target.disabled= true
        e.target.textContent = 'Added '

        // check if the same item is in the cart if yes add the qunatity
        let sameItems = cart.map((item)=>{
            if(item._id===specificItem._id){
             
                return {
                    ...item,
                    selectedAmount:item.selectedAmount + specificItem.selectedAmount,
                    price:(item.selectedAmount + specificItem.selectedAmount ) * specificItem.price 
                }
            }
            return item
        })

        if(!(sameItems.some((sameItem)=>sameItem._id===specificItem._id))){
            // first item or first time item
      
           sameItems.push(specificItem)
           sameItems= sameItems.map((item)=>{
              if(item._id === specificItem._id){
               return {
                ...item,price:item.price * specificItem.selectedAmount
               }
             }
             return item;
           })
        }
       
     
        setTimeout(()=>{
            e.target.disabled= false
            e.target.textContent = 'Add to Cart '
        },1000)
 
        setCart(sameItems)
        updateQuantity(specificItem);
        setShowCart(false)

  
    }
    
    const updateQuantity = (item)=>{
        const newProdcuts = products.map((product)=>{
             if(item._id===product._id){
                return {
                    ...product,amount:product.amount - item.selectedAmount
                }
           
             }
             return product
        })

        setProducts(newProdcuts)
    }

    const removeItem = (_id) =>{
        const removedItem = cart.find((cartItem)=>cartItem._id===_id)
        const newItems = cart.filter((cartItem)=>{
            if(cartItem._id !==_id){
                return cartItem
            }
            return null
        })
        const newProdcuts = products.map((cartItem)=>{
            if(cartItem._id===_id){
                return {
                    ...cartItem,amount:cartItem.amount + removedItem.selectedAmount
                }
            
            }
            return cartItem
        })
        setProducts(newProdcuts)
        setCart(newItems)
    }
 
    const increaseItem = (_id)=>{
        
        const modifiedProducts = products.map((product)=>{
            if(product._id===_id){
                return {...product,selectedAmount:product.selectedAmount+1}
            }
          return product
         })

         setProducts(modifiedProducts)
     }  
     
     const decreaseItem = (_id)=>{
        const modifiedProducts = products.map((product)=>{
            if(product._id===_id){
                return {...product,selectedAmount:product.selectedAmount-1}
            }
          return product
         })

         setProducts(modifiedProducts)
     }  


    return (
        <>
        <CartHeader  removeItem={removeItem} search={search} setCart={setCart}  setBlock={setBlock} cart={cart}
            showCart={showCart} setShowCart={setShowCart}/> 
        <CartBody onClick={()=>setShowCart(false)}>
            <Container> {/* <h1>Products</h1> */}
                {match && <NotFound/>}
                <Split>
                     
                    { products  && products.map((product) => {
                         
                         const {  name,  price,  amount,  path,  _id, selectedAmount   } = product
                       
                        return  <article key={_id} data-aos={"fade-up"} data-aos-duration={"1000"}>
                        <h3>{name}</h3>
                        <img onClick={()=>handleShow(_id)} src={
                                "http://" + path
                            }
                            alt={name}/>
                        <h4>Amount:
                            <span>{amount}</span>
                        </h4>
                        <p>RS : {price}</p>
                
                        <div>
                            <button  disabled={amount===0?true:false}  onClick={()=>increaseItem(_id)}><HiOutlinePlusCircle   size={"25px"}
                                color={"green"}/> </button>
                                <h5>{selectedAmount}</h5>
                            <button disabled={selectedAmount<=1?true:false}  onClick={()=>decreaseItem(_id)} min={0}> <HiOutlineMinusCircle  size={"25px"}
                                color={"red"}/></button> 
                        </div>
                        <StyleButton disabled={block}  onClick={(e)=>addtoCart(e,_id)} width={'150px'}>Add to Cart</StyleButton>
                        
                    </article>
                })
                } </Split>
            </Container>
        </CartBody>
        <LargerProducts show={show} {...veiwProduct} handleClose={handleClose}/>
      </>
    );
}

const LargerProducts= ({show,handleClose,_id,name,path,price,description})=>{
    return <Modal className="viewModel" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <h2> Car City</h2>
    </Modal.Header>
    <Modal.Body>
        <img src={`http://${path}`} alt={name}/>
        <p>{description}</p>
    </Modal.Body>
    <Modal.Footer>
       <h3>{name}</h3>
       <h3>RS.{price}</h3>
    </Modal.Footer>
  </Modal>
}

export default Home;
