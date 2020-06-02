function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM: return {
            item: action.payload,
            product: state.cartItems.find(x=>x.product === item.product)
        }
                
            break;
    
        default:
            break;
    }
}