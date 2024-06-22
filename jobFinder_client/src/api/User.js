import axios from "axios";

const BACKEND_ORIGIN_URL = 'http://localhost:4001'

const Login = async (email , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login` , {email , password})
        // console.log(response.data)
        return response.data
    } catch (error) {
        return error.response.data ;
    }
}

const Register = async (name , email , mobileNum , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register` , {name , email , mobileNum , password})
        // console.log(response.data)
        return response.data
    } catch (error) {
        return error.response.data ;
    }
}

export {Login , Register}