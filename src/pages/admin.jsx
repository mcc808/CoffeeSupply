import "./admin.css";
import { useState } from "react";
import Product from './../components/product';


const Admin = () => {
    const[product, setProduct] = useState({});

    const saveProduct = () => {
        console.log(product);
    };

    const saveCoupon = () => {
        console.log("Save Coupon");
    };

    const productValChange = (e) => {  //e = event information
        let name = e.target.value;
        let value = e.target.value;
        
        //copy, modify the copy, set the copy back
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    };

    return(
        <div className="admin">
            <h3>Store Admin</h3>
            
            <div className="content">
                <div className="products-form">
                    <h5>Save Product</h5>

                    <div className="my-control">
                        <label>Title</label>
                        <input name="title" onBlur={productValChange} type="text"/>
                    </div>

                    <div className="my-control">
                        <label>Image</label>
                        <input name="image" onBlur={productValChange} type="text"/>
                    </div>

                    <div className="my-control">
                        <label>Category</label>
                        <input name="category" type="text"/>
                    </div>

                    <div className="my-control">
                        <label>Price</label>
                        <input name="price" type="text"/>
                    </div>

                    <div className="my-control center">
                       <button onClick={saveProduct} className="btn btn-sm btn-dark">Save Product</button>
                    </div>
                </div>

                <div className="coupons-form">
                    <h5>Register Coupon Codes</h5>

                    <div className="my-control">
                        <label>Code</label>
                        <input type="text" />
                    </div>

                    <div className="my-control">
                        <label>Discount</label>
                        <input type="number" />
                    </div>

                    <div className="my-control">
                        <button className="btn btn-dark">Save Coupon</button>
                    </div>

                </div>

            </div>

        </div>

    ); 
};

export default Admin;