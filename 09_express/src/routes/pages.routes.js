
const express = require('express');
const {showMeetings} = require('../controllers/pages.conroller')
const router = express.Router();

router.get('/meetings',showMeetings)

module.exports = router;


/*
router.get('/meetings',(req,res)=>{
    res.render('meetings',{
        title:'List of meeting'
    })
})

module.exports = router;
*/







