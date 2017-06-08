var express = require('express');
var router = express.Router();
var db = require('../models');



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

router.post("/", function(req, res) {
  console.log(req.body.burger_name);
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  },
  {
    where:{id:req.params.id}
  }).then(function(data) {
    res.redirect("/");
  });
});

module.exports = router;
