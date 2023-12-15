import React from "react";

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature } = props;
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${price} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {feature &&
            feature.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
        <button type="button" className={`btn btn-lg btn-block ${btnClass}`}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};


const TopMenu = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">
          Features
        </a>
        <a className="p-2 text-dark" href="#">
          Enterprise
        </a>
        <a className="p-2 text-dark" href="#">
          Support
        </a>
        <a className="p-2 text-dark" href="#">
          Pricing
        </a>
      </nav>
      <a className="btn btn-outline-primary" href="#">
        Sign up
      </a>
    </div>
  );
};




const PricingBox = () => {
  const featureBox2 = [
    "20 users included",
    "10 GB of storage",
    "Priority email support",
    "Help center access",
  ];

  return (
    <div className="card-deck mb-3 text-center">
      <Box
        feature={featureBox2}
        price="15"
        title="Pro"
        btnClass="btn-primary"
        btnTitle="Get started"
      />
    </div>
  );
};


