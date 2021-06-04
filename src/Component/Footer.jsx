import React from 'react';
import { Link } from 'react-router-dom';

//Component
import AboutUs from './Front/MainPage/AboutUs';

function Footer() {
  return (
    <div>
      <AboutUs />
      <div className="container text-center">
        <div className="row">
          <div className="text-white footerIcon">
            <Link className="NavLink" to="/product" href="#">
              首頁
            </Link>
            <Link className="NavLink" to="/product">
              產品
            </Link>
            <Link className="NavLink" to="/brand">
              品牌介紹
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
