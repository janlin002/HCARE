import React, { useContext } from 'react';
import { contextApi } from '../Redux/Reducer';
import { Button } from 'react-bootstrap';
import { REMOVE_ITEM } from '../Redux/Action/actionType';

function Checkout() {
  const { item, removeId, removeIdDispatch } = useContext(contextApi);
  const removeItemId = item.cartItem;
  const removeIdChange = removeId;
  return (
    <div>
      <div className="container">
        <h3 className="text-center">購物車</h3>
        <div className="row d-flex justify-content-center">
          <div
            className="col-sm-8 d-flex justify-content-around text-center"
            style={{ border: '1px solid black' }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <h4>品名</h4>
                  </th>
                  <th scope="col">
                    <h4>價格</h4>
                  </th>
                  <th scope="col">
                    <h4>數量</h4>
                  </th>
                  <th scope="col">
                    <h4>刪除</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {removeItemId.map((item, key) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>1個</td>
                    <td>
                      <Button
                        variant="btn btn-outline-danger btn-sm"
                        onClick={() => {
                          const removeItem = removeItemId.splice(key, 1);
                          removeIdDispatch({
                            type: REMOVE_ITEM,
                            removeIdChange: removeItemId,
                          });
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
