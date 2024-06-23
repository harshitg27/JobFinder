import React, { useEffect, useState } from 'react'
import NavBar from '../components/HomePage/NavBar'
import JobDetailView from '../components/JobPage/JobDetailView'
import './JobPage.css'
import { getJobBYId } from '../api/Job'
import { useNavigate } from 'react-router-dom'

function JobPage() {
  const navigate = useNavigate()
  const jobId = window.location.pathname.split('/').pop()
  const [job, setJob] = useState({});
  const [token, setToken] = useState(localStorage.getItem('userToken'))
  const jobDetails = async () => {
    try {
      const response = await getJobBYId(jobId);
      if (response.status == 200) {
        setJob(response.data.job)
      } else {
        console.log('wrong job id')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    jobDetails()
  }, [])

  return (
    <div className='jobPage'>
      <NavBar token={token} setToken={setToken} />
      {/* modify in job */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' , padding:'50px'}} >
        <div style={{ height: '15vh' }}></div>
        <JobDetailView job={job} token={token} />
      </div>
      {/* <Heading /> */}
    </div>
  )
}

export default JobPage
