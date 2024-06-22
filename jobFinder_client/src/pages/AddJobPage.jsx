import React, { useState } from 'react'
import './AddJobPage.css'
import { useNavigate } from 'react-router-dom'

function AddJobPage() {
    const navigate = useNavigate()
    const [companyName, setCompanyName] = useState('')
    return (
        <div className='addJobPage'>
            <section className='addJob' >
                <div className='heading'>
                    <h1>Add job description</h1>
                </div>
                <form className='addJobForm' onSubmit={(e) => {
                    e.preventDefault();
                    // validate()
                }} >
                    <div className='inputBox' >
                        <label >Company Name</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter Your Company name here"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Add logo URL</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter the link"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job position</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter Job position"
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Monthly salary</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Type</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Remote/Office</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Location</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Job Description</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >About Company</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Skills Required</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='inputBox' >
                        <label >Information</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                        />
                    </div>
                    <div className='formActionButtons' >
                        <button className='cancelButton' onClick={() => navigate('/')} >Cancel</button>
                        <button className='addJobButton'>+ Add Job</button>
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
