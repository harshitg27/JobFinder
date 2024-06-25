import React, { useEffect, useState } from 'react'
import './AddJobPage.css'
import { getJobBYId , addJob , modifyJob } from '../api/Job'
import { useNavigate } from 'react-router-dom'

function AddJobPage() {
    const navigate = useNavigate()
    // const token = localStorage.getItem('userToken')
    // console.log(token)
    const [jobDetails, setJobDetails] = useState({
        companyName: "",
        logoUrl: "",
        jobTitle: "",
        monthlySalary: "",
        jobType: "",
        remote: "" ,
        location: "",
        jobDescription: "",
        aboutCompany: "",
        skillsRequired: [],
        additionalInformation: ""
    })
    const [btnTitle, setBtnTitle] = useState('');
    const [currentSkill, setCurrentSkill] = useState('')
    const jobType = ['Full-Time', 'Internship', 'Part-Time']
    const workType = ['Remote', 'Office', 'Hybrid']
    const suggestedSkills = []
    const path = window.location.pathname.split('/')
    useEffect(() => {
        setBtnTitle('+ Add Job')
        if (path[1] == 'updatejob') {
            setBtnTitle('Update Job')
            // console.log(path[2])
            getJobDetail(path[2])
        }
    }, [])

    const removeskill = (idx) => {
        setJobDetails({ ...jobDetails, skillsRequired: jobDetails.skillsRequired.filter((skill , index) => index !== idx) })
    }

    const getJobDetail = async (jobId) => {
        try {
            const response = await getJobBYId(jobId);
            if (response.status == 200) {
                const { companyName, logoUrl, jobTitle, monthlySalary, jobType, workType, location, jobDescription, aboutCompany, skillsRequired, additionalInformation } = response.data.job
                setJobDetails({
                    companyName,
                    logoUrl,
                    jobTitle,
                    monthlySalary,
                    jobType,
                    workType,
                    location,
                    jobDescription,
                    aboutCompany,
                    skillsRequired,
                    additionalInformation
                })
                // setJob(response.data.job)
            } else {
                console.log('wrong job id')
                setBtnTitle('+ Add Job')
                navigate('/addjob')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnKeyDown = (e) => {
        console.log(e.key)
        if (e.key == 'Enter' || e.key == 'Tab') {
            if (jobDetails.skillsRequired.includes(currentSkill.trim())) {
                alert('skill already added');
                setCurrentSkill('')
                return
            }
            setJobDetails({ ...jobDetails, skillsRequired: [...jobDetails.skillsRequired, currentSkill.trim()] })
            setCurrentSkill('')
        }
    }

    const handleResponse = (response) => {
        if (response.status == 201){
            navigate(`/job/${response.data.jobID}`)
        }else if( response.status == 401){
            alert('User Not Verify For Adding Job LogIn Again')
            localStorage.removeItem('userToken')
            navigate(`/login`)
        }else if( response.status == 400 ){
            alert(response.data.message)
        }else if(response.status == 403){
            alert("You are Not Allowed For Edit this Job")
        }
    }

    const handleAddJob = async () =>{
        // console.log(typeof jobDetails.monthlySalary)
        try {
            let response ;
            if(path[1] == 'updatejob'){
                response = await modifyJob(jobDetails , path[2])
            }else{
                response = await addJob(jobDetails)
            }
            handleResponse(response)
        } catch (error) {
            console.log(error)
        }
    }
    const resetField = () => {
        setJobDetails({
            companyName: "",
            logoUrl: "",
            jobTitle: "",
            monthlySalary: "",
            jobType: "",
            remote: "" ,
            location: "",
            jobDescription: "",
            aboutCompany: "",
            skillsRequired: [],
            additionalInformation: ""
        })
        setCurrentSkill('')
    }


    return (
        <div className='addJobPage'>
            <section className='addJob' >
                <div className='heading'>
                    <h1>Add job description</h1>
                </div>
                <div className='addJobForm'  >
                    <div className='inputBox' >
                        <label >Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={jobDetails.companyName}
                            placeholder="Enter Your Company name here"
                            onChange={(e) => {
                                setJobDetails({ ...jobDetails, companyName: e.target.value })
                            }}
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Add logo URL</label>
                        <input
                            type="text"
                            name="logoURL"
                            value={jobDetails.logoUrl}
                            onChange={(e) => setJobDetails({ ...jobDetails, logoUrl: e.target.value })}
                            placeholder="Enter the link"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job position</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={jobDetails.jobTitle}
                            onChange={(e) => setJobDetails({ ...jobDetails, jobTitle: e.target.value })}
                            placeholder="Enter Job position"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Monthly salary</label>
                        <input
                            type="number"
                            value={jobDetails.monthlySalary}
                            placeholder="Enter Amount in Rupee"
                            onChange={(e) => setJobDetails({ ...jobDetails, monthlySalary: Number(e.target.value) })}

                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Type</label>

                        <select
                            // value={jobDetails.jobType}
                            defaultValue={"select"}
                            onChange={(e) => setJobDetails({ ...jobDetails, jobType: e.target.value })}
                        >
                            <option value='select' disabled>Select</option>
                            {jobType.map((type, index) => {
                                return <option key={index} value={type}>{type}</option>
                            })}
                        </select>
                    </div>
                    <div className='inputBox' >
                        <label >Remote/Office</label>
                        <select
                            // value={jobDetails.remote}
                            defaultValue={'select'}
                            onChange={(e) => setJobDetails({ ...jobDetails, workType: e.target.value })}
                        >
                            <option value='select' disabled>Select</option>
                            {workType.map((type, index) => {
                                return <option key={index}>{type}</option>
                            })}
                        </select>
                    </div>
                    <div className='inputBox' >
                        <label >Location</label>
                        <input
                            type="text"
                            value={jobDetails.location}
                            onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })}
                            placeholder="Enter Location"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Description</label>
                        <textarea
                            type="text"
                            value={jobDetails.jobDescription}
                            onChange={(e) => setJobDetails({ ...jobDetails, jobDescription: e.target.value })}
                            placeholder="Type the job description"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >About Company</label>
                        <textarea
                            type="text"
                            value={jobDetails.aboutCompany}
                            onChange={(e) => setJobDetails({ ...jobDetails, aboutCompany: e.target.value })}
                            placeholder="Type about your company"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Skills Required</label>
                        <div className='skillInput'>
                            <input style={{ width: '100%' }}
                                type="text"
                                value={currentSkill}
                                placeholder="Enter the must have skills"
                                onChange={(e) => setCurrentSkill(e.target.value)}
                                onKeyDown={(e) => { handleOnKeyDown(e) }}
                            />
                            {jobDetails.skillsRequired.length >0 && <div className='skillsdiv'>
                                { jobDetails.skillsRequired.map((skill, index) => {
                                    return <div className='skillCard' key={index} ><p>{skill}</p><div onClick={() => removeskill(index)}>X</div></div>
                                })}
                            </div>}
                        </div>
                    </div>
                    <div className='inputBox' >
                        <label >Information</label>
                        <textarea
                            type="text"
                            value={jobDetails.additionalInformation}
                            onChange={(e) => setJobDetails({ ...jobDetails, additionalInformation: e.target.value })}
                            placeholder="Enter the additional information"
                        />
                    </div>
                    <div className='formActionButtons' >
                        <button className='cancelButton' onClick={() => navigate('/')} >Cancel</button>
                        <button className='addJobButton'onClick={() => resetField()} >Reset</button>
                        <button className='addJobButton'onClick={() => handleAddJob()} >{btnTitle}</button>
                    </div>
                </div>
            </section>
            <section className='sideBar'>
                <h1>Recrutier add job details here</h1>
            </section>
        </div>
    )
}

export default AddJobPage
