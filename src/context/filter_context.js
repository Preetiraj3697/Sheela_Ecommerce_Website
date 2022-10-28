import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext} from "./productContext";
import reducer from  "../Reducer/filterReducer"
const FilterContext = createContext();
// console.log(FilterContext)
const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text:"",
    }
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    // console.log('products: ', products);
    const [state,dispatch] = useReducer(reducer,initialState);
    // to set the grid view 
    const setGridView = () =>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    //to set the list view
    const setListView = () =>{
        return dispatch({type:"SET_LIST_VIEW"})
    }
    //sorting function
    const sorting = (event) =>{
        let userValue = event.target.value;
       dispatch({type:"GET_SORT_VALUE",payload:userValue})
    }
    //update the filter values
    const updateFiltersValue = (event) =>{
      let name = event.target.name;
      let value = event.target.value;
      return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name,value}})
    }
    //to sort the product
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
     dispatch({type:"SORTING_PRODUCTS"})
    },[products,state.sorting_value,state.filters])
    //
    useEffect(()=>{
     dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    },[products])
    //
   return <FilterContext.Provider value={{...state , setGridView,setListView, sorting , updateFiltersValue}}>
     {children}
   </FilterContext.Provider>
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}