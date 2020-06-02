import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction';

export default function CartScreen(props) {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[0]):1
    //console.log("Q",qty)
    //console.log("ID", productId)
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId)
            dispatch(addToCart(productId, qty))
        
        return () => {
            //
        }
    }, [])

    return (
        <div>
            <h1>This is the cart screen</h1>
        </div>
    )
}
