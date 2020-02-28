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

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Students.deleteStudent(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: "failed to remove the student" });
      });
  });

module.exports = router;
