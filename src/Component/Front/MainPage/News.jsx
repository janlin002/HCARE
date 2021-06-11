import React from 'react';
import { Carousel } from 'react-bootstrap';

function News() {
  return (
    <div>
      <div className="container pt-5 text-center">
        <h3>最新消息</h3>
        <div className="row pt-4">
          <Carousel>
            <Carousel.Item style={{ maxHeight: '300px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1518&q=80"
                alt="First slide"
              />
              <Carousel.Caption className="text-dark">
                <h3>停止到貨付款</h3>
                <p>
                  因應疫情，停止到貨付款服務，一率改成信用卡線上付款  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '300px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1517208013238-c78ce0b0c313?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
                alt="Second slide"
              />

              <Carousel.Caption className="text-dark">
                <h3>停止到府組裝</h3>
                <p>因應疫情，所有傢俱型的產品停止到府組裝服務</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '300px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1552913854-49a97afdd90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80"
                alt="Third slide"
              />

              <Carousel.Caption className="text-dark">
                <h3>感謝防疫人員，一率免運費</h3>
                <p>
                  感謝醫護人員站在第一線守護大家健康，我們決定免去一切運費
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default News;
