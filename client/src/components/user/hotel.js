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
    <div className="row cardWidth">
      <div className="col-3">
        <Link to="/">
          <button className="btn btn-primary my-4">Back to Hotel List</button>
        </Link>
      </div>
      <div className="col-6">
        <Alert type={alertType} />
      </div>

      <div className="row">
        <div className="col-12 cardBack px-5 py-5">
          <div className="col-sm-6" style={{ float: "left" }}>
            <img className="hotelImg" alt="" src={imgurl}></img>
          </div>
          <div className="col-sm-6  " style={{ float: "left" }}>
            <h2>{hotelName}</h2>
            <p>
              {hotelDescription}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <button className="btn mr-2 btn-dark">VIEWS {views} </button>
            <button className="btn mr-2 btn-dark">DRAFT {draft} </button>
            <button className="btn mr-2 btn-dark">BOOKING {booking} </button>
            <br />
            <button
              className="btn btn-lg mt-5 mr-5 px-5 btn-danger"
              onClick={bookClick}
            >
              BOOK
            </button>
            <button
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
