import React, { Component } from "react";
import axios from "axios";

class AddHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: null,
      hotelDescription: "",
      imgurl:
        "https://img.freepik.com/free-vector/coloured-flat-design-hotel-building_23-2148202442.jpg?size=338&ext=jpg",
      rating: null
    };
  }

  onChangehotelDescription = e => {
    this.setState({
      hotelDescription: e.target.value
    });
  };

  onChangehotelName = e => {
    this.setState({
      hotelName: e.target.value
    });
  };

  onChangeimgurl = e => {
    this.setState({
      imgurl: e.target.value
    });
  };

  onChangerating = e => {
    this.setState({
      rating: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const hoteldata = {
      hotelName: this.state.hotelName,
      hotelDescription: this.state.hotelDescription,
      imgurl: this.state.imgurl,
      rating: this.state.rating
    };

    console.log(this.state.hotelName);

    axios
      .post("http://localhost:5000/api/hotels/add", hoteldata)
      .then(res => console.log(res.data));

    window.location = "http://localhost:3000/admin";
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Hotel Name</label>
              <input
                type="text"
                onChange={this.onChangehotelName}
                value={this.state.hotelName}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputPassword4">Img Url</label>
              <input
                type="text"
                className="form-control"
                onChange={this.onChangeimgurl}
                value={this.state.imgurl}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              style={{ height: "100px" }}
              onChange={this.onChangehotelDescription}
              value={this.state.hotelDescription}
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Rating</label>
            <input
              type="number"
              onChange={this.onChangerating}
              value={this.state.rating}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD HOTEL
          </button>
        </form>
      </div>
    );
  }
}
export default AddHotel;
