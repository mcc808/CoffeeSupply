import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';

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
