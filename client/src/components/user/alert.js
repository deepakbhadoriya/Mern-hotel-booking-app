import React from "react";

const Alert = ({ type }) => {
  if (type === "book") {
    return (
      <div className="alert alert-success my-3" role="alert">
        <strong>Booked!</strong> You successfully booked your hotel.
      </div>
    );
  } else if (type === "draft") {
    return (
      <div className="alert alert-info my-3" role="alert">
        You have save the hotel in draft
      </div>
    );
  } 
  else if (type === "auth") {
    return (
      <div className="alert alert-danger my-3" role="alert">
        Credential are not Correct !!!!
      </div>
    );
  }
  else {
    return (
      null
    );
  }
};

export default Alert;
