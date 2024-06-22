import React, { useState } from 'react'
import LoginForm from '../components/LoginSignupPage/LoginForm'
import './AuthPage.css'
function AuthPage() {
  const [logIn , setLogIn ] = useState(false)
  return (
    <div className='authPage'>
      <div className='userAuth'>
        <LoginForm />
      </div>
      <section className='layout'>
        <h1>Your Personal Job Finder</h1>
      </section>
    </div>
  )
}

export default AuthPage
