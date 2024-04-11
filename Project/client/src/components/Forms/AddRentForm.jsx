import React, { useState } from "react";
import "../../styles/forms/forms.css"; 
import "../../styles/forms/addRentForm.css"; 

function AddRentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    rentalCharge: "",
    chargingPeriod: "",
  });

  const [totalRentalFee, setTotalRentalFee] = useState(0);
  const [rentalDuration, setRentalDuration] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { startDate, endDate, rentalCharge, chargingPeriod } = formData;

    // Calculate rental duration
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInMilliseconds = end - start;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
    setRentalDuration(durationInDays);

    // Calculate total rental fees
    let totalFees = 0;
    if (chargingPeriod === "daily") {
      totalFees = rentalCharge * durationInDays;
    } else if (chargingPeriod === "weekly") {
      totalFees = rentalCharge * Math.ceil(durationInDays / 7);
    } else if (chargingPeriod === "monthly") {
      totalFees = rentalCharge * Math.ceil(durationInDays / 30);
    }
    setTotalRentalFee(totalFees);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]} // Prevent selection of past dates
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
          min={formData.startDate} // Ensure end date is after start date
        />
      </div>
      <div className="form-group">
        <label htmlFor="rentalCharge">Rental Charge:</label>
        <input
          type="number"
          id="rentalCharge"
          value={formData.rentalCharge}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="chargingPeriod">Charging Period:</label>
        <select
          id="chargingPeriod"
          value={formData.chargingPeriod}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button className="calc-button" type="submit">
        Calculate Charges
      </button>
      {totalRentalFee > 0 && (
        <div className="form-group">
          <label>Rental Duration:</label>
          <span>{rentalDuration} days</span>
        </div>
      )}
      {totalRentalFee > 0 && (
        <div className="form-group">
          <label>Total Rental Fee:</label>
          <span>{totalRentalFee}</span>
        </div>
      )}
      <button
        className="button"
        type="button"
        onClick={() => onSubmit(formData, totalRentalFee, rentalDuration)}
      >
        Confirm Rent
      </button>
    </form>
  );
}

export default AddRentForm;
