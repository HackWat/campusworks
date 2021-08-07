import React from "react";
import "./homepage.css";

function Founders() {
  return (
    <div className="container-fluid my-3 text-dark">
      <div classname="row heading text-left">
        <h2 className="ml-5 text-light">FOUNDERS</h2>
      </div>
      <div className="row viewers">
        <div className="card col-lg-2 col-md-4 col-sm-8">
            <img src="./images/Group 3646.svg" alt="Prabhav"></img>
          <div className="card-body">
            <h5 className="card-title">Prabhav Khera</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-lg-2 col-md-4 col-sm-8 offset-md-1">
        <img src="./images/DEEPAM.svg" alt="Deepam"></img>
          <div className="card-body">
            <h5 className="card-title">Deepam</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-lg-2 col-md-4 col-sm-8 offset-md-1">
        <img src="./images/DEEPAM.svg" alt="Tanmay"></img>
          <div className="card-body">
            <h5 className="card-title">Tanmay Pilla</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-lg-2 col-md-4 col-sm-8 offset-md-1">
        <img src="./images/KRISH.svg" alt="Krish"></img>
          <div className="card-body">
            <h5 className="card-title">Krish Rai</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
