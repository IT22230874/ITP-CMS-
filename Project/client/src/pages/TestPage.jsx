import React from "react";
import AddItemForm from "../components/Forms/AddItemForm";
import AddMachineryForm from "../components/Forms/AddMachineryForm";
import AddProjectForm from "../components/Forms/AddProjectForm";
import AddEmployeeForm from "../components/Forms/AddEmployeeForm";
import AddRentForm from "../components/Forms/AddRentForm";
import AddTransactionForm from "../components/Forms/AddTransactionForm";
import Drawer from "../components/SideNavBar/SideNavBar";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import TopBar from "../components/TopBar/TopBar";
import ProfileCard from "../components/Profile/ProfileCard";
import NotificationPanel from "../components/NotificationPanel/NotificationPanel";
import FilterBar from "../components/FilterBar/FilterBar";
import "../styles/pages/testPage.css"


function TestPage() {
  return (
    <div className="container">
      <div className="centered">
        <FilterBar /> {/* Display FilterBar component */}
      </div>
    </div>
  );
}

export default TestPage;
