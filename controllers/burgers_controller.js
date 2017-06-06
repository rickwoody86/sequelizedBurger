var express = require('express');
var router = express.Router();
var db = require('../models');
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 db.Burger.findAll({
 }).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
  };
  console.log(hbsObject);
  res.render("index", hbsObject);
});
});

router.post("/create", function(req, res) {
  console.log(req.body.burger_name);
  db.Burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burgers.update({
    devoured: req.body.devoured
  },
  {
    where:{id:req.params.id}
  }).then(function(data) {
    res.redirect("/");
  });
});

module.exports = router;
