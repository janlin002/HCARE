import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ADD_TO_CART } from '../../../Redux/Action/actionType';
import { contextApi } from '../../../Redux/Reducer';

function AddToCartButton(props) {
  const { itemId } = useContext(contextApi);
  const { item, itemDispatch } = useContext(contextApi);
  const addItem = item.cartItem;
  return (
    <div>
      <Button
        variant="btn btn-outline-dark btn-sm m-1"
        onClick={() => {
          const addItemId = addItem.push(props.items);
          itemDispatch({ type: ADD_TO_CART, item: addItem });
        }}
      >
        <i className="fas fa-cart-plus"></i>加到購物車
      </Button>
    </div>
  );
}
export default AddToCartButton;
