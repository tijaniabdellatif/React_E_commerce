import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {

  if(action.type===LOAD_PRODUCTS){

    return {
      ...state,
      allProducts:[...action.payload],
      filteredProducts:[...action.payload]
    }
  }

  if(action.type===SET_GRIDVIEW){

    return{
      ...state,
      gridView : true
    }
  }

  if(action.type === SET_LISTVIEW){

    return{
      ...state,
      gridView : false
    }
  }

  if(action.type === UPDATE_SORT){

    return{
        ...state,
         sort:action.payload
    }
  }

  
  if(action.type === SORT_PRODUCTS){

    const {sort,filteredProducts} = state;
    let tempProducts = [...filteredProducts];

    if(sort === 'price-lowest'){

      tempProducts = tempProducts.sort((curr,next) =>{

            return curr.price - next.price
      })
      
    }
    if(sort === 'price-highest'){

      tempProducts = tempProducts.sort((curr,next) =>{

        return next.price - curr.price
      })
    }
    if(sort === 'name-a'){

        tempProducts = tempProducts.sort((curr,next)=>{

          return curr.name.localeCompare(next.name);
        })
     
    }
    if(sort === 'name-z'){

     
      tempProducts = tempProducts.sort((curr,next)=>{

        return next.name.localeCompare(curr.name);
      })
   
    }

           return{
             ...state,
             filteredProducts:tempProducts
           }
  }
 
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
