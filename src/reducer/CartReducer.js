const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, amount, price, product } = action.payload;
      
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
     
      //existing product handle
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id
      );

      if(existingProduct){
        let updatedProduct = state.cart.map((curElem) => {
          if(curElem.id === id){
            let newAmount = curElem.amount + amount;

            return {
              ...curElem,
              amount: newAmount,
            };
          }else{
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        }
      }else{
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
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
       }

    // to empty or to clear to cart
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }


    // to know the total items in the cart
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }
  
  //to know cart total Price
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

     return state;
  };
  export default cartReducer;