import React from 'react'
import { useNavigate } from 'react-router-dom'
import companyAvatar from '../../assets//img/company.png'

function JobCard({job , token}) {
  const navigate = useNavigate()
  const { logoUrl , jobTitle , monthlySalary , location , remote , jobType , skillsRequired , _id } = job
  // const altIcon = 'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'
  const off = remote ? 'Remote' : 'Office'
  // const token = localStorage.getItem('userToken')
  // console.log(token)
  return (
    <div className='jobCard'>
      <div className='jobDetails'>
        <div className='companyImg'>
          <img src={logoUrl} alt={companyAvatar} width='50px'  height='50px' />
        </div >
        <div className='column1' >
          <h4>{jobTitle}</h4>
          <div className='rowFlex'>
            <p>11-50</p>
            <p>Rs {monthlySalary} </p>
            <p>{location} </p>
          </div>
          <div className='rowFlex jobType'>
            <h5>{off}</h5>
            <h5>{jobType}</h5>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='rowFlex skills'>
          {skillsRequired.map((skill , index) =>{
            return <div className='skillLayout' key={index}>{skill}</div>
          })}
        </div>
        <div className='jobChanges' >
          {token && <button onClick={() => navigate(`/updatejob/${_id}`)} className='editJob' >Edit job</button> }
          <button className='orangeButton' onClick={() => navigate(`/job/${_id}`)} >View Details</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
