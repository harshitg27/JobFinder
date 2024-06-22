import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../../api/User';

function SignupForm({ setLogIn }) {
    const navigate = useNavigate()
    const [userDeatails, setUserDeatails] = useState({ name: '', password: '', email: '', mobile: '', policy: false })
    const [error, setError] = useState({ name: '', password: '', email: '', mobile: '', policy: false })
    const handleRegisterUser = async () => {
        try {
            const response = await Register(userDeatails.name, userDeatails.email, userDeatails.mobile, userDeatails.password);
            if (response.status == 'Success') {
                setUserDeatails({ name: '', password: '', email: '', mobile: '', policy: false })
                localStorage.setItem('userToken', response.userToken)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{11}$/;
        return phoneRegex.test(phone)
    }
    function validate() {
        let err = false;
        setError({ name: '', password: '', email: '', mobile: '', policy: false })
        if (userDeatails.name.trim().length === 0) {
            err = true
            setError((error) => {
                return {
                    ...error,
                    name: 'Name is required'
                }
            })
        }
        if (userDeatails.password.trim().length === 0) {
            err = true
            setError((error) => {
                return {
                    ...error,
                    password: 'Password is required'
                }
            })
        }
        if (userDeatails.email.trim().length === 0) {
            err = true
            setError((error) => {
                return {
                    ...error,
                    email: 'Email is required'
                }
            })
        }
        if (userDeatails.mobile.trim().length === 0 || validatePhone(userDeatails.mobile)) {
            err = true
            setError((error) => {
                return {
                    ...error,
                    mobile: 'Phone is either empty or invalid'
                }
            })
        }
        if (!userDeatails.policy) {
            err = true
            setError((error) => {
                return {
                    ...error,
                    policy: 'Check this box if you want to proceed'
                }
            })
        }
        if (err) {
            return
        }
        handleRegisterUser()
    }
    return (
        <div>
            <section className='registrationPage'>
                <div className='rgsPageHeading'>
                    <h1>Create an account</h1>
                    <p>Your personal job finder is here</p>
                </div>
                <div className='registrationForm'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        validate()
                    }}>
                        <div className="input-box">
                            <input type="text"
                                placeholder="Name"
                                value={userDeatails.name}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    name: e.target.value
                                }))} />
                            <p>{error.name}</p>
                        </div>

                        <div className="input-box">
                            <input type="email" placeholder="Email" value={userDeatails.email}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    email: e.target.value
                                }))} />
                            <p>{error.email}</p>
                        </div>
                        <div className="input-box">
                            <input type="tel" placeholder="Mobile" value={userDeatails.mobile}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    mobile: e.target.value
                                }))} />
                            <p>{error.mobile}</p>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" value={userDeatails.password}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    password: e.target.value
                                }))} />
                            <p>{error.userName}</p>
                        </div>
                        <div className="policy">
                            <input type="checkbox" name='checkbox' id='checkbox' checked={userDeatails.policy}
                                onChange={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    policy: e.target.checked
                                }))} />
                            <label htmlFor='checkbox'>By creating an account, i agree to our terms of use and privacy policy</label>
                            <p>{error.policy}</p>
                        </div>
                        <div className="input-box button">
                            <button type="Submit" >Create Account</button>
                        </div>

                    </form>
                    <div className="signUpText">
                        <p>Already have an account <span onClick={() => { setLogIn(true) }}>Sign In</span></p>
                    </div>
                    {/* {redirect} */}
                </div>
            </section>
        </div>
    )
}

export default SignupForm
