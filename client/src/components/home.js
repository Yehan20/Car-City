import AOS from 'aos';
import 'aos/dist/aos.css';
import {CartBody} from "./styled/Cart.Styles";
import {Container, Split} from "./styled/Common.styled";
import {useState} from "react";
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import StyleButton from './styled/Buttons.styled'
import {useEffect} from "react";
import CartHeader from "./cartHeader";
import {Modal} from 'react-bootstrap'
import NotFound from './common/notfound';
import {useGlobalContext} from '../context/globalcontext';
import Loader from '../imgs/loader.gif';

const Home = () => {

    const {
        state,
        increaseItem,
        decreaseItem,
        addToCart,
        updateFinalPrices,
        viewSingleItem
    } = useGlobalContext();


    const [show, setShow] = useState(false);
    const [block, setBlock] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [loading,setLoading]=useState(true);


    useEffect(() => {
        AOS.init();
        setTimeout(()=>{
            setLoading(false)
        },2000)
       
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = (_id) => {

        viewSingleItem(_id)
        setShow(true)
    };
    const addtoCart = (e, _id) => {


        e.target.disabled = true
        e.target.textContent = 'Added '

        addToCart(_id)
        updateFinalPrices()


        setTimeout(() => {
            e.target.disabled = false
            e.target.textContent = 'Add to Cart '
        }, 1000)


    }


    return (
        <>
            <CartHeader setBlock={setBlock}
                showCart={showCart}
                setShowCart={setShowCart}/>
            <CartBody onClick={
                () => setShowCart(false)
            }>
                <Container>
                    {!state.match && <NotFound/> }
                    {loading && <div className='text-center'>
                 
                        <img src={Loader} alt='Loader'/>
                    </div>}
                    <Split> {
                        !loading && state.cart.map((product) => {

                            const {
                                name,
                                price,
                                amount,
                                path,
                                _id,
                                selectedAmount
                            } = product

                            return <>{amount !==0  &&
                                <article key={_id}
                                data-aos={"fade-up"}
                                data-aos-duration={"1000"}>
                                <h3>{name}</h3>
                                <img onClick={
                                        () => handleShow(_id)
                                    }
                                    src={
                                       path
                                    }
                                    alt={name}/>
                                <h4>Amount:
                                    <span>{amount}</span>
                                </h4>
                                <p>RS : {price}</p>

                                <div>
                                    <button disabled={
                                            amount === 0 ? true : false || selectedAmount>amount-1?true:false
                                        }
                                        onClick={
                                            () => increaseItem(_id)
                                    }><HiOutlinePlusCircle size={"25px"}
                                            color={"green"}/>
                                    </button>
                                    <h5>{selectedAmount}</h5>
                                    <button disabled={
                                            selectedAmount <= 1 ? true : false
                                        }
                                        onClick={
                                            () => decreaseItem(_id)
                                        }
                                        min={0}>
                                        <HiOutlineMinusCircle size={"25px"}
                                            color={"red"}/></button>
                                </div>
                                <StyleButton disabled={block}
                                    onClick={
                                        (e) => addtoCart(e, _id)
                                    }
                                    width={'150px'}>Add to Cart</StyleButton>

                            </article>
                            
                            
                            }
                          
                            </>
                    })
                    } </Split>
                </Container>
            </CartBody>
            <LargerProducts show={show}
                {...state.singleItem}
                handleClose={handleClose}/>
        </>
    );
}

const LargerProducts = ({
    show,
    handleClose,
    _id,
    name,
    path,
    price,
    description
}) => {
    return <Modal className="viewModel"
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
            <h2>
                Car City</h2>
        </Modal.Header>
        <Modal.Body>
            <img src={
                    `${path}`
                }
                alt={name}/>
            <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
            <h3>{name}</h3>
            <h3>RS.{price}</h3>
        </Modal.Footer>
    </Modal>
}

export default Home;
