import axios from "axios";

const BACKEND_ORIGIN_URL = 'https://jobfinder-jbhq.onrender.com'

const Login = async (email , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login` , {email , password})
        // console.log(response.data)
        return response
    } catch (error) {
        return error.response ;
    }
}

const Register = async (name , email , mobileNum , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register` , {name , email , mobileNum , password})
        // console.log(response.data)
        return response
    } catch (error) {
        return error.response ;
    }
}

export {Login , Register}