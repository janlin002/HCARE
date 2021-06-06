import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

import { changeProductType } from '../../../Redux/Reducer';
import { home, profile, content } from '../../../data';
import { addItemToCart } from '../../../Redux/Reducer';
import { ADD_TO_CART } from '../../../Redux/Action/actionType';

function ProductCarousel() {
  const { products } = useContext(changeProductType);
  const { item, dispatch } = useContext(addItemToCart);
  const addItem = item.cartItem;
  console.log(item.cartItem, 'reducer');
  if (products === 'home') {
    return (
      <div className="container">
        <div className="row text-center ">
          {home.map((item, key) => (
            <div className="col-lg-3 pt-5">
              <Card style={{ width: '18rem', borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    borderTopRightRadius: '20px',
                    borderTopLeftRadius: '20px',
                  }}
                />
                <Card.Body style={{ borderRadius: '20px' }}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>{item.title}</Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={() => {
                      addItem.push(item);
                      dispatch({ type: ADD_TO_CART, item: addItem });
                    }}
                  >
                    加到購物車
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (products === 'profile') {
    return (
      <div className="container">
        <div className="row text-center ">
          {profile.map((item, key) => (
            <div className="col-lg-3 pt-5">
              <Card style={{ width: '18rem', borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    borderTopRightRadius: '20px',
                    borderTopLeftRadius: '20px',
                  }}
                />
                <Card.Body style={{ borderRadius: '20px' }}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>{item.title}</Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={() => {
                      addItem.push(item);
                      dispatch({ type: ADD_TO_CART, item: addItem });
                    }}
                  >
                    加到購物車
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row text-center ">
          {content.map((item, key) => (
            <div className="col-lg-3 pt-5">
              <Card style={{ width: '18rem', borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    borderTopRightRadius: '20px',
                    borderTopLeftRadius: '20px',
                  }}
                />
                <Card.Body style={{ borderRadius: '20px' }}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>{item.title}</Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm "
                    onClick={() => {
                      addItem.push(item);
                      dispatch({ type: ADD_TO_CART, item: addItem });
                    }}
                  >
                    加到購物車
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCarousel;
