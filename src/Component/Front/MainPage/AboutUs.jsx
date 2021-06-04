import React from 'react';

function AboutUs() {
  return (
    <div>
      <div className="container p-5">
        <div className="row text-center d-flex">
          <div className="d-flex justify-content-center">
          <h3 className="text-center p-2 smFade">加入社群</h3>
            <i className="fab fa-facebook-square p-2 fa-2x"></i>
            <i className="fab fa-instagram p-2 fa-2x"></i>
            <i className="fab fa-twitter p-2 fa-2x"></i>
            <i className="far fa-envelope p-2 fa-2x"></i>
            <i className="fab fa-youtube p-2 fa-2x"></i>
            <i className="fas fa-phone p-2 fa-2x"></i>
          </div>
        </div>
        <hr className="hrLine" />
      </div>
      
    </div>
  );
}

export default AboutUs;
