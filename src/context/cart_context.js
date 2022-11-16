import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();
const getLocalCartData = () => {
  let newCartData = localStorage.getItem("SheelaCart");
  if (newCartData === []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
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
  //increment and decrement items
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // to add the data in localStorage
  //get vs set
  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEM"});
    // dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("SheelaCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
