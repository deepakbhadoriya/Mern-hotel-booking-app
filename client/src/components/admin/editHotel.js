import React, { Component } from "react";
import axios from "axios";

class EditHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: null,
      hotelDescription: null,
      imgurl: null,
      rating: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/hotels/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          hotelName: res.data.hotelName,
          hotelDescription: res.data.hotelDescription,
          imgurl: res.data.imgurl,
          rating: res.data.rating
        })
      );
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
    console.log(this.state.hotelDescription);
    console.log(this.state.imgurl);
    console.log(this.state.rating);

    console.log(hoteldata);

    axios
      .post(
        `http://localhost:5000/api/hotels/update/${this.props.match.params.id}`,
        hoteldata
      )
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
            UPDATE HOTEL
          </button>
        </form>
      </div>
    );
  }
}
export default EditHotel;
