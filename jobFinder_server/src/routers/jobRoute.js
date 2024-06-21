const express = require('express')
const router = express.Router() ;
const validNewJob = require('../middleware/validateNewJob') ;
const verifyToken = require('../middleware/verifyToken')
const {
    getFilteredJobs , 
    getJobById ,
    addNewJob ,
    updateExistingJob ,
    deleteJob
} = require('../controllers/jobController')

router.get('/' , getFilteredJobs())

router.get('/:id' , getJobById())

router.post('/addJobs' , verifyToken , validNewJob , addNewJob())

router.put('/update/:id' , verifyToken , validNewJob , updateExistingJob())

router.delete('/delete/:id', verifyToken , deleteJob())

module.exports = router