import React, { useState, useContext } from 'react';
import { Button, Card, Dropdown } from 'react-bootstrap';
//Component
import type from '../../../data/type';
import Offcanvas from './Offcanvas';
import { SEND_ITEM_INDEX } from '../../../Redux/Action/actionType';
import AddToCartButton from './AddToCartButton';
import { contextApi } from '../../../Redux/Reducer';

function Product() {
  const [types, setType] = useState(type[0]);
  const products = types.product;
  const { itemIdDispatch } = useContext(contextApi);
  return (
    <div>
      <div className="container">
        <h3 className="text-center pb-3 smFade">選擇產品</h3>
        <div className="text-center smShow">
          <Dropdown>
            <Dropdown.Toggle variant="btn btn-outline-dark" id="dropdown-basic">
              選擇產品
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {type.map((item, key) => (
                <Dropdown.Item onClick={() => setType(item, key)}>
                  {item.id}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex justify-content-center smFade">
          {type.map((item) => (
            <div>
              <Button
                style={{ borderRadius: '50px', margin: '10px' }}
                variant="btn btn-outline-dark"
                onClick={() => {
                  setType(item);
                }}
              >
                {item.id}
              </Button>
            </div>
          ))}
        </div>
        <div className="row">
          {products.map((item, key) => (
            <div className="col-lg-3 text-center pb-3 pt-5">
              <Card style={{ borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.title}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-dark btn-sm m-1"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={() =>
                      itemIdDispatch({
                        type: SEND_ITEM_INDEX,
                        itemId: types.product[key],
                      })
                    }
                  >
                    <i className="fas fa-search-plus"></i>詳細內容
                  </button>
                  <AddToCartButton id={types.product} items={item}/>
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div className="offcanvas-header">
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <Offcanvas id={types.product} />
                    </div>
                  </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
