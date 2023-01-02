var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {productName:"Laptop1",productPrice:"60k"},
    {productName:"Laptop2",productPrice:"70k"},
    {productName:"Laptop3",productPrice:"80k"},
    {productName:"Laptop4",productPrice:"90k"},
    {productName:"Laptop5",productPrice:"100k"},
  
  ]
  res.render('index', { title: 'Express' , products:products});
});

module.exports = router;
// title: 'Express' ,