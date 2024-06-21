import axios from "axios";

const BACKEND_ORIGIN_URL = 'http://localhost:4001'


const getJob = async () =>{
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`)
        // console.log(response.data)
        return response.data.jobs
    } catch (error) {
        // console.log(error.response.data)
        return error.response.data
    }
}
const getJobsByQuery = async(
    jobTitle , 
    skills ) =>{
        skills = skills.toString()
        console.log(skills )
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job` , {
            params: {
                jobTitle ,
                skills
            }
        } )
        console.log(response)
        return response.data.jobs
    } catch (error) {
        return error.response.data ;
    }
}
export {getJob , getJobsByQuery}