import React, { useState } from "react";
import "../../styles/forms/forms.css"; 
import "../../styles/forms/addItemForm.css"; 

function AddItemForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({});
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget:</label>
        <input
          type="text"
          id="budget"
          name="budget"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="unit">Unit of Measure:</label>
        <select
          id="unit"
          name="unit"
          required
          onChange={handleChange}
        >
          <option value="">Select unit...</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="lb">lb</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          required
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
