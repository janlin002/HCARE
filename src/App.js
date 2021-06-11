import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/index.scss';

//Component
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Carousels from './Component/Carousels';
import MainPage from './Component/Front/MainPage/MainPage';
import Product from './Component/Front/Products/ProductLayout';
import BrandLayout from './Component/Front/Brand/BrandLayout';
import MoreInfo from './Component/Front/Products/MoreInfo';
import { ContextApi } from './Redux/Reducer/index';
import Checkout from './Component/Checkout';

function App() {
  return (
    <div>
      <ContextApi>
        <Router>
          <Navbar />
          <Carousels />
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/product" exact component={Product}></Route>
            <Route path="/brand" exact component={BrandLayout}></Route>
            <Route path="/moreinfo" exact component={MoreInfo}></Route>
            <Route path="/checkout" exact component={Checkout}></Route>
          </Switch>
          <Footer />
        </Router>
      </ContextApi>
    </div>
  );
}

export default App;
