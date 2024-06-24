const validateNewJob = (req, res, next) => {
    // company name, logo URL, job position/title
    //monthly salary, job type, remote, location, job description
    //about company, skills required, additional information
    const { companyName , logoUrl, jobTitle, monthlySalary, jobType, workType, location, jobDescription, aboutCompany, skillsRequired } = req.body;
    // console.log(req.body)
    try {
        if (!companyName || !logoUrl || !jobTitle || !monthlySalary || !jobType || !workType || !location || !jobDescription || !aboutCompany || !skillsRequired) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Please provide all required fields',
            });
        }
    
        const jobtTpesField = ['Full-Time' , 'Part-Time' , 'Internship' ]
        // const validSkills = Array.isArray(skillsRequired) && skillsRequired.every((skill) => typeof skill === 'String') ;
        const validMonthlySalary = typeof monthlySalary == 'number' && monthlySalary > 0 ;
        const validJobTypes = jobtTpesField.includes(jobType)
    
        // !validSkills ||
        if ( !validMonthlySalary || !validJobTypes) {
            return res.status(400).json({
                status: 'Failed' ,
                message: 'Some fields are invalid, please check and try again',
            });
        } else {
            next();
        };
    } catch (error) {
        res.status(400).json({
            status: 'Failed' ,
            error
        })
        
    }
}


module.exports = validateNewJob;