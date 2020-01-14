import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HotelContext from "../../context/hotel/hotelContext";
import HotelItem from "./hotelItem";
import HotelMap from "./hotelsmap";
import Navbar from "../navbar";
import Hotel from "./hotel";
import NotFound from "../notFound";

const User = () => {
  const hotelContext = useContext(HotelContext);
  const { hotels, getAllHotels } = hotelContext;

  useEffect(() => {
    getAllHotels();
  }, []);

  // const hotelItem = hotels.map((item, index) => (
  //   <div key={index} className="col-md-3 my-3 ">
  //     <HotelItem hotels={item}></HotelItem>
  //   </div>
  // ));

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={HotelMap} />
          <Route exact path="/hotel/:hid" component={Hotel} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default User;
