import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sideNavBar/sideNavBar.css"; 

function SideNavBar({ items }) {
  const position = localStorage.getItem("position");

  return (
    <div className="side-nav">
      <ul>     
        {position === "inventory manager" && (
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        )}
        {position === "project manager" && (
          <li>
            <Link to="/project">Projects</Link>
          </li>
        )}
        {position === "employee manager" && (
          <li>
            <Link to="/employee">Employees</Link>
          </li>
        )}
        {position === "finance manager" && (
          <li>
            <Link to="/finance">Finance</Link>
          </li>
        )}
        {position === "rent manager" && (
          <li>
            <Link to="/rent">Rents</Link>
          </li>
        )} 
         {position === "tender manager" && (
          <li>
            <Link to="/tender">Tender</Link>
          </li>
        )} 
        {position === "package manager" && (
          <li>
            <Link to="/packages">Packages</Link>
          </li>
        )} 
        {position === "client manager" && (
          <li>
            <Link to="/clients">Clients</Link>
          </li>
        )}                     
      </ul>
    </div>
  );
}

export default SideNavBar;
