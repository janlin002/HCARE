import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ADD_TO_CART } from '../../../Redux/Action/actionType';
import _ from 'lodash';
import { contextApi } from '../../../Redux/Reducer';

function Offcanvas() {
  const { itemId } = useContext(contextApi);
  const { item, itemDispatch }= useContext(contextApi);
  const addItem = item.cartItem;
  return (
    <div>
      <img src={itemId.image} className="img-fluid" alt="" />
      <h1 className="pt-3">{itemId.name}</h1>
      <div style={{ fontSize: '20px' }}>{itemId.info}</div>
      <h2 className="pb-3 pt-3">${itemId.price}</h2>
      <div style={{ fontSize: '20px' }}>庫存:{itemId.stock}</div>
      <div style={{ fontSize: '20px' }}>型號:{itemId.modal}</div>
      <div className="text-center d-flex justify-content-center">
        {/* <MoreInfo/> */}
        
        <Button
          className="mt-5 m-2"
          variant="btn btn-outline-danger btn-sm"
          data-bs-dismiss="offcanvas"
          onClick={() => {
            const addItemId = addItem.push(itemId);
            itemDispatch({ type: ADD_TO_CART, item: addItem });
          }}
        >
          <i className="fas fa-cart-plus"></i>加入購物車
        </Button>
      </div>
    </div>
  );
}
export default Offcanvas;
