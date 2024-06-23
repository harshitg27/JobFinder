const validateNewJob = (req, res, next) => {
    // company name, logo URL, job position/title
    //monthly salary, job type, remote, location, job description
    //about company, skills required, additional information
    const { companyName, logoUrl, jobTitle, monthlySalary, jobType, workType, location, jobDescription, aboutCompany, skillsRequired } = req.body;
    if (!companyName || !logoUrl || !jobTitle || !monthlySalary || !jobType || workType || !location || !jobDescription || !aboutCompany || !skillsRequired) {
        return res.status(400).json({
            message: 'Please provide all required fields',
        });
    }
    // console.log(req.refUserID)
    // const authorUserId = req.refUserID ;

    const jobtTpesField = ['Full-Time' , 'Part-Time' , 'Internship' ]
    // const validSkills = Array.isArray(skillsRequired) && skillsRequired.every((skill) => typeof skill === 'String') ;
    const validMonthlySalary = typeof monthlySalary == 'number' && monthlySalary > 0 ;
    const validJobTypes = jobtTpesField.includes(jobType)

    // !validSkills ||
    if ( !validMonthlySalary || !validJobTypes) {
        return res.status(400).json({
            message: 'Some fields are invalid, please check and try again',
        });
    } else {
        next();
    };
}


module.exports = validateNewJob;