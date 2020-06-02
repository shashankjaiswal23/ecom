import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productsAction'

//{console.log(props.match.params)}  == used to fetch url
function ProductScreen(props) {
  const [qty, setQty] = useState('1')
  console.log(qty)
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails
    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(detailsProduct(props.match.params.id))
        return () => {
            
        }
    }, [])
  const handleAddToCart = () => {
    props.history.push('/cart/'+ props.match.params.id + "?qty="+qty ) /* props.history.push('/url/') */
  }
    return (
      <div>
        <div className="product-details">
          <div className="backToHome">
            <Link to="/">Click to return</Link>
          </div>
          {loading ? (
            <div>loading......</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div>
              <div className="product-details-image">
                <img src={"." + product.image} alt="product" />
              </div>
              <div className="products-details-info">
                <ul>
                  <li>{product.name}</li>
                  <li className="product-brand">{product.brand}</li>
                  <li className="product-price">${product.price}</li>
                  <li className="product-rating">
                    {product.stars} Stars (10 {product.review})
                  </li>
                </ul>
              </div>
              <div className="products-details-action">
                <ul>
                  <li>Price: {product.price}</li>
                  <li>Status: {product.qtyInStock > 0 ? <p>In Sock</p> :<p> Unavaible</p>}</li>
                  <li>
                    Qty:
                        <select value={qty} onChange={e => setQty(e.target.value)}> {/* [...Array(5).keys()] */}
                          {[...Array(product.qtyInStock).keys()].map(x => 
                            <option key={x+1} value={x + 1}>{x + 1}</option>
                        )}
                    </select>
                  </li>
                      <li>
                        {product.qtyInStock > 0 &&
                          <button onClick={handleAddToCart}>Add to cart</button>
                        
                        }
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
export default ProductScreen
