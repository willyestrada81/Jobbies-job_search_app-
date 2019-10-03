const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Job = require('../models/Job');

// GET JOBS LIST
router.get('/', (req, res) => 
    Job.findAll().then(jobs => {
        res.render('jobs', {
            jobs
        })
    }).catch(err => console.log(err))
)

// ADD JOBS 

router.get('/add', (req, res) => {
    const data = {
        title: 'react',
        technologies: 'React',
        budget: 'Sample description',
        contact_email: 'test@gmail.com'
    }
  
})

module.exports = router; 