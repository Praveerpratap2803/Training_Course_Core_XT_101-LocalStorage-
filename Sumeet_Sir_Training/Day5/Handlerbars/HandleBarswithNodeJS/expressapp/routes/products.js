var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let products = [
    { name: "LED TV", price: 50000 },
    { name: "Mac Book Pro", price: 250000 },
  ];

  res.render("products", { products });
});

module.exports = router;