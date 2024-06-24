import axios from "axios";

const BACKEND_ORIGIN_URL = 'http://localhost:4001'


const getJob = async () =>{
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`)
        // console.log(response.data)
        return response
    } catch (error) {
        // console.log(error.response.data)
        return error.response.data
    }
}
const getJobsByQuery = async( jobTitle , skills ) =>{
        // skills = skills.toString()
        // console.log(skills )
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job` , {
            params: {
                jobTitle ,
                skills
            }
        } )
        // console.log(response)
        return response
    } catch (error) {
        return error.response.data ;
    }
}
const getJobBYId = async (id) =>{
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job/${id}`)
        // console.log(response)
        return response
    } catch (error) {
        // console.log(error.response.data)
        return error.response
    }
}
const addJob = async (jobdata) =>{
    try {
        const token = localStorage.getItem('userToken')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/job/addJobs` , jobdata , config)
        return response
    } catch (error) {
        // console.log(error.response.data)
        return error.response
    }
}
const modifyJob = async (jobdata , id) =>{
    try {
        const token = localStorage.getItem('userToken')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.put(`${BACKEND_ORIGIN_URL}/job/update/${id}` , jobdata , config)
        return response
    } catch (error) {
        // console.log(error.response.data)
        return error.response
    }
}
export {getJob , getJobsByQuery , getJobBYId , addJob , modifyJob}