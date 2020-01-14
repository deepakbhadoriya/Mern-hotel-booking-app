import React, { useContext } from "react";
import HotelContext from "../../context/hotel/hotelContext";
import { Link } from "react-router-dom";

const HotelItem = props => {
  const hotelContext = useContext(HotelContext);
  const { getViews } = hotelContext;

  const {
    _id,
    draft,
    booking,
    views,
    hotelName,
    hotelDescription,
    imgurl
  } = props.hotels;

  const hid = _id;

  const bookClick = () => {
    getViews(_id);
    // setInterval(() => {
    //   getHotel(_id);
    // }, 200);
  };

  return (
    <div className="card cardBack" key={_id}>
      <img
        className="card-img-top"
        src={imgurl}
        width="50px"
        height="150px"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{hotelName}</h5>
        <p className="card-text">{hotelDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <center>
            Booking {booking}&nbsp;&nbsp; Draft {draft}&nbsp;&nbsp;
            <br /> Views : {views}
          </center>
        </li>
      </ul>
      <div className="card-body">
        <center>
          <Link to={`/hotel/${hid}`}>
            <p className="card-link btn btn-primary" onClick={bookClick}>
              BOOK
            </p>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default HotelItem;
