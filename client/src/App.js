import React, { Component } from "react";
import "./App.css";
import HotelState from "./context/hotel/hotelState";
import Home from "./components/home";
import Alert from "./components/user/alert";
import "./form.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      token: false,
      alert: null
    };
  }

  clickLogin = e => {
    this.setState({
      login: e.target.value
    });
  };

  clickPassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.login === "admin123" && this.state.password === "admin123") {
      this.setState({ token: true });
    } else {
      this.setState({ alert: "auth" });
      setInterval(() => {
        this.setState({ alert: null });
      }, 3000);
    }
  };

  login = () => {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_184513.png"
              className="my-3"
              id="icon"
              alt="User Icon"
              style={{ height: "70px", width: "70px" }}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              onChange={this.clickLogin}
              name="login"
              value={this.state.login}
              placeholder="login"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              onChange={this.clickPassword}
              name="login"
              value={this.state.password}
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    );
  };

  home = () => {
    return (
      <HotelState>
        <Home />
      </HotelState>
    );
  };

  cRender = () => {
    if (this.state.token) {
      this.home();
    } else {
      this.login();
    }
  };

  render() {
    return (
      <div className="App ">
        <Alert type={this.state.alert} />
        {this.state.token ? this.home() : this.login()}
      </div>
    );
  }
}

export default App;
