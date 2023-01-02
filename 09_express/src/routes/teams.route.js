
const express = require('express');
const {getTeams}=require('../controllers/teams.contoller');

const router = express.Router();
router.get('',getTeams)
module.exports = router;

/*
router.get('',(req,res)=>{
    // res.write('Teams API under construction .Try again later')
    // res.end();
        // write(), end() and sets 'Content-Type' in response headers to 'text/html'

    res.send('API under construction. Try again later.')
})

module.exports = router;
*/






