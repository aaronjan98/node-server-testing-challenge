const router = require('express').Router();
const Students = require('./model.js');

// router.get("/", (req, res) => {
//     res.json({ router: "students" });
// });

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      console.log(students);
      res.json(students);
    })
    .catch(err => res.send(err));
});

module.exports = router;
