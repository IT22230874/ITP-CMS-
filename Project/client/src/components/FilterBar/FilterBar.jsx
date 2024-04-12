
import React from "react";
import { FiFilter } from "react-icons/fi"; 
import "../../styles/FilterBar/filterBar.css"

function FilterBar() {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        <FiFilter className="filter-icon" /> {/* Use filter icon */}
        <div className="divider"></div>
        <div className="filter-by">Filter By</div>
        <div className="divider"></div>
        <select className="dropdown">
          <option value="option1">Opt 1</option>
          <option value="option2">Opt 2</option>
          <option value="option3">Opt 3</option>
        </select>
        <div className="divider"></div>
        <select className="dropdown">
          <option value="option1">Opt 1</option>
          <option value="option2">Opt 2</option>
          <option value="option3">Opt 3</option>
        </select>
        <div className="divider"></div>
        <select className="dropdown">
          <option value="option1">Opt 1</option>
          <option value="option2">Opt 2</option>
          <option value="option3">Opt 3</option>
        </select>
        <div className="divider"></div>
        <div className="reset-filter">Reset</div>
      </div>
    </div>
  );
}

export default FilterBar;


