const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/signup", function(req, res, next) {
  var user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname
  };

  var query = connection.query("INSERT INTO users SET ?", user, function(
    error,
    results,
    fields
  ) {
    if (error) res.status(500).json({ flash: error.message });
    else res.status(200).json({ flash: "User has been signed up!" });
  });
});

module.exports = router;
