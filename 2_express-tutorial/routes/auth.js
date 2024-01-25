const express = require("express");
const router = express.Router();

//Post method
router.post("/login", (req, res) => {
  res.status(201).send("success");
});

module.exports = router;