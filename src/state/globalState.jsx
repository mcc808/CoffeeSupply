import DataContext from "./dataContext";
import { useState } from "react";

const GlobalState = (props) => {
    let [cart, setCart] = useState([]);
    let [user, setUser] = useState({ id:42, name: "Manuel"});

    const addProductToCart = (product) => {
        console.log("Adding to cart");

        let copy = [...cart];
        copy.push(product);
        setCart(copy);
    };

    const removeProductFromCart = () => {
        console.log("Removing from cart");
    };

    return (<DataContext.Provider 
    value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart, removeProductFromCart
    }}
    >
        {props.children}
    </DataContext.Provider>
    
    );

};


export default GlobalState;