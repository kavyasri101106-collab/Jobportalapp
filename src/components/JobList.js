import React from 'react';

const JobList = ({ jobs, onApply, appliedIds }) => {
  return (
    <div>
      <h2 style={{color: 'white'}}>Available Jobs</h2>
      <div className="job-grid">
        {jobs.map(job => {
          const isApplied = appliedIds.includes(job.id);
          return (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company} • {job.location}</p>
              
              {isApplied ? (
                <span className="applied-badge">✓ Applied</span>
              ) : (
                <button onClick={() => onApply(job.id)} className="apply-btn">Apply Now</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JobList;