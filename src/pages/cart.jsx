import "./cart.css"; 
import { useContext } from "react"; 
import DataContext from './../state/dataContext';
import CartProduct from "../components/cartProduct";


const Cart = () => {
    const cart = useContext(DataContext).cart;

    const countProducts = () => {
        let total = 0; 
      
        for(let i=0; i < cart.length; i++){
          
          const prod = cart[i];
          total  += prod.quantity
        }
      
        return total;
      };

    return (
        <div className="cart">
            <h1>Your cart</h1>
            <h4>You have {countProducts()} products in your cart</h4>
        
            <div className="products">
                <ul>
                    {cart.map(p => <CartProduct key={p._id} data={p}  />)}
                </ul>
            </div>
        </div>
    )
};

export default Cart;