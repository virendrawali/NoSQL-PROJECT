import React, { Component } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";
import ReactTypingEffect from 'react-typing-effect';
import  "./App"


export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      location: ""
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick = id => {
    this.setState({ [id]: true });
  };

  handleChange = event => {
    this.setState({ location: event.target.value });
    ls.set("city", event.target.value);
  };

  componentDidMount() {

        ls.remove("city");

    console.log(ls);
  }
  render() {
    return (
      <>
        <div id="style-1" style={{ overflowY:'scroll'}} >
          <header className="masthead text-white text-center"  style={{backgroundImage:"../img/credit1.jpeg"}}>
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row">
                           <div className="col-xl-8 mx-auto" style={{paddingRight:"180px"}}>
        <h1 style = {{textAlign:"center", paddingLeft:150}}>Credit Service System</h1>
                </div>
                </div>
              <div className="row">
              </div>
            </div>
          </header>
          <section className="features-icons bg-light text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-screen-desktop m-auto text-primary" />
                    </div>
                    <h3>Easy Apply</h3>
                    <p className="lead mb-0">
                      Apply easily and get approved fast!
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary" />
                    </div>
                    <h3>Fast Withdraw</h3>
                    <p className="lead mb-0">
                      Withdraw money as you want.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary" />
                    </div>
                    <h3>Easy Pay</h3>   
                    <p className="lead mb-0">
                    Pay conviniently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
          <footer className="footer bg-light" style={{ position: "relative", paddingBottom:"50px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <a href="#">About</a>
                    </li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item">
                      <a href="#">Contact</a>
                    </li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item">
                      <a href="#">Terms of Use</a>
                    </li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                  <p className="text-muted small mb-4 mb-lg-0">
                    © Credit Service 2019. All Rights Reserved.
                  </p>
                </div>
                <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="fab fa-facebook fa-2x fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="fab fa-twitter-square fa-2x fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-instagram fa-2x fa-fw" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          </section>
          </div>
      </>
    );
  }
}
