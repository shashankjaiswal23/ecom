import React,{useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productsAction';
export default function HomeScreen(props) {
    
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
        return () => {
            //
        }
    }, [])
    return loading ? <div>loading........</div>:
        error ? <div>{error}</div> :
    (
        
        <div>
            <ul className="products">
                  {products.map(product=>
                    <li key={product._id}>
                    <div className="product">
                        <img className="product-image" src={product.image} alt="product"/>
                        <Link to={"products/"+ product._id}><div className="product-name">{product.name}</div></Link>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.stars} Stars (10 {product.review})</div>
                        
                    </div>
                </li>
                    )}
                    
                    
                </ul>
                
        </div>
    )
}
