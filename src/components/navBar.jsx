import './navBar.css'
import DataContext from '../state/dataContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import Catalog from './../pages/catalog';
import Product from './product';


function NavBar(){
const cart = useContext(DataContext).cart;

const countProducts = () => {
  let total = 0; 

  for(let i=0; i < cart.length; i++){
    
    const prod = cart[i];
    total  += prod.quantity
  }

  return total;
};

    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <Link className='btn btn-outline-secondary' to="/cart">
         View Cart <h7><span className="badge text-bg-dark">{countProducts()}</span></h7>
        </Link>
      </form>
    </div>
  </div>
</nav>
    ) 
}

export default NavBar;