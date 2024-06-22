import React, { useState } from 'react'
import NavBar from '../components/HomePage/NavBar'
import JobsPage from './JobsPage'
import './HomePage.css'

function HomePage() {
  const [token , setToken] = useState(localStorage.getItem('userToken'))
  return (
    <div className='homePage'>
     <NavBar token={token} setToken={setToken} />
     <JobsPage token={token} />
    </div>
  )
}

export default HomePage
