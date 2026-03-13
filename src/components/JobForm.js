import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobForm = ({ onAddJob }) => {
  const [formData, setFormData] = useState({ title: '', company: '', location: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob(formData);
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <form className="card" onSubmit={handleSubmit}>
        <h3>Post a Job</h3>
        <input type="text" placeholder="Job Title" onChange={(e) => setFormData({...formData, title: e.target.value})} />
        <input type="text" placeholder="Company" onChange={(e) => setFormData({...formData, company: e.target.value})} />
        <input type="text" placeholder="Location" onChange={(e) => setFormData({...formData, location: e.target.value})} />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};
export default JobForm;