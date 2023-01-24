import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Login from './components/admin/login';
import Header from './components/header';
import GlobalContext from './context/globalcontext';
import { ThemeProvider } from 'styled-components';
import Global from './components/styled/global.styled';
import './css/index.css';
import PrivateRoute from './private/PrivateRoute';
import Footer from './components/common/footer';
import Error from './components/common/error';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
 
  const theme = {
    background: '#f5f5f5',
    secondaryClr: "#E52727",
    cardClr: "#fff",
    textClr: '#111111',
    cstBoxShadow: '0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),0.125em 0.125em 0.25em rgba(0,0,0,0.15)'
  }



  return (  
    <Router>
      <GlobalContext>
        <ThemeProvider theme={theme}>
          <Global />
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin/login' element={<Login />} />
              <Route path ='/admin/home' element={<PrivateRoute/>} />
              <Route path='*' element={<Error/>}/>
            </Routes>
          <Footer/>
        </ThemeProvider>
      </GlobalContext>
    </Router>
  );
}

export default App;
