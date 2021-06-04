import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/index.scss';

//Component
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Carousels from './Component/Carousels';
import MainPage from './Component/Front/MainPage/MainPage';
import {ProductType} from './Redux/Reducer';
import { SendItemIndex } from './Redux/Reducer'
import { AddToCart } from './Redux/Reducer';
import {RemoveItem} from './Redux/Reducer';
import Product from './Component/Front/Products/ProductLayout';
import BrandLayout from './Component/Front/Brand/BrandLayout';
import MoreInfo from './Component/Front/Products/MoreInfo'

function App() {
  return (
    <div>
      <RemoveItem>
      <AddToCart>
      <SendItemIndex>
      <ProductType>
        <Router>
          <Navbar />
          <Carousels />
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/product" exact component={Product}></Route>
            <Route path="/brand" exact component={BrandLayout}></Route>
            <Route path="/moreinfo" exact component={MoreInfo}></Route>
          </Switch>
          <Footer />
        </Router>
      </ProductType>
      </SendItemIndex>
      </AddToCart>
      </RemoveItem>
    </div>
  );
}

export default App;