import React , {useEffect , useState} from 'react'
import FilterJobs from '../components/JobsPage/FilterJobs'
import JobCard from '../components/JobsPage/JobCard'
import {getJob} from '../api/Job'
import './JobsPage.css'

function JobsPage({token}) {
  const [jobArr , setJobArr] = useState([])
  // getJob()
  const jobs = async () =>{
    try {
      const response = await getJob() ;
      if(response.status == 200){
        setJobArr(response.data.jobs)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    jobs()
  } , [])
  
  return (
    <div className='jobsPage'>
      <FilterJobs setFilterJobs={setJobArr} token={token} />
      {/* <JobCard /> */}
      {jobArr.map((job , index) =>{
        return <JobCard key={index} job={job} token={token} />
      })}
    </div>
  )
}

export default JobsPage
