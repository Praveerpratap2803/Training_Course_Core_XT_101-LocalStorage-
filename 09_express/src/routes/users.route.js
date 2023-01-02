
const express = require('express');
const { getUsers } = require('../controllers/users.controller');

const router = express.Router();
router.get('',getUsers)
module.exports = router;

/*
router.get('',(req,res)=>{
    res.write('User API under construction .Try again later')
    res.end();
})

module.exports = router;
*/






