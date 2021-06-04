import React from 'react';
import { Carousel } from 'react-bootstrap';

function News() {
  return (
    <div>
      <div className="container pt-5 text-center">
        <h3>最新消息</h3>
        <div className="row pt-4">
          <Carousel>
            <Carousel.Item style={{ maxHeight: '350px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1518&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '350px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1518&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '350px' }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1518&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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
