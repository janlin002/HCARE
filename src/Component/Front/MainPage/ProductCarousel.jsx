import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

import { changeProductType } from '../../../Redux/Reducer';
import { home, profile, content } from '../../../data';


function ProductCarousel() {
  const { products } = useContext(changeProductType);

  if (products === 'home') {
    return (
      <div className="container">
        <div className="row text-center ">
          {home.map((item, key) => (
            <div className="col-lg-3 pt-5">
              <Card style={{ width: '18rem', borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1586942593822-268ff3828458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}}
                />
                <Card.Body style={{borderRadius: '20px'}}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={() => console.log('加到購物車')}
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
                  src="https://images.unsplash.com/photo-1586942593822-268ff3828458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}}
                />
                <Card.Body style={{borderRadius: '20px'}}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={() => console.log('加到透悟車')}
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
                  src="https://images.unsplash.com/photo-1586942593822-268ff3828458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}}
                />
                <Card.Body style={{borderRadius: '20px'}}>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="btn btn-outline-dark btn-sm "
                    onClick={() => console.log('加到購物車')}
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
