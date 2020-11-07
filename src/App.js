import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/index";
import PrivateRoute from "./Components/PrivateRoute";

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };

  componentDidMount() {
    axios
      .get("https://fake-api-ahmed.herokuapp.com/v1/user/info")
      .then((res) => {
        this.handleLogin();
      });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute isAuthenticated={isAuthenticated} exact path="/">
              <Home handleLogout={this.handleLogout} />
            </PrivateRoute>

            <Route path="/login" exact>
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route path="/Register" exact>
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
