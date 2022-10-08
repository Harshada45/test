import React from "react";

function Footer() {
  return (
    <div>
      <div className="footerimg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <h5 className="text-justify">Contact Us</h5>
              <address className="text-justify mt-4">
                Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620
                Celeste Slater 606-3727 Ullamcorper. Street (372) 587-2335
              </address>
            </div>
            <div className="col-md-4 mt-5">
              <h5>Follow us</h5>
              <div className="row mx-auto">
                <div className="col-md-1 socialicon ml-5">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-quora" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <h5 className="text-justify pl-4">Head Office</h5>
              <div className="d-flex">
                <div>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-bus" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers .
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerbackground p-2">
          <p className="">@2021 All Right Reserved.Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
