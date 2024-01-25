const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPeople,
  putPeople,
  deletePeople,
} = require("../controllers/people");
const { people } = require("../data");

// //Get method
// router.get("/", getPeople);
// //Post method
// router.post("/", postPeople);
// //Put method
// router.put("/postman/:id", putPeople);
// //Delete method
// router.delete("/:id", deletePeople);
  router.route('/').get(getPeople).post(postPeople);
  router.route('/postman/:id').put(putPeople);
  router.route('/:id').delete(deletePeople);


module.exports = router;
