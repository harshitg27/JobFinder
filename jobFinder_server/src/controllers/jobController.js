const jobModel = require('../models/Job') ;

function getJobById() {
    return async (req, res , next) => {
        try {
            const jobId = req.params.id;
            const job = await jobModel.findById(jobId);
            if (job) {
                res.status(200).json({
                    status: 'Success',
                    message: 'job found',
                    job
                });
            } else{
                res.status(400).json({
                    status: 'Failed',
                    message: 'job not Found'
                });
            }
        } catch (error) {
            next("Error Finding Job", error);
        }
    };
}

function addNewJob() {
    return async (req, res, next) => {
        try {
            // console.log(req.user.email);
            const { companyName, logoUrl, jobTitle, monthlySalary, jobType, workType, location, jobDescription, aboutCompany, skillsRequired, additionalInformation } = req.body;
            const newJob = new jobModel({
                companyName,
                logoUrl,
                jobTitle,
                monthlySalary,
                jobType,
                workType,
                location,
                jobDescription,
                aboutCompany,
                skillsRequired,
                additionalInformation,
                authorUserId: req.id,
            });
            // console.log(newJob)
            await newJob.save();
            res.status(201).json({
                status: 'Success',
                message: 'Job added successfully',
                jobID: newJob._id
            });
        } catch (error) {
            next( "Error Adding Job" , error)
            
        }
    };
}

function getFilteredJobs() {
    return async (req, res , next) => {
        try {
            let { minSalary, maxSalary, jobTitle, location, workType, skills } = req.query;
            // const skillsArray = skills ? skills.split(',') : [];
            if(!skills){
                skills = []
            }
            const jobs = await jobModel.find(
                {
                    monthlySalary: {
                        $gte: minSalary || 0,
                        $lte: maxSalary || 999999999
                    },
                    jobTitle: jobTitle || { $exists: true },
                    location: location || { $exists: true },
                    workType: workType || { $exists: true },
                }
            );
            
            const finalJobs = jobs.filter(job => {
                let isSkillMatched = true;
                if (skills.length > 0) {
                    isSkillMatched = skills.every(skill => job.skillsRequired.includes(skill));
                }
                return isSkillMatched;
            });
            res.status(200).json({
                message: 'Fetch Job Succesfully',
                status: 'Success',
                jobs: finalJobs
            });
        } catch (error) {
            next("Error Finding Jobs", error);
        }
    };
}
function updateExistingJob(){
    return async (req, res , next) =>{
        try{
            const jobId = req.params.id ;
            const { companyName, logoUrl, jobTitle, monthlySalary, jobType, workType, location, jobDescription, aboutCompany, skillsRequired, additionalInformation } = req.body;
            // console.log(req.body)
            const updatedJob = await jobModel.findByIdAndUpdate(jobId , {
                companyName,
                logoUrl,
                jobTitle,
                monthlySalary,
                jobType,
                workType,
                location,
                jobDescription,
                aboutCompany,
                skillsRequired,
                additionalInformation,
                authorUserId: req.id,
            });
            // console.log(newJob)
            // await newJob.save();
            res.status(201).json({
                status: 'Success',
                message: 'Job updated successfully',
                jobID: updatedJob._id
            });
        }catch(error){
            next("Error in Updating Job" , error)
        }
    }
}

function deleteJob(){
    return async (req, res , next) =>{
        try {
            const jobId = req.params.id ;
            await jobModel.findByIdAndDelete(jobId)
            res.status(201).json({
                status: 'Success',
                message: 'Job Delete Succesfully',
                jobId
            })
        } catch (error) {
            next("Error Deleting Job" , error)
        }
    }
}

module.exports = {
    getFilteredJobs , 
    getJobById ,
    addNewJob ,
    updateExistingJob ,
    deleteJob
}