const router = require('express').Router();
const Students = require('./model.js');

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      console.log(students);
      res.json(students);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    const student = req.body;
    
    Students.add(student)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch((message, code, stack, name) => {
      res.status(500).json({message, code, stack, name});
    });
})

module.exports = router;
