import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div>
     <NavBar></NavBar>

     <Catalog></Catalog>
    
     <Footer></Footer>
      
    </div>
  );
}

export default App;
