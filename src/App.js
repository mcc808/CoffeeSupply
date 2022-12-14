import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';
import GlobalState from './state/globalState';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
  <GlobalState>
    <BrowserRouter>
      <div>
        <NavBar></NavBar>

          <Routes>
              <Route path='/' element={<Home />}   />
              <Route path='/home' element={<Home />}   />
              <Route path='/catalog' element={<Catalog />}   />
              <Route path='/about' element={<About />}   />
              <Route path='/cart' element={<Cart  />}   />
              <Route path='/admin' element={<Admin />}   />
          </Routes>
        <Footer></Footer>
      
      </div>
    </BrowserRouter>
  </GlobalState>
  );
}

export default App;

