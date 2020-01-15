import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HotelContext from "../context/hotel/hotelContext";
import HotelMap from "./user/hotelsmap";
import Navbar from "./navbar";
import Hotel from "./user/hotel";
import NotFound from "./notFound";
import HotelList from "./admin/HotelList";
import AddHotel from "./admin/addHotel";
import EditHotel from "./admin/editHotel";

const Home = () => {
  const hotelContext = useContext(HotelContext);
  const { getAllHotels } = hotelContext;

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getAllHotels();
    }
  });
 
  

  return (
    <Router>
      {" "}
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HotelMap} />
          <Route exact path="/hotel/:hid" component={Hotel} />
          <Route exact path="/admin" component={HotelList} />
          <Route exact path="/add" component={AddHotel} />
          <Route exact path="/edithotel/:id" component={EditHotel} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
