import React, { useState } from "react";
import CountUp from "react-countup";

function NumberCountSec() {
  return (
    <div>
      <div className="bggray mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={123} duration={5} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>

            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={15} duration={1} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={12} duration={1} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={123} duration={5} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondchart">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberCountSec;
