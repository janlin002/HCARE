import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { REMOVE_ITEM } from '../Redux/Action/actionType';
import { contextApi } from '../Redux/Reducer';

function NavBar() {
  const { item } = useContext(contextApi);
  const { removeId, removeIdDispatch} = useContext(contextApi);
  const removeItemId = item.cartItem;
  const removeIdChange  = removeId;
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="mainLink">
              ＨＣＡＲＥ
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="NavLink" to="/product">
                產品
              </Link>
              <Link className="NavLink" to="/brand">
                品牌介紹
              </Link>
            </Nav>
            <div className="smFade d-flex">
              <i className="fas fa-user fa-2x"></i>
              <div className="dropdown">
                <button
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}
                >
                  <i className="fas fa-shopping-cart shopCartIcon fa-2x" />
                  <span className="numberIcon">{item.cartItem.length}</span>
                </button>
                <ul
                  className="dropdown-menu dropstart"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ minWidth: '300px' }}
                >
                  <h6 className="text-center">已選擇商品</h6>
                  <table className="table d-flex justify-content-around">
                    <tbody>
                      <tr>
                        <th scope="col">品名</th>
                        <th scope="col">價格</th>
                        <th scope="col">數量</th>
                        <th scope="col">刪除</th>
                      </tr>
                      {removeItemId.map((id, key) => (
                        <tr>
                          <th scope="col">{id.name}</th>
                          <th scope="col">${id.price}</th>
                          <th scope="col">1個</th>
                          <th scope="col">
                            <Button
                              variant="btn btn-outline-danger btn-sm"
                              onClick={() => {
                                const removeItem = removeItemId.splice(key, 1);
                                removeIdDispatch({
                                  type: REMOVE_ITEM, removeIdChange: removeItemId
                                });
                              }}
                              
                            >
                              <i className="fas fa-trash-alt"></i>
                            </Button>
                          </th>
                        </tr>
                      ))}
                      <Link className="d-flex justify-content-center NavLink">
                      <Button variant="btn btn-outline-dark bnt-sm">確認結帳</Button>
                      </Link>
                      
                    </tbody>
                  </table>
                </ul>
              </div>
            </div>
            <div className="smShow pb-2 pt-2">
              <Link className="NavLink" to="/brand">
                顧客資訊
              </Link>
            </div>
            <div className="smShow pt-2">
              <Link className="NavLink" to="/brand">
                購物車
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
