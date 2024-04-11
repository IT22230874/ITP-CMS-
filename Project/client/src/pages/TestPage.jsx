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


function TestPage() {

  const notifications = [
    {
      message: "New message received",
      sender: "John Doe",
      date: "2024-04-12"
    },
    {
      message: "Reminder: Meeting tomorrow",
      sender: "Alice Smith",
      date: "2024-04-11"
    },
    {
      message: "You have a new task assigned",
      sender: "Bob Johnson",
      date: "2024-04-10"
    }
  ];

  return (
    <div >
      <NotificationPanel notifications={notifications}/>
    </div>
  );
}

export default TestPage;
