import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import AppliedJobs from './components/AppliedJobs'; // New Component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]); // Track applications
  const [jobs, setJobs] = useState([
    { id: 1, title: "React Developer", company: "Meta", location: "Remote" },
    { id: 2, title: "Software Engineer", company: "Google", location: "Mountain View" }
  ]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now() }]);
  
  const applyToJob = (id) => {
    if (!appliedJobIds.includes(id)) {
      setAppliedJobIds([...appliedJobIds, id]);
    }
  };

  return (
    <div className="app-container">
      <Router>
        {isLoggedIn && (
          <nav className="navbar">
            <h2>JobPortal</h2>
            <div>
              <Link to="/">Browse</Link>
              <Link to="/applied">My Applications ({appliedJobIds.length})</Link>
              <Link to="/post">Post Job</Link>
              <button onClick={() => setIsLoggedIn(false)} className="logout-mini">Logout</button>
            </div>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login onLogin={setIsLoggedIn} /> : <Navigate to="/" />} />
          <Route path="/" element={isLoggedIn ? <JobList jobs={jobs} onApply={applyToJob} appliedIds={appliedJobIds} /> : <Navigate to="/login" />} />
          <Route path="/applied" element={isLoggedIn ? <AppliedJobs jobs={jobs} appliedIds={appliedJobIds} /> : <Navigate to="/login" />} />
          <Route path="/post" element={isLoggedIn ? <JobForm onAddJob={addJob} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;