import React from 'react';

//Component
import ProductCategories from './ProductCategories';
import Recommend from './Recommend';
import News from './News';

function MainPage() {
  return (
    <div>
      <Recommend />
      <News/>
      {/* <ProductCategories /> */}
    </div>
  );
}

export default MainPage;
