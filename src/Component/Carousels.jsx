import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carousels() {
  return (
    <div>
      <div className="container">
        <Carousel>
          <Carousel.Item style={{maxHeight:'450px'}}>
            <img
              className="d-block w-100 test"
              src="https://images.unsplash.com/photo-1567712176243-5d8e90fba89b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{maxHeight:'450px'}}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1594031245755-1ac99bbc7a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{maxHeight:'450px'}}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1523198780259-41f275ab6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <marquee behavior="behavior" width="auto" loop="2" className="p-3"><h4>防疫公約：1.每日進行量體溫，出門配戴口罩 2.勤奮洗手、酒精消毒。台灣加油！</h4></marquee>
        <hr className="hrLine" />
      </div>
    </div>
  );
}
export default Carousels;
