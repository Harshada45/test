import React from "react";
import "./Style.css";
import calenderimg from "../images/Calendar2.jpg";
import middleimg from "../images/middlecard1.jpg";
import middleimgtwo from "../images/middlecard2.jpg";
import middleimgthree from "../images/middlecard3.jpg";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import { Link } from "react-router-dom";

function DeloitteSection() {
  return (
    <div>
      <div className="bggray">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 mt-4 mb-5">
              <h4 className="mb-4 paracolor">Lorem ipsum</h4>
              <div className="card roundcircle">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="calenderpic float-left mt-4 mr-5 ml-3">
                      <img src={one} />
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
                <hr className="ml-3 mr-3"></hr>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="calenderpic float-left mt-3 mr-5 ml-3">
                      <img src={middleimg} />
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to adzditional content.
                    </p>
                  </div>
                </div>
                <hr className="ml-3 mr-3"></hr>
                <div className="row mb-4">
                  <div className="col-md-4 mb-2">
                    <div className="calenderpic float-left mt-3 mr-5 ml-3">
                      <img src={two} />
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 ">
              <h4 className="pb-3 paracolor">Lorem ipsum</h4>
              <div className="card roundcircle mb-4">
                <div className="row ">
                  <div className="col-md-4 mb-5 p-3">
                    <div className="calenderimg float-left mt-4 mr-5 ml-3">
                      <img src={calenderimg} />
                    </div>
                  </div>
                  <div className="col-md-7 pt-3 ml-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.below as a natural
                      lead-in to additional content
                    </p>
                    <p className="pt-4">
                      <Link to="">Register Now</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card roundcircle">
                <div className="row ">
                  <div className="col-md-4 mb-5 p-3">
                    <div className="calenderimg float-left mt-4 mr-5 ml-3">
                      <img src={calenderimg} />
                    </div>
                  </div>
                  <div className="col-md-7 pt-3 ml-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p className="pt-4">
                      <Link to="">Register Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeloitteSection;
