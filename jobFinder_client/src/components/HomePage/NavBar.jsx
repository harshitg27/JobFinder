import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userAvatar from '../../assets/img/profile.png'

function NavBar({token , setToken}) {
    const navigate = useNavigate()
    const handleLogout = ()=> {
        localStorage.removeItem('userToken')
        setToken('')
    }
    return (
        <div className='navBar'>
            <div onClick={() => navigate('/')} ><h4>Jobfinder</h4></div>
            {/* ternart operator for showing login logout */}
            {token ? <div className='user'>
                <p onClick={handleLogout}>Logout</p>
                <p>Hello! Recruiter</p>
                <img className='userProfile' src={userAvatar} alt='UserIcon' />
            </div>  : 
            <div className='auth'>
                <button onClick={() => navigate('/login')} > Login </button>
                <button onClick={() => navigate('/signup')} > Register</button>
            </div>}
        </div>
    )
}

export default NavBar
