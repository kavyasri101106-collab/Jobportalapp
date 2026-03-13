import React from 'react';

const AppliedJobs = ({ jobs, appliedIds }) => {
  const myJobs = jobs.filter(job => appliedIds.includes(job.id));

  return (
    <div>
      <h2 style={{color: 'white'}}>Your Applications</h2>
      {myJobs.length === 0 ? (
        <p style={{color: 'white'}}>You haven't applied to any jobs yet.</p>
      ) : (
        <div className="job-grid">
          {myJobs.map(job => (
            <div key={job.id} className="job-card applied">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <small>Status: Under Review</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AppliedJobs;