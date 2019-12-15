import React, { Component, PureComponent } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Sidebar from './Sidebar'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ls from "local-storage";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { Alert } from "react-bootstrap";

class Withdraw extends PureComponent {
    constructor(props) {
     // debugger;
      super(props);
      this.state = {
        amount:"", 
        firstName:"",
        lastName:"",     
      };
      this.withdraw = this.withdraw_new.bind(this);
      this.getPersonalData = this.getPersonalData.bind(this);
      this.addTransaction = this.addTransaction.bind(this);
    }

    handleAmountChange = event => {
        this.setState({
          amount: event.target.value
        });
      };

    withdraw_new()
    {
      debugger;
      return axios({
        method: "post",
        url: "http://127.0.0.1:5000/updateData",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {'email':localStorage.getItem('currentUser'), 'amount': parseInt(this.state.amount)}
        })
        .then((response) => {
          console.log(response['data'])
          //this.addTransaction.bind(this);
          this.addTransaction();
          //window.location.reload();
          window.location.href="/Dashboard"
        }).catch(err => {
          console.log(err);
        })
    }

    addTransaction()
    {
      debugger;
      console.log(this.state.firstName)
      console.log(this.state.lastName)
      return axios({
        method: "post",
        url: "http://127.0.0.1:5000/addTransaction",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {
          'email':localStorage.getItem('currentUser'), 
          'firstname': this.state.firstName,
          'lastname':this.state.lastname,
          'action':"withdraw", 
          'amount':parseInt(this.state.amount)
        }
        })
        .then((response) => {
          alert('transaction success')
        }).catch(err => {

        })
    }
  
    getPersonalData() {
      axios({
        method: "post",
        url: "http://127.0.0.1:5000/getPersonalData",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {'email':localStorage.getItem('currentUser')}
      })
        .then(response => {
            alert('Hello');
            console.log(response.data)
            this.setState({firstName:response['firstname'], lastname:response['lasname']})
        })
        .catch(err => {
          console.log(err);
        });
    }
  
  
    componentDidMount() {
      this.getPersonalData();  
    }
  
    render() {
        return(
            <>
            <div class="d-flex" id="wrapper">
                <Sidebar/>
            <div className="container py-5">
                <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card rounded-0">
                        <div className="card-header">
                            <h3 className="mb-0">Withdraw Money</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" id="formLogin" noValidate method="POST">
                            <div className="form-group">
                                <label htmlFor="uname1">Enter Amount</label>
                                <input type="text" value={this.state.amount} onChange={this.handleAmountChange} className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required />
                                <div className="invalid-feedback">Oops, you missed this one.</div>
                            </div>
                            <div>
                                <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <span className="custom-control-indicator" />
                                <span className="custom-control-description small text-dark">Please enter correct amount</span>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin" onClick={this.withdraw_new.bind(this)}>Withdraw</button>
                            </form>
                        </div>
                        </div>
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            </>
        );
      } 
  }
  
  export default Withdraw;