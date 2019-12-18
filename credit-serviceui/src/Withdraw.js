import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Button } from "react-bootstrap";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      firstName: "",
      lastName: ""
    };
  }

  handleAmountChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.withdraw();
  };
  withdraw() {
    debugger;
    let rdata = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      action: "withdraw",
      email: localStorage.getItem("currentUser"),
      amount: parseInt(this.state.amount)
    };
    axios
      .post("http://silo.cs.indiana.edu:52473/updateData", rdata)
      .then(response => {
        axios
          .post("http://silo.cs.indiana.edu:52473/addTransaction", rdata)
          .then(response => {
            window.location.href = "/Dashboard";
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPersonalData() {
    axios({
      method: "post",
      url: "http://silo.cs.indiana.edu:52473/getPersonalData",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: { email: localStorage.getItem("currentUser") }
    })
      .then(response => {
        this.setState({
          firstName: response.data["firstname"],
          lastName: response.data["lastname"]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.getPersonalData();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div class="d-flex" id="wrapper">
            <Sidebar />
            <div className="container py-5">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center text-white mb-4">
                    Bootstrap 4 Login Form
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mx-auto">
                      <div className="card rounded-0">
                        <div className="card-header">
                          <h3 className="mb-0">Withdraw Money</h3>
                        </div>
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="uname1">Enter Amount</label>
                            <input
                              type="text"
                              value={this.state.amount}
                              onChange={this.handleAmountChange}
                              className="form-control form-control-lg rounded-0"
                              name="uname1"
                              id="uname1"
                              required
                            />
                            <div className="invalid-feedback">
                              Oops, you missed this one.
                            </div>
                          </div>
                          <div>
                            <label className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                              />
                              <span className="custom-control-indicator" />
                              <span className="custom-control-description small text-dark">
                                Please enter correct amount
                              </span>
                            </label>
                          </div>
                          <Button
                            className="btn btn-success btn-lg float-right"
                            id="btnSubmit"
                            type="submit"
                            // onClick={this.withdraw_new.bind(this)}
                          >
                            Withdraw
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Withdraw;
