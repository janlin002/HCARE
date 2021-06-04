import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MoreInfo() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            <Link to="/moreinfo">
              <Button className="mt-5 m-2" variant="btn btn-outline-primary btn-sm">
                <i className="fas fa-book-open"></i>查看更多資訊
              </Button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
