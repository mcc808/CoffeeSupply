import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";
import Product from './../components/product';


const Admin = () => {
    const[product, setProduct] = useState({});

    const [allProducts, setAllProducts] = useState([]);

    const[couponCode, setCouponCode] = useState({});

    const[allCoupons, setAllCoupons] = useState([]);

    const saveProduct = async () => {
        console.log(product);

        let fixedProd = {...product};
        fixedProd.price = parseFloat(fixedProd.price);

        let service = new DataService();
        let res = await service.saveProduct(fixedProd);
        console.log(res);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy); 
    };

    const saveCoupon = () => {
        console.log(couponCode);

        // add the coupon to the allCoupons array
        let copy = [...allCoupons];
        copy.push(couponCode);
        setAllCoupons(copy); 
    };

    const productValChange = (e) => {  //e = event information
        let name = e.target.name;
        let value = e.target.value;
        
        //copy, modify the copy, set the copy back
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    };

    //same as above
    const couponValChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = {...couponCode};
        copy[name] = value;
        setCouponCode(copy);
    };

    const loadCouponsFromServer = async () => {
        let service = new DataService();
        let coupons = await service.getCoupons();
        setAllCoupons(coupons);
    };

    const loadProductsFromServer = async () => {
        let service = new DataService();
        let prods = await service.getCatalog();
        setAllProducts(prods); 
    };

    // when the component is loaded/dispayed
    useEffect(() => {
        loadProductsFromServer();
        loadCouponsFromServer();
    }, []);


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
                        <input name="category" onBlur={productValChange} type="text"/>
                    </div>

                    <div className="my-control">
                        <label>Price</label>
                        <input name="price" onBlur={productValChange} type="text"/>
                    </div>

                    <div className="my-control center">
                       <button onClick={saveProduct} className="btn btn-sm btn-dark">Save Product</button>
                    </div>

                    <hr  />

                    <ul>
                        {allProducts.map((p) =>(<li key={p.title}>{p.title} - ${parseFloat(p.price).toFixed(2)}</li>))}
                    </ul>
                </div>

                <div className="coupons-form">
                    <h5>Register Coupon Codes</h5>

                    <div className="my-control">
                        <label>Code</label>
                        <input name="code" onBlur={couponValChange} type="text" />
                    </div>

                    <div className="my-control">
                        <label>Discount</label>
                        <input name="discount" onBlur={couponValChange} type="number" />
                    </div>

                    <div className="my-control center">
                        <button onClick={saveCoupon} className="btn btn-dark">Save Coupon</button>
                    </div>

                    <hr  />

                    <h5>Valid Coupon Codes</h5>

                    <ul>
                        {allCoupons.map(c => <li key={c.code}>{c.code} - {c.discount}</li>)}
                    </ul>

                </div>

            </div>

        </div>

    ); 
};

export default Admin;