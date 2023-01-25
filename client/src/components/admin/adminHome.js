import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Modal} from 'react-bootstrap'
import {Container, Split, StyledAdminHome, StyledAdminNav} from "../styled/Common.styled";
import StyleButton from '../styled/Buttons.styled'
import {useGlobalContext} from "../../context/globalcontext";
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const AdminHome = () => {
      const {getProducts} = useGlobalContext()
      const [products,setProducts]=useState([]);
      
      useEffect(()=>{
            getProducts().then((data)=>{
               setProducts(data)
           }).catch(e=>console.log(e))
      },[])

        return(< StyledAdminHome > <Container>
            <h2>Your Products</h2>
            <Split>
                {
                   products.map((product)=>{
                    const {name,price,amount,path,_id} = product
                    return <article key={_id}>
                         <h3>{name}</h3>
                         <img src={"http://"+path} alt={name} />
                         <p>RS: {price}</p>
                         <h4>In Stock: <span>{amount}</span></h4>
                         <div>
                        <StyleButton  width={'50px'}><BiEdit color={"green"}/></StyleButton> 
                         <StyleButton width={'50px'} ><AiFillDelete color={"red"}/> </StyleButton>
                       </div>
                    </article>
                   })

                }
            </Split>
        </Container>
    </StyledAdminHome>
    );
}

export const AdminNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/')
    }
    return <StyledAdminNav>
        <ul>
            <li>
                <StyleButton onClick={handleShow}>Add Car</StyleButton>
            </li>
            <li>
                <StyleButton>Orders</StyleButton>
            </li>
            <li>
                <StyleButton onClick={logout}>Logout</StyleButton>
            </li>
        </ul>
        <AddModel show={show}
            handleClose={handleClose}
            handleShow={handleShow}/>
    </StyledAdminNav>
}

const AddModel = ({show, handleClose}) => {
    const {addData} = useGlobalContext()
    const [isAdded, setisAdded] = useState(false);
    const [carData, setCarData] = useState({
        name: '',
        amount: '',
        price: '',
        desc: '',
        file: ''
    })

    const handleClick = async (e) => {
        e.preventDefault();
        const result = await addData(carData);

        if (result.success) {
            setisAdded(true)
            handleClose();
      
           
        }
    }
    const handleSubmit = (target) => {
        const name = target.name
        setCarData({
            ...carData,
            [name]: target.value
        })

    }
    const handleFile = (target) => {
        const file = (target.files[0])
        const name = target.name
        setCarData({
            ...carData,
            [name]: file
        })
    }
    if (isAdded) {
        return <Modal show={isAdded}>
            <Modal.Header>
                <h3>Product added</h3>
            </Modal.Header>
            <StyleButton width={'200px'}
                margin={'20px'}
                onClick={()=>setisAdded(false)}>
                Ok
            </StyleButton>
        </Modal>
    }
    return (
        <Modal show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <h3>Add a Car</h3>
            </Modal.Header>
            <Modal.Body>

                <form encType="mulitpart/form-data"
                    onSubmit={handleClick}>
                    <Split>
                        <div>
                            <label>Name</label>
                            <input type="text"
                                onChange={
                                    (e) => handleSubmit(e.target)
                                }
                                placeholder="name"
                                name="name"/>
                        </div>
                        <div>
                            <label>Amount</label>
                            <input type="number"
                                onChange={
                                    (e) => handleSubmit(e.target)
                                }
                                placeholder="amount"
                                name="amount"/>
                        </div>
                    </Split>

                    <Split>
                        <div>
                            <label>Price</label>
                            <input type="number"
                                onChange={
                                    (e) => handleSubmit(e.target)
                                }
                                placeholder="RS?"
                                name="price"/>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" name="file"
                                onChange={
                                    (e) => handleFile(e.target)
                                }/>
                        </div>
                    </Split>

                    <div>
                        <label>Description</label>
                        <textarea cols="30" rows="5"
                            onChange={
                                (e) => handleSubmit(e.target)
                            }
                            name="desc"></textarea>
                    </div>

                    <Split>
                        <StyleButton width={'200px'}
                            margin={'20px'}
                            onClick={handleClose}>
                            Close
                        </StyleButton>
                        <StyleButton width={'200px'}
                            margin={'20px'}
                            variant="primary">
                            Add Car
                        </StyleButton>
                    </Split>

                </form>
            </Modal.Body>


        </Modal>
    )
}


export default AdminHome;
