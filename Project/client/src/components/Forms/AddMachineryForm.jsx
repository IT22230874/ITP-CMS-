import React, { useState } from "react";
import "../../styles/forms/forms.css";

function AddMachineryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    machineName: "",
    condition: "",
    model: "",
    manufacturer: "",
    purchaseDate: "",
    category: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      machineName: "",
      condition: "",
      model: "",
      manufacturer: "",
      purchaseDate: "",
      category: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="machineName">Machine Name:</label>
        <input
          type="text"
          id="machineName"
          value={formData.machineName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="condition">Condition:</label>
        <input
          type="text"
          id="condition"
          value={formData.condition}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturer">Manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="purchaseDate">Purchase Date:</label>
        <input
          type="date"
          id="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <button className="button" type="submit">
        Add Machinery
      </button>
    </form>
  );
}

export default AddMachineryForm;
