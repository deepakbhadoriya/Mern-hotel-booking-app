import React, { useContext, useEffect, useRef } from "react";
import HotelContext from "../../context/hotel/hotelContext";
import { Link } from "react-router-dom";

const HotelList = () => {
  const hotelContext = useContext(HotelContext);
  const { getAllHotels, hotels, deleteHotel } = hotelContext;

  getAllHotels();

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getAllHotels();
    }
  });

  const hotelLi = hotels.map((item, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.hotelName}</td>
      <td>{item.rating}</td>
      <td>
        <Link to={`/edithotel/${item._id}`}>
          <button className="btn btn-primary mx-3">EDIT</button>
        </Link>
        <button
          className="btn btn-danger mx-3"
          onClick={() => deleteHotel(item._id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <Link to="/add">
        <button className="btn btn-block btn-success btn-lg my-5">
          ADD NEW Hotel
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hotel Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>{hotelLi}</tbody>
      </table>
    </div>
  );
};

export default HotelList;
