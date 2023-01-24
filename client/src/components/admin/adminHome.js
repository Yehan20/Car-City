import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Modal} from 'react-bootstrap'
import {Container, Split, StyledAdminHome, StyledAdminNav} from "../styled/Common.styled";
import StyleButton from '../styled/Buttons.styled'
import { useGlobalContext } from "../../context/globalcontext";


const AdminHome = () => {

        return(< StyledAdminHome > <Container>
            <h2>Your Products</h2>
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
    const {addData} = useGlobalContext
    const [carData,setCarData] = useState({name:'',amount:'',price:'',desc:'',file:''})
    const handleSubmit=(target)=>{
          console.log("file",target.files[1]);
         const name = target.name
         setCarData({...carData,[name]:target.value})
         console.log(carData)
    }
    return (
        <Modal show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <h3>Add a Car</h3>
            </Modal.Header>
            <Modal.Body>
                <form encType="mulitpart/form-data">
                    <Split>
                        <div>
                            <label>Name</label>
                            <input type="text"  onChange={(e)=>handleSubmit(e.target)} placeholder="name" name="name"/>
                        </div>
                        <div>
                            <label>Amount</label>
                            <input type="number" onChange={(e)=>handleSubmit(e.target)} placeholder="amount" name="amount"/>
                        </div>
                    </Split>

                    <Split>
                        <div>
                            <label>Price</label>
                            <input type="number" onChange={(e)=>handleSubmit(e.target)} placeholder="RS?" name="price"/>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" name="file" onChange={(e)=>handleSubmit(e.target)} />
                        </div>
                    </Split>

                    <div>
                        <label>Description</label>
                        <textarea cols="30" rows="5" onChange={(e)=>handleSubmit(e.target)} name="desc"></textarea>
                    </div>

                </form>
            </Modal.Body>

            <Split>
                <StyleButton width={'200px'}
                    margin={'20px'}
                    onClick={handleClose}>
                    Close
                </StyleButton>
                <StyleButton onClick={addData} width={'200px'}
                    margin={'20px'}
                    variant="primary">
                    Save Changes
                </StyleButton>
            </Split>

        </Modal>
    )
}


export default AdminHome;
