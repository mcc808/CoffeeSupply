import Product from "../components/product";
import "./catalog.css"
import {useEffect} from 'react';
import DataService from "../services/dataService";
import { useState } from 'react';

function Catalog(){
    let[products, setProducts] = useState([]);

    //arrow function
    const loadCatalog = async () => {
        let service = new DataService();
        let prods = await service.getCatalog();
        setProducts(prods);
    };

    //exec when the component is displayed
    useEffect(() => {
        loadCatalog();
     }, []);

    return(
    <div className="wrapper">
        <h1 className="a">Catalog</h1>
        <h4 className="b1">(Select from {products.length} products)</h4>
        
        {products.map((prod) => (
        
        <Product key={prod._id} data={prod} />
         ))}
        
        
    </div>
    );
}

export default Catalog; 

