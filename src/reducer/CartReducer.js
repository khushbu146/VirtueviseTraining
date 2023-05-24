const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, amount, price, product } = action.payload;
      
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
  
      let cartProduct;
  
      cartProduct = {
        id,
        name: product.title,
        amount,
        image: product.thumbnail,
        price,
        max: product.stock,
       };
    
       return {
        ...state,
        cart: [...state.cart, cartProduct]
       };
    }

    // if (action.type === "REMOVE_ITEM") {
    //     let updatedCart = state.cart.filter(
    //       (curItem) => curItem.id !== action.payload
    //     );
    //     return {
    //       ...state,
    //       cart: updatedCart,
    //     };
       //}
    

     return state;
  };
  export default cartReducer;