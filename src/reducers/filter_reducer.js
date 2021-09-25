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

    let maxPrice = action.payload.map((prod) =>{

        return prod.price;
    })

    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      allProducts:[...action.payload],
      filteredProducts:[...action.payload],
      filters:{...state.filters,maxPrice:maxPrice,price:maxPrice}
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

  if(action.type === UPDATE_FILTERS){

    const {name,value} = action.payload;
    // dynamic value [name] : value
    return {...state,filters:{...state.filters,[name]:value}}
  }

  if(action.type === FILTER_PRODUCTS){

     const {allProducts} = state;
     const {text,company,category,colors,price,shipping} = state.filters;
     let tempProducts = [...allProducts];

    /**
     * Text filtering
     */

    if(text){
        tempProducts = tempProducts.filter((item) => {

               return item.name.toLowerCase().startsWith(text);
        })
      }

    /**
     * category
     */

      if(category !== "all") {

        tempProducts = tempProducts.filter((item) => {

          return item.category === category;
        })
      }


        /**
         * company
         */

        if (company !== 'all') {

          tempProducts = tempProducts.filter((item) => {

            return item.company === company;
          })
        }

        if(shipping){

          tempProducts = tempProducts.filter((product) => {

               return product.shipping === true;
          })
        }


        //price
        tempProducts = tempProducts.filter((product) => {

             return product.price <= price
        })




    return {...state,filteredProducts: tempProducts};
  }




  if(action.type===CLEAR_FILTERS)
  {

     return {...state,
      filters:{
        ...state.filters,
        text:'',
        company : 'all',
        category : 'all',
        colors:'all',
        price : state.filters.maxPrice,
        shipping : false
      }}


  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
