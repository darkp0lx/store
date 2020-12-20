import {useState} from 'react'
import initialState from '../initialState'
const useInitialState = () => {
  const [state,setState] =useState(initialState)
  const addToCart=payload =>{
    const exist=state.cart.find(item=>item.id==payload.id)
    if (exist){
      setState({
        ...state
      })
    }else{
      setState({
        ...state,
        cart:[...state.cart,payload]
      })
    }

  }
  const removeToCart=payload =>{
    setState({
      ...state,
      cart:state.cart.filter(items=>items.id!==payload.id)
    })
  }
  const addBuyer=(payload)=> {
    setState({
      ...state,
      buyer:[payload]
    })
  }
const addNewOrder=(payload)=> {
  setState({
    ...state,
    orders:[...state.orders,payload]
  })
}  
  return {
    addToCart,
    removeToCart,
    state,
    addBuyer
  }
}

export default useInitialState
