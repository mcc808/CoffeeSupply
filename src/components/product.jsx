import './product.css';
import QuantityPicker from './quantityPicker';


function Product(props){
    return(
        <div className="product">
            
            <img src={'/images/' + props.data.image} alt=""/>

            <h5>{props.data.title}</h5>

            <h6>{props.data.desc}</h6>

            <label>${props.data.price}</label>

            <QuantityPicker/>

            <button className='btn btn-sm btn-dark'>Add</button>

        </div>
    );
}

export default Product;
