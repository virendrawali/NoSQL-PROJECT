import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Withdraw from "./Withdraw";
import Pay from "./Pay";

import "./App.css";
import Transaction from "./Transactions";
import UserProfile from "./UserProfile"

class App extends Component {
  render() {
    return (

      <>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Withdraw" component={Withdraw} />
          <Route exact path="/Pay" component={Pay} />
          <Route exact path="/Transactions" component={Transaction} />
          <Route exact path="/UserProfile" component={UserProfile} />
          {/*<Footer />*/}
        </Router>
      </>
    );
  }
}

export default App;
