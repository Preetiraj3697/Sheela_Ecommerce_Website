import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext} from "./productContext";
import reducer from  "../Reducer/filterReducer"
const FilterContext = createContext();
// console.log(FilterContext)
const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    // console.log('products: ', products);
    const [state,dispatch] = useReducer(reducer,initialState);
    // to set the grid view 
    const setGridView = () =>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () =>{
        return dispatch({type:"SET_LIST_VIEW"})
    }
    useEffect(()=>{
     dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    },[products])
   return <FilterContext.Provider value={{...state , setGridView,setListView}}>
     {children}
   </FilterContext.Provider>
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}