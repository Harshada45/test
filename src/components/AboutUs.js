import React from "react";
import "./Style.css";
import adminlogo from "../images/admin-new.png";

function AboutUS() {
  return (
    <div>
      <div className="viewbackimg ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 white-text text-center text-md-left mt-xl-5 fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h1 className="font-weight-bold mt-sm-5">
                  Make purchases with our app
                </h1>

                <h6 className="pt-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae iste.
                </h6>
                <a className="btn btn-info">Know More</a>
              </div>

              <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight">
                <img src={adminlogo} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* three cards */}
      <div className="">
        <div className="card-group">
          <div className="card firstcard">
            <div className="card-body">
              <h5 className="card-title">Card One</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card secondcard">
            <div className="card-body">
              <h5 className="card-title">Card Two</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This card has supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
              </p>
            </div>
          </div>
          <div className="card thirdcard">
            <div className="card-body">
              <h5 className="card-title">Card Three</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This card has supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
