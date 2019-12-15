import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import Sidebar from './Sidebar'

class Pay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        amount:"", 
        firstname:"",
        lastname:"" ,
        isRedirect:false    
      };
      this.payAmount = this.payAmount.bind(this);
      this.getUser = this.getUser.bind(this);
      this.transactionHistory = this.transactionHistory.bind(this);
      this.redirect = this.redirect.bind(this);
    }

    handleAmountChange = event => {
        this.setState({
          amount: event.target.value
        });
      };
    
    redirect(){
      window.location.reload();
      window.location ="/Dashboard"
    }
        
    
    payAmount() {
      return axios({
        method: "put",
        url: "http://127.0.0.1:5000/payAmount",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {'email':localStorage.getItem('currentUser'), 'amount': this.state.amount}
      })
        .then(response => {
            console.log(response['data'])
            this.getUser();
            this.redirect();
        })
        .catch(err => {
          console.log(err);
        });
    }


    getUser() {
      return axios({
        method: "post",
        url: "http://127.0.0.1:5000/getPersonalData",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {'email':localStorage.getItem('currentUser')}
      })
        .then(response => {
            this.setState({firstname:response.data['firstname'], lastname:response.data['lastname']})
        })
        .catch(err => {
          console.log(err);
        });
    }

    transactionHistory() {
      alert(this.state.firstname, this.state.lastname)
      var postdata = {
        'firstname':this.state.firstname,
        'lastname':this.state.lastname,
        'action':'Pay',
        'amount':this.state.amount,
        'email':localStorage.getItem('currentUser')
      }
      return axios({
        method: "post",
        url: "http://127.0.0.1:5000/add_transaction",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: postdata
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
  
    componentWillMount() {
        this.payAmount();
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
                            <h3 className="mb-0">Pay Money</h3>
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
                            <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin" onClick={this.payAmount}>Pay</button>
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
  
  export default Pay;