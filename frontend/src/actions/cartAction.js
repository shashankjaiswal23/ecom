import Axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstant";

export const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await Axios.get('/api/products/' + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:
            {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                qtyInStock: data.qtyInStock,
                qty
            }
        })
    } catch (error) {
        return error.message
    }
}