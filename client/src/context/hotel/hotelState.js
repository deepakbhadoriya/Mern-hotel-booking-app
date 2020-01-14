import React, { useReducer } from "react";
import axios from "axios";
import HotelContext from "./hotelContext";
import HotelReducer from "./hotelReducer";
import { GET_ALL_HOTELS, GET_HOTEL } from "../types";

const HotelState = props => {
  const intitalState = {
    hotels: [],
    hotel: []
  };

  const [state, dispatch] = useReducer(HotelReducer, intitalState);

  //functions here

  //add draft

  const getDraft = id => {
    axios
      .put(`http://localhost:5000/api/hotels/draft/${id}`)
      .catch(err => console.log(err));
    //getHotel(id)
  };

  //add booking
  const getBooking = id => {
    axios
      .put(`http://localhost:5000/api/hotels/booking/${id}`)
      .catch(err => console.log(err));
  };

  //add views
  const getViews = id => {
    axios
      .put(`http://localhost:5000/api/hotels/views/${id}`)
      .catch(err => console.log(err));
  };

  //get all hotels
  const getAllHotels = () => {
    axios
      .get("http://localhost:5000/api/hotels")
      .then(response => {
        dispatch({ type: GET_ALL_HOTELS, payload: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  //get single hotel
  const getHotel = id => {
    axios
      .get(`http://localhost:5000/api/hotels/${id}`)
      .then(response => {
        dispatch({ type: GET_HOTEL, payload: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  //Delete hotel
  const deleteHotel = id => {
    axios
      .delete(`http://localhost:5000/api/hotels/${id}`)
      .catch(err => console.log(err));
  };

  return (
    <HotelContext.Provider
      value={{
        //value:state.value
        hotels: state.hotels,
        hotel: state.hotel,

        //function name
        getViews,
        getAllHotels,
        getHotel,
        getBooking,
        getDraft,
        deleteHotel
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelState;
