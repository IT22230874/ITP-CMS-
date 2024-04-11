import React, { useState } from "react";
import "../../styles/forms/forms.css"; 
import "../../styles/forms/addTransactionForm.css"; 

function AddTransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    transactionType: "",
    date: "",
    amount: "",
    category: "",
    description: "",
    paymentMethod: "",
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
      transactionType: "",
      date: "",
      amount: "",
      category: "",
      description: "",
      paymentMethod: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="transactionType">Transaction Type:</label>
        <select
          id="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="rent">Rent</option>
          <option value="utilities">Utilities</option>
          <option value="salary">Salary</option>
          {/* Add other categories as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="cash">Cash</option>
          <option value="creditCard">Credit Card</option>
          <option value="bankTransfer">Bank Transfer</option>
          {/* Add other payment methods as needed */}
        </select>
      </div>
      <button className="button" type="submit">
        Save
      </button>
    </form>
  );
}

export default AddTransactionForm;
