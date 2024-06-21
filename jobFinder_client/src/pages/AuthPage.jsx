import React, { useState } from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import './AuthPage.css'
function AuthPage() {
  const [logIn , setLogIn ] = useState(false)
  return (
    <div className='authPage'>
      <div className='userAuth'>
        {logIn ? <LoginPage setLogIn={setLogIn} /> : <SignUpPage setLogIn={setLogIn} /> }
        {/* <SignUpPage /> */}
      </div>
      <section className='layout'>
        <h1>Your Personal Job Finder</h1>
      </section>
    </div>
  )
}

export default AuthPage
