import React from 'react';

function BrandLayout() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center pb-3">品牌介紹</h3>
        <div className="row">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5 jumbotronStyle">
              <h1 className="display-5 fw-bold">名稱由來</h1>
              <p className="col-md-8 fs-4">
                HCARE是希望可以是希望可以用心看待顧客的家，提供顧客最好的商品，讓顧客在使用之餘不用擔心是否安全!
              </p>
            </div>
            <h3 className="text-center pt-5 pb-5">ＨＣＡＲＥ價值觀</h3>
            <div>HCARE的理念起源於為大多數人提供價格實惠的家具家飾，而非僅為了少數人。透過將功能、品質、設計和價值結合在一起，而且始終秉持著永續要素，並透過設計、採購、包裝、配送與經營業務模式，在每一個環節都體現HCARE理念，實踐我們的願景：為大多數人創造更美好的生活。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandLayout;
