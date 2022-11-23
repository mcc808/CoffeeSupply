import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <BrowserRouter>
    <div>
     <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home />}   />
        <Route path='/home' element={<Home />}   />
        <Route path='/catalog' element={<Catalog />}   />
        <Route path='/about' element={<About />}   />
      </Routes>
     
    
     <Footer></Footer>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

