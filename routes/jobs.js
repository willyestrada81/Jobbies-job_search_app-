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

// ADD JOBS FORM
router.get('/add', (req, res) => {
    res.render('add')
  
})

//GET DATA FROM FORM AND SAVE IT TO THE DB
router.post('/add', (req, res) => {
    let {title, technologies, budget, description, contact_email} = req.body;

    //Validate fields
    let errors = [];
    if(!title){
        errors.push({text: 'Please add a title'})
    }
    if(!technologies){
        errors.push({text: 'Please add some technologies'})
    }
    if(!description){
        errors.push({text: 'Please add a description'})
    }
    if(!contact_email){
        errors.push({text: 'Please add a valid email'})
    }
    //Check for errors
    if(errors.length > 0){
        res.render('add', {
            errors,
            title,
            technologies,
            budget,
            description,
            contact_email
        })
    }else {
        //Insert into the table
        Job.create({
            title,
            technologies,
            description,
            budget,
            contact_email
        })
        .then(job => res.redirect('/jobs'))
        .catch(err => console.log(err));
    }
})

module.exports = router; 