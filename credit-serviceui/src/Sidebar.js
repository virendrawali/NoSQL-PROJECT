import React, { Component } from "react";
import Dashboard from './Dashboard'
import { Link } from "react-router-dom";


class Sidebar extends Component {
    constructor(props) {
        super(props);
      }
      
    render() {
        return(
            <>
              <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="list-group list-group-flush" style={{height:700, width:300}}>
              <Link
                  to={{ pathname: "/Dashboard"}}
                >
                  <button class="list-group-item list-group-item-action bg-light">Dashboard</button>        
                 </Link>
                 <Link
                  to={{ pathname: "/Withdraw"}}
                >
                  <button class="list-group-item list-group-item-action bg-light">Withdraw</button>
                  </Link>
                  <Link
                  to={{ pathname: "/Pay"}}
                >
                  <button class="list-group-item list-group-item-action bg-light">Pay</button>
                  </Link>
                  <a href="#" class="list-group-item list-group-item-action bg-light">Transaction History</a>
                  <a href="#" class="list-group-item list-group-item-action bg-light">User Profile</a>
              </div>
              </div>        
   </>
        );
      } 
  }
  
  export default Sidebar;