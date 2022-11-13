const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
    
     //tackle the existing product
     let existingProduct = state.cart.find((curItem)=>curItem.id === id+color);
     console.log(existingProduct)
    if(existingProduct){
        let updatedProduct = state.cart.map((curElem) => {
            if(curElem.id === id+color){
              let newAmount = curElem.amount + amount;
              if(newAmount >= curElem.max){
                newAmount = curElem.max;
              }
              return {
                ...curElem,
                amount:newAmount,
              } 
            }else{
             return curElem;
            }
        })
        return{
          ...state,
          cart:updatedProduct,
        }
    }else{
  
    let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
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
  //to empty or to clear the cart
    if(action.type === "CLEAR_CART"){
      return{
        ...state,
        cart:[],
      }
    }
    return state;
  };
  
  export default cartReducer;