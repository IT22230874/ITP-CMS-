import React, { useState } from "react";
import "../../styles/forms/forms.css";
import "../../styles/forms/addProjectForm.css";

function AddProjectForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: "",
    budget: "",
    location: "",
    projectDuration: "",
    startDate: "",
    endDate: "",
    documents: [],
    tenderBased: false,
    awardedBy: "",
    receivedDate: "",
    title: "",
    description: ""
  });
  const [showTenderFields, setShowTenderFields] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files,
    });
  };

  const handleTenderToggle = () => {
    setShowTenderFields(!showTenderFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      projectName: "",
      budget: "",
      location: "",
      projectDuration: "",
      startDate: "",
      endDate: "",
      documents: [],
      tenderBased: false,
      awardedBy: "",
      receivedDate: "",
      title: "",
      description: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={formData.projectName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget:</label>
        <input
          type="text"
          id="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectDuration">Project Duration:</label>
        <input
          type="text"
          id="projectDuration"
          value={formData.projectDuration}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="documents">Upload Documents:</label>
        <input
          type="file"
          id="documents"
          onChange={handleFileChange}
          multiple
          required
        />
      </div>
      <div className="form-group">
        <button 
          className="toggle-button"
          type="button"
          onClick={handleTenderToggle}
        >
          {showTenderFields ? "Hide Tender Fields" : "Show Tender Fields"}
        </button>
      </div>
      {showTenderFields && (
        <div>
          <div className="form-group">
            <label htmlFor="awardedBy">Awarded By:</label>
            <input
              type="text"
              id="awardedBy"
              value={formData.awardedBy}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="receivedDate">Received Date:</label>
            <input
              type="date"
              id="receivedDate"
              value={formData.receivedDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      <button className="button" type="submit">
        Add Project
      </button>
    </form>
  );
}

export default AddProjectForm;
