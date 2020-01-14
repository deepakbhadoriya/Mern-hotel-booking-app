import React from "react";
import "./App.css";
import HotelState from "./context/hotel/hotelState";
import Home from "./components/home";

function App() {
  return (
    <div className="App ">
      <HotelState>
        <Home />
      </HotelState>
    </div>
  );
}

export default App;
