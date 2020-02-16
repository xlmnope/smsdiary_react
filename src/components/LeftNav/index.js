
import React from "react";
import "./style.css";

function LeftNav (props){
  return(
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <img src="https://mindbodymoms.com/wp-content/uploads/2018/06/Your-Logo-here.png" alt="logo" className="logo"/>
        </li>
      </ul>
    </div>
  </nav>

  )
}


export default LeftNav;


