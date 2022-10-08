import React from "react";
import cardthree from "../images/card3.jpg";
import cardfour from "../images/card4.jpg";
import { Link } from "react-router-dom";
import "./Style.css";

function Cards() {
  return (
    <div>
      <div className="container ">
        <div className="row mt-5 mb-5">
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardfour}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardthree}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardfour}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
