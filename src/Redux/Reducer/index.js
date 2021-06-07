import React, { useReducer } from 'react';
import {
  CHANGE_PRODUCT,
  SEND_ITEM_INDEX,
  ADD_TO_CART,
  REMOVE_ITEM,
} from '../Action/actionType';

const initialState = {
  cartItem: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT:
      return action.products;
    case SEND_ITEM_INDEX:
      return action.itemId;
    case ADD_TO_CART: {
      const { cartItem } = state;
      return {
        cartItem: [...cartItem],
      };
    }
    case REMOVE_ITEM: {
      const { cartItem } = state;
      return {
        cartItem: [...cartItem],
      };
    }
    default:
      return state;
  }
};

export const contextApi = React.createContext({});
export const ContextApi = (props) =>{
  const [products, productDispatch] = useReducer(reducer, 'home');
  const [itemId, itemIdDispatch] = useReducer(reducer, '0');
  const [item, itemDispatch] = useReducer(reducer, initialState);
  const [removeId, removeIdDispatch] = useReducer(reducer, initialState);
  const value= {
    products,
    productDispatch,
    itemId,
    itemIdDispatch,
    item,
    itemDispatch,
    removeId,
    removeIdDispatch
  }
  return (
    <contextApi.Provider value={value}>
      {props.children}
    </contextApi.Provider>
  )
}

