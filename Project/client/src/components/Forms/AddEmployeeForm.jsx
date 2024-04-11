import React, { useState } from "react";
import "../../styles/forms/forms.css"; 

function AddEmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    empName: "",
    role: "",
    contact: "",
    dob: "",
    address: "",
    joinedDate: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      empName: "",
      role: "",
      contact: "",
      dob: "",
      address: "",
      joinedDate: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="empName">Employee Name:</label>
        <input
          type="text"
          id="empName"
          value={formData.empName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="joinedDate">Joined Date:</label>
        <input
          type="date"
          id="joinedDate"
          value={formData.joinedDate}
          onChange={handleChange}
          required
        />
      </div>
      <button className="button" type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default AddEmployeeForm;
