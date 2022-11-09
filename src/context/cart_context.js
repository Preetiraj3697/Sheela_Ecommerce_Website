import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();
const getLocalCartData = () =>{
  let newCartData = localStorage.getItem("SheelaCart");
  if(newCartData === []){
    return [];
  }else{
    return JSON.parse(newCartData);
  }
}
const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

 // to add the data in localStorage
 //get vs set
 useEffect(()=>{
  localStorage.setItem("SheelaCart",JSON.stringify(state.cart))
 },[state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };