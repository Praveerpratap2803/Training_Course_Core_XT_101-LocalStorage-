const fetch = require("node-fetch")
var express = require("express");
var router = express.Router();
//import fetch from 'node-fetch';


let allPerson=[];
fetch('https://api.github.com/users')
    .then(function (response) {
        return response.json()
    })
    .then(function(people) {
        allPerson=people
    })



router.get("/", function (req, res, next) {
    // let products = [
    //   { name: "LED TV", price: 50000 },
    //   { name: "Mac Book Pro", price: 250000 },
    // ];
  
    res.render("people", { allPerson });
  });
  
  module.exports = router;



