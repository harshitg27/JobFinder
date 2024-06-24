import React, { useState } from 'react'
import { Login } from '../../api/User'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '' })
  const [error, setError] = useState({ email: '', password: '' })
  const handleLogin = async () => {
    try {
      const response = await Login(user.email, user.password);
      // console.log(response)
      if(response.status == 200){
        localStorage.setItem('userToken', response.data.userToken)
        navigate('/')
      }else{
        alert(response.data.message)
      }

    } catch (error) {
      console.log(error)
    }

  }
  function validate() {
    let err = false;
    setError({ email: '', password: '' })

    if (user.password.trim().length === 0) {
      err = true
      setError((error) => {
        return {
          ...error,
          userName: 'Password is required'
        }
      })
    }
    if (user.email.trim().length === 0) {
      err = true
      setError((error) => {
        return {
          ...error,
          email: 'Email is required'
        }
      })
    }
    if (err) {
      return
    }
    handleLogin()
  }
  return (
    <div className='registrationPage' >
      <div className='rgsPageHeading'>
        <h1>Already have an account</h1>
        <p>Your personal job finder is here</p>
      </div>

      <div className='registrationForm'>
        <form onSubmit={(e) => {
          e.preventDefault();
          validate()

        }}>
          <div className="input-box">
            <input type="email" placeholder="Email" value={user.email}
              onInput={(e) => setUser((prevState) => ({
                ...prevState,
                email: e.target.value
              }))} />
            <p>{error.email}</p>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={user.password}
              onInput={(e) => setUser((prevState) => ({
                ...prevState,
                password: e.target.value
              }))} />
            <p>{error.userName}</p>
          </div>
          <div className="input-box button">
            <button type="Submit" >Sign in</button>
          </div>

        </form>
        <div className="signUpText">
          <p>Don't have an account <span onClick={() => navigate('/signup')}>Sign Up</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
