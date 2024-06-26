const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    monthlySalary: {
        type: Number,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skillsRequired: [
        {
            type: String,
            required: true,
        },
    ],
    additionalInformation: {
        type: String,
    },
    authorUserId: {
        type: mongoose.ObjectId,
    }
},
{ timestamps : {createdAt: "createdAt" , updatedAt: 'updatedAt'}}
);

module.exports = mongoose.model('Job', jobSchema);


// company name, logo URL, job position/title
//monthly salary, job type, remote, location, job description
//about company, skills required, additional information