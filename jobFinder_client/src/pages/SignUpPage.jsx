import React from 'react'
import SignupForm from '../components/LoginSignupPage/SignupForm'

function SignUpPage() {
    return (
        <div className='authPage'>
            <div className='userAuth'>
                <SignupForm />
            </div>
            <section className='layout'>
                <h1>Your Personal Job Finder</h1>
            </section>
        </div>
    )
}

export default SignUpPage
