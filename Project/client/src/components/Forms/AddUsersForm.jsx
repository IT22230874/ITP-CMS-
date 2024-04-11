import React from "react";
import "../../styles/forms/AddUsers.css";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="form-group ">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="shorterinputs"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Tel:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            className="shorterinputs"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Position:</label>
        <input
          type="text"
          id="role"
          name="role"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">
        Add User
      </button>
    </form>
  );
}

export default Form;
