import React, {useContext} from 'react';

//Component
import ProductCarousel from './ProductCarousel';
import { CHANGE_PRODUCT } from '../../../Redux/Action/actionType';
import { changeProductType } from '../../../Redux/Reducer';

function Recommend() {
    const {dispatch} = useContext(changeProductType);
  return (
    <div>
      <div className="container productRecommend">
        <h3 className="text-center p-5">精選好物推薦</h3>
        <div className="row">
          <div className="productRecommend">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  onClick={()=>dispatch({type:CHANGE_PRODUCT, products: 'home'})}
                >
                  沙發/椅子/桌子
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={()=>dispatch({type:CHANGE_PRODUCT, products: 'profile'})}
                >
                  盆栽/植物
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  onClick={()=>dispatch({type:CHANGE_PRODUCT, products: 'content'})}
                >
                  廚房用品
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <ProductCarousel />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ProductCarousel />
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <ProductCarousel />
              </div>
            </div>
          </div>
        </div>
        <hr className="hrLine mt-5" />
      </div>
    </div>
  );
}

export default Recommend;
