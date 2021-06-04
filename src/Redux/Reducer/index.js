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
      console.log('reducer')
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

export const changeProductType = React.createContext({});

export const ProductType = (props) => {
  const [products, dispatch] = useReducer(reducer, 'home');
  return (
    <changeProductType.Provider value={{ products, dispatch }}>
      {props.children}
    </changeProductType.Provider>
  );
};

export const sendItemIndexKey = React.createContext({});

export const SendItemIndex = (props) => {
  const [itemId, dispatch] = useReducer(reducer, '0');
  return (
    <sendItemIndexKey.Provider value={{ itemId, dispatch }}>
      {props.children}
    </sendItemIndexKey.Provider>
  );
};

export const addItemToCart = React.createContext({});

export const AddToCart = (props) => {
  const [item, dispatch] = useReducer(reducer, initialState);
  return (
    <addItemToCart.Provider value={{ item, dispatch }}>
      {props.children}
    </addItemToCart.Provider>
  );
};

export const removeItemFromCart = React.createContext({});

export const RemoveItem = (props) => {
  const [removeId, dispatch] = useReducer(reducer, initialState);
  return (
    <removeItemFromCart.Provider value={{ removeId, dispatch }}>
      {props.children}
    </removeItemFromCart.Provider>
  );
};
