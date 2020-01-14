import React, { useContext, useEffect, useRef } from "react";
import HotelContext from "../../context/hotel/hotelContext";
import HotelItem from "./hotelItem";

const HotelMap = () => {
  const hotelContext = useContext(HotelContext);
  const { hotels, getAllHotels } = hotelContext;

  getAllHotels();

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getAllHotels();
    }
  });

  const hotelItem = hotels.map((item, index) => (
    <div key={index} className="col-md-3 my-3 ">
      <HotelItem hotels={item}></HotelItem>
    </div>
  ));

  return <div className="row row-eq-height cardWidth">{hotelItem}</div>;
};

export default HotelMap;
