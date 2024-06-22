import React from "react";
import { useNavigate } from "react-router-dom";

function JobDetailView({ job, token }) {
    const navigate = useNavigate()
    return (
        <div className="jobDetailView">
            <div style={{ display: "flex", gap: '10px', fontSize: '1.25rem', fontWeight: '500', color: '#999999' }}>
                <p>1w ago .</p>
                <p>{job.jobType} </p>
                {token && <img
                    src={job.logoUrl}
                    alt="Company Logo"
                    width='30px'
                />}
                {token && <p> {job.companyName} </p>}
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between"  , alignItems: 'center'}}>
                    <p style={{ fontSize: '3rem' , fontWeight:'700' }} >{job.jobTitle} </p>
                    {token && <button className="orangeButton"
                    onClick={() => navigate('/addjob')} 
                    style={{ fontSize: '2rem' , height:'50px' }} >Edit Job</button>}
                </div>
                <div style={{fontSize:'1.3rem' , color:'#ED5353' , fontWeight:'500' , margin:'0'}} >
                    <h5>{`${job.location} | India`}</h5>
                </div>
            </div>

            <div className="rowFlex" style={{gap:'25px'}}>
                <div>
                    <p>Stipend</p>
                    <p>{`Rs ${job.monthlySalary}/month`} </p>
                </div>
                <div>
                    <p>Duration</p>
                    <p>6 Months</p>
                </div>
            </div>
            <div>
                <h4>About company</h4>
                <p>{job.aboutCompany} </p>
            </div>
            <div>
                <h4>About the job/internship</h4>
                <p>{job.jobDescription} </p>
            </div>
            <div>
                <h4>Skill(s) required</h4>
                <div style={{display:"flex" , gap:'20px' , flexWrap:"wrap"}}>
                    {job.skillsRequired &&
                    job.skillsRequired.map((skill , idx)=>{
                        return <p className="skillShown" key={idx}>{skill}</p>
                    })}
                </div>
            </div>
            <div>
                <h4>Additional Information</h4>
                <p>{job.additionalInformation} </p>
            </div>
        </div>
    );
}

export default JobDetailView;
