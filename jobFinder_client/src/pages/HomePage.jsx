import React from 'react'
import NavBar from '../components/HomePage/NavBar'
import JobsPage from './JobsPage'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePage'>
     <NavBar />
     <JobsPage />
    </div>
  )
}

export default HomePage
