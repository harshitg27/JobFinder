import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JobDetailView({ job, token }) {
    const navigate = useNavigate()
    const timeElapsed = (createdAt) => {
        const currentTime = new Date();
        const createdAtTime = new Date(createdAt);
        const differenceInMillis = currentTime - createdAtTime;
      
        const seconds = Math.floor(differenceInMillis / 1000);
        const minutes = Math.floor(seconds / 60);
      
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);      
        const weeks = Math.floor(days / 7);
      
        if (weeks > 0) {
          return weeks === 1 ? "1w ago" : `${weeks}w ago`;
        } else if (days > 0) {
          return days === 1 ? "1day ago" : `${days}days ago`;
        } else if (hours > 0) {
          return hours === 1 ? "1hr ago" : `${hours}hrs ago`;
        } else if (minutes > 0) {
          return minutes === 1 ? "1min ago" : `${minutes}min ago`;
        } else {
          return seconds === 1 ? "1sec ago" : `${seconds}sec ago`;
        }
      };
      
    const time = timeElapsed(job.createdAt)
    
    return (
        <div className="jobDetailView">
            <div style={{ display: "flex", gap: '10px', fontSize: '1.25rem', fontWeight: '500', color: '#999999' }}>
                <p>{time} .</p>
                <p>{job.jobType} </p>
                {token && <img
                    src={job.logoUrl}
                    alt="Company Logo"
                    width='30px'
                />}
                {token && <p> {job.companyName} </p>}
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    <p style={{ fontSize: '3rem', fontWeight: '700' }} >{job.jobTitle} </p>
                    {token && <button className="orangeButton"
                        onClick={() => navigate(`/updatejob/${job._id}`)}
                        style={{ fontSize: '2rem', height: '50px' }} >Edit Job</button>}
                </div>
                <div style={{ fontSize: '1.3rem', color: '#ED5353', fontWeight: '500', margin: '0' }} >
                    <h5>{`${job.location} | India`}</h5>
                </div>
            </div>

            <div className="rowFlex" style={{ gap: '25px' }}>
                <div>
                    <p>{job.jobType == 'Internship' ? 'Stipend' : 'Salary'} </p>
                    <p>{`Rs ${job.monthlySalary}/month`} </p>
                </div>
                <div>
                    <p>Duration</p>
                    <p>6 Months</p>
                </div>
            </div>
            <div>
                <h4>About company</h4>
                <p style={{textAlign:"justify"}}>{job.aboutCompany} </p>
            </div>
            <div>
                <h4>About the job/internship</h4>
                <p style={{textAlign:"justify"}}>{job.jobDescription} </p>
            </div>
            <div>
                <h4>Skill(s) required</h4>
                <div style={{ display: "flex", gap: '20px', flexWrap: "wrap" , marginTop: '10px' }}>
                    {job.skillsRequired &&
                        job.skillsRequired.map((skill, idx) => {
                            return <p className="skillShown" key={idx}>{skill}</p>
                        })}
                </div>
            </div>
            <div>
                <h4>Additional Information</h4>
                <p style={{textAlign:"justify"}}>{job.additionalInformation} </p>
            </div>
        </div>
    );
}

export default JobDetailView;
