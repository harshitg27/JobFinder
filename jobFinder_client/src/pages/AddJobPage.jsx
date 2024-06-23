import React, { useState } from 'react'
import './AddJobPage.css'
import { useNavigate } from 'react-router-dom'

function AddJobPage() {
    const navigate = useNavigate()
    const jobType = ['Full-Time' , 'Internship' , 'Part-Time']
    const workType = ['Remote' , 'Office' , 'Hybrid']
    const skills = []
    const [jobDetails, setJobDetails] = useState({
        companyName: "",
        logoUrl: "",
        jobTitle: "",
        monthlySalary: "",
        jobType: "",
        remote : true,
        location : "",
        jobDescription : "",
        aboutCompany : "" ,
        skillsRequired : [],
        additionalInformation : ""
    })
    return (
        <div className='addJobPage'>
            <section className='addJob' >
                <div className='heading'>
                    <h1>Add job description</h1>
                </div>
                <form className='addJobForm' onSubmit={(e) => {
                    e.preventDefault();
                    console.log('submit')
                    // validate()
                }} >
                    <div className='inputBox' >
                        <label >Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={jobDetails.companyName}
                            placeholder="Enter Your Company name here"
                            onChange={(e) =>{
                                setJobDetails({...jobDetails , companyName:e.target.value})
                            }}
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Add logo URL</label>
                        <input
                            type="text"
                            name="logoURL"
                            value={jobDetails.logoUrl}
                            onChange={(e) => setJobDetails({...jobDetails , logoUrl:e.target.value})}
                            placeholder="Enter the link"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job position</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={jobDetails.jobTitle}
                            onChange={(e) => setJobDetails({...jobDetails , jobTitle:e.target.value})}
                            placeholder="Enter Job position"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Monthly salary</label>
                        <input
                            type="number"
                            value={jobDetails.monthlySalary}
                            placeholder="Enter Amount in Rupee"
                            onChange={(e) => setJobDetails({...jobDetails , monthlySalary:e.target.value})}

                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Type</label>
                        <select
                            value={jobDetails.jobType}
                            placeholder="Job Type"
                            onChange={(e) => setJobDetails({...jobDetails , jobType:e.target.value})}
                        >
                            {jobType.map((type , index) => {
                                return <option key={index}>{type}</option>
                            })}
                        </select>
                    </div>
                    <div className='inputBox' >
                        <label >Remote/Office</label>
                        <select
                            value={jobDetails.remote}
                            onChange={(e) => setJobDetails({...jobDetails , remote:e.target.value})}
                        >
                            {workType.map((type , index) => {
                                return <option key={index}>{type}</option>
                            })}
                        </select>
                    </div>
                    <div className='inputBox' >
                        <label >Location</label>
                        <input
                            type="text"
                            value={jobDetails.location}
                            onChange={(e) => setJobDetails({...jobDetails , location:e.target.value})}
                            placeholder="Enter Location"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Description</label>
                        <textarea
                            type="text"
                            value={jobDetails.jobDescription}
                            onChange={(e) => setJobDetails({...jobDetails , jobDescription:e.target.value})}
                            placeholder="Type the job description"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >About Company</label>
                        <input
                            type="text"
                            value={jobDetails.aboutCompany}
                            onChange={(e) => setJobDetails({...jobDetails , aboutCompany:e.target.value})}
                            placeholder="Type about your company"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Skills Required</label>
                        <input
                            type="text"
                            placeholder="Enter the must have skills"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Information</label>
                        <input
                            type="text"
                            value={jobDetails.additionalInformation}
                            onChange={(e) => setJobDetails({...jobDetails , additionalInformation:e.target.value})}
                            placeholder="Enter the additional information"
                        />
                    </div>
                    <div className='formActionButtons' >
                        <button className='cancelButton' onClick={() => navigate('/')} >Cancel</button>
                        <button type='submit' className='addJobButton'>+ Add Job</button>
                    </div>
                </form>
            </section>
            <section className='sideBar'>
                <h1>Recrutier add job details here</h1>
            </section>
        </div>
    )
}

export default AddJobPage
