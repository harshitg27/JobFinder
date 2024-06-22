import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const [token , setToken] = useState('')
    const handleLogout = ()=> {
        localStorage.setItem('userToken' , '')
        setToken('')
    }
    useEffect(()=>{
        setToken(localStorage.getItem('userToken'))
        // console.log('token' , token)
    },[])
    return (
        <div className='navBar'>
            <div><h4>Jobfinder</h4></div>
            
            
            {token ? <div className='user'>
                <p onClick={handleLogout}>Logout</p>
                <p>Hello! Recruiter</p>
            </div>: 
            <div className='auth'>
                <button onClick={() => navigate('/login')} > Login </button>
                <button onClick={() => navigate('/signup')} > Register</button>
            </div>}
        </div>
    )
}

export default NavBar
