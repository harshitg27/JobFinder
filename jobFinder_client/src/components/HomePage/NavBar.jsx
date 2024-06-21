import React, { useEffect, useState } from 'react'

function NavBar() {
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
                <button> Login </button>
                <button> Register</button>
            </div>}
        </div>
    )
}

export default NavBar
