import React from "react";

function Subscribe() {
  return (
    <div className="animatepic">
      <div className="container">
        <div className="row animatepic">
          <div className="col-md-6 mt-5">
            <h4 className="text-justify text-info">Subscribe</h4>
            <p className="text-justify">
              Create better websites with mobile-responsive templates,<br></br>
              seamless drag & drop and unlimited customization.
            </p>
            <div>
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Address"
                  />
                </div>
                <button type="submit" class="btn btn-primary mb-2 rounded-pill">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="subscription "></div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
