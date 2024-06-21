import React , {useEffect , useState} from 'react'
import FilterJobs from '../components/JobsPage/FilterJobs'
import JobCard from '../components/JobsPage/JobCard'
import {getJob} from '../api/Job'
import './JobsPage.css'

function JobsPage() {
  const [jobArr , setJobArr] = useState([])
  // getJob()
  const jobs = async () =>{
    try {
      const response = await getJob() ;
      setJobArr(response)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    jobs()
    // console.log(jobArr , 'jobs')
    // setJobArr(response)
  } , [])
  useEffect(()=>{
    console.log(jobArr , 'jobs')
    // setJobArr(response)
  } , [jobArr])
  return (
    <div className='jobsPage'>
      <FilterJobs setFilterJobs={setJobArr} />
      {/* <JobCard /> */}
      {jobArr.map((job , index) =>{
        return <JobCard key={index} job={job} />
      })}
    </div>
  )
}

export default JobsPage
