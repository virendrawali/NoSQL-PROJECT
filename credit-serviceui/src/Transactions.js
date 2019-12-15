import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Button, Table } from "react-bootstrap";

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }
  getTransactions = () => {
    let rdata = {
      email: localStorage.getItem("currentUser")
    };
    axios
      .post("http://127.0.0.1:5000/getTransactions", rdata)
      .then(response => {
        debugger;
        this.setState({
          transactions: response.data
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentWillMount() {
    this.getTransactions();
  }
  render() {
    const trans = this.state.transactions.map(r => (
      <tr>
        <td>{r.amount}</td>
        <td>{r.action}</td>
      </tr>
    ));
    return (
      <div class="d-flex" id="wrapper">
        <Sidebar />
        <div className="container py-5">
          <div className="row">
            <h2>Your Tranactions</h2>
            <div className="col-md-12">
              <Table striped bordered hover size="sm">
                <tr>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
                {trans}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Transaction;
