import React, { useContext, useEffect, useState, useRef } from "react";
import HotelContext from "../../context/hotel/hotelContext";
import { Link } from "react-router-dom";
import Alert from "./alert";

const Hotel = ({ match }) => {
  const hotelContext = useContext(HotelContext);
  const { hotel, getHotel, getBooking, getDraft } = hotelContext;

  getHotel(match.params.hid);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getHotel(match.params.hid);
    }
  });

  const {
    _id,
    draft,
    booking,
    views,
    hotelName,
    hotelDescription,
    imgurl
  } = hotel;

  const bookClick = () => {
    getBooking(_id);
    setalertType("book");
    setInterval(() => {
      setalertType("");
    }, 4000);
  };

  const draftClick = () => {
    getDraft(_id);
    setalertType("draft");
    setInterval(() => {
      setalertType("");
    }, 4000);
  };

  const [alertType, setalertType] = useState("");

  return (
    <div>
      <div className="row ">
        <div className="col-3">
          <Link to="/">
            <button className="btn btn-primary my-4">Back to Hotel List</button>
          </Link>
        </div>
        <div className="col-6">
          <Alert type={alertType} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12 cardBack px-5 py-5 ">
          <div className="col-md-5" style={{ float: "left" }}>
            <img className="hotelImg" alt="" src={imgurl}></img>
          </div>
          <div className="col-md-6" style={{ float: "left" }}>
            <h2>{hotelName}</h2>
            <p>
              {hotelDescription}
              <br />
              <h5>
                This is static Hotel Description. Here you can book hotel and
                make draft booking
              </h5>
              <ul>
                <li>Best in class pool</li>
                <li>Premium Lounge</li>
                <li>Indoor Gym</li>
                <li>Free Breakfast</li>
                <li>Free parking</li>
                <li>Free wifi</li>
              </ul>
            </p>
            <button className="btn mr-2 btn-dark">VIEWS {views} </button>
            <button className="btn mr-2 btn-dark">DRAFT {draft} </button>
            <button className="btn mr-2 btn-dark">BOOKING {booking} </button>
            <br />
            <button
              style={{ float: "left" }}
              className="btn btn-lg mt-5 mr-5 px-5 btn-danger"
              onClick={bookClick}
            >
              BOOK
            </button>
            <button
              style={{ float: "left" }}
              className="btn btn-lg mt-5 mr-5 px-5 btn-danger"
              onClick={draftClick}
            >
              DRAFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
